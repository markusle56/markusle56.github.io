+++
date = "2026-07-29T00:00:00+09:30"
draft = false
title = "Wumpus World Agent"
kicker = "AI · Knowledge representation"
blurb = "An agent that reasons its way through a dark cave from nothing but stench and breeze, finds the gold, and gets back out alive. No learning, pure rule-based inference."
tags = ["Python", "Rule-based AI", "Search", "Logic"]
link = "https://github.com/markusle56/wumpus_world"
linkLabel = "View on GitHub"
+++

> ### Zero ML dependencies
> No neural network. No reinforcement learning. No training data, no reward
> function, not one learned parameter. The agent imports `argparse` and
> `collections`, and solves the cave by **rule-based inference alone**.

<div class="skill-tags" style="margin-bottom:var(--space-6);">
  <span class="tag tag-outline">No neural network</span>
  <span class="tag tag-outline">No RL</span>
  <span class="tag tag-outline">No training data</span>
  <span class="tag tag-outline">Correct on the first cave</span>
</div>

> **What is mine here.** This is a university assignment. The Pygame emulator,
> the cave generator and the scoring were provided by the course. Everything the
> agent does, all of the perception, inference and planning in `my_agent.py`, is
> my own work.

# Project Overview

Wumpus World is the classic AI textbook environment: a grid of caves holding
bottomless pits, a lurking Wumpus, and a pile of gold. The agent starts in one
corner knowing nothing about the layout and cannot see the map. All it ever
receives is five booleans:

| Sense | What it means |
|-------|---------------|
| **Stench** | The Wumpus is in an adjacent cell |
| **Breeze** | A pit is in an adjacent cell |
| **Glimmer** | The gold is in this cell |
| **Bump** | The last move ran into a wall |
| **Scream** | The Wumpus just died |

From that trickle of information the agent has to infer where it is safe to
walk, grab the gold, and return to the entrance to exit with a positive score.

---

## How the Agent Reasons

The agent keeps a running model of the cave and updates it on every step.

### Mapping without a map

The cave's dimensions are unknown at the start, so the agent tracks four
boundary estimates that begin at infinity and tighten each time a `Bump` reveals
a wall. Every cell it visits is recorded along with the senses it produced, and
explored cells are linked into an adjacency graph that later serves as the
search space for pathfinding.

### Classifying cells

Every known cell falls into one of four buckets, which shift as evidence
arrives:

- **Safe**: proven free of pits and Wumpus
- **Uncertain**: safe to stand in, but with unexplored neighbours
- **Unsafe**: a pit or the Wumpus is inferred here
- **Possible Wumpus**: consistent with the stench observed so far

The inference is the interesting part. A cell with no breeze proves every
neighbour is pit-free. A cell with a breeze means at least one neighbour is a
pit, which only becomes actionable once other observations narrow the
candidates. Stench works the same way, but with a single Wumpus the constraints
intersect much faster: two stench readings usually pin it exactly.

### Deciding what to do

With the map classified, the agent picks a target (the nearest unexplored safe
cell, the gold once it glimmers, or the exit once the gold is in hand) and
routes to it through the adjacency graph, turning and stepping along the way. It
holds its single arrow back until the Wumpus's cell is actually determined,
since a wasted shot costs points and gains nothing. A `Scream` confirms the kill
and reopens every cell that was blocked only by the Wumpus.

---

## Why Rule-Based, and Not Learned

There is no neural network here. No reinforcement learning, no training loop, no
reward shaping, not a single learned parameter. Every move the agent makes
traces back to an explicit rule that a person can read and check.

That was a deliberate choice, and I think it is worth defending. Reaching for a
learned policy has become the reflex answer to any decision-making problem, but
Wumpus World is exactly the shape of problem where classical logic still wins:
the state space is small, the rules of the world are known exactly, and every
observation is a hard constraint rather than a noisy signal. Under those
conditions, an inference engine beats a learner on the things that actually
matter.

| | Rule-based agent | RL agent |
|---|---|---|
| Training | None. Correct on the first cave it ever sees | Thousands of episodes, most of them fatal |
| New cave layout | No penalty, the rules do not change | Re-tune, or hope the policy transfers |
| A wrong move | Trace it to the exact inference that failed | Inspect a policy network and guess |
| Guarantees | Never steps on a cell proven unsafe | Low probability, not zero |

One line of logic, *no breeze means every neighbour is pit-free*, states
outright what an RL agent would need thousands of deaths to approximate, and
states it with certainty rather than confidence. When the agent does fail, the
failure is a bug in a rule I wrote, not an opaque weight, so I can find it and
fix it.

None of which is an argument against learning. It is an argument for reading the
problem first. Learning earns its keep when the rules are unknown, the state is
huge, or the signal is noisy, and none of those describe a cave with five
booleans and a known physics.

---

## Tech Stack

- **Python standard library only** for the agent, inference and pathfinding:
  sets, dicts and a `defaultdict` adjacency graph, nothing else
- **No ML dependencies.** No PyTorch, no TensorFlow, no gym, no scikit-learn.
  The whole `requirements.txt` is `pygame`, `PyYAML` and `numpy`, and all three
  belong to the course's emulator rather than to the agent
- **Pygame** for the emulator, which the course supplied. The agent runs headless
  for batch scoring across randomised caves, or windowed to watch a single run

---

## Running It

```bash
python -m pip install -r requirements.txt
python my_agent.py --cave default          # watch the agent play
python human_agent.py --cave default       # play it yourself
```

Pass `--seed` to replay the same cave, or `--show-window false` to score a batch
of runs without rendering.
