+++
date = "2026-03-01T00:00:00+09:30"
draft = false
title = "MarJazz — Jazz Piano Generation"
+++

{{< paige/figure float="end" >}}
{{< paige/image src="marjazz-pitch.png" width="32rem" class="rounded" >}}
{{< /paige/figure >}}

# Project Overview

**MarJazz** is a deep learning model for autoregressive MIDI music generation, trained on solo jazz piano performances from the [PiJAMA dataset](https://github.com/datasets/pijama). The model uses a dual-block LSTM architecture with REMI tokenisation to generate coherent ~60-second jazz piano pieces.

---

## Architecture

```
Token IDs → Embedding (128-dim)
    ↓
LSTM Block 1 → Dropout → LayerNorm   (pitch contour, rhythm)
    ↓
LSTM Block 2 → Dropout → LayerNorm   (phrases, harmony)
    ↓
MLP Head (GELU) → Dropout → LayerNorm
    ↓
Linear → Logits (vocab_size)
```

**Tokenisation:** REMI (REvamped MIDI-derived) — encodes music as `Bar`, `Position`, `Pitch`, `Velocity`, and `Duration` tokens, preserving bar-level structure essential for jazz phrasing.

**Generation:** Autoregressive sampling with temperature scaling, top-k filtering, and a repetition penalty to prevent motif loops.

---

## Key Hyperparameters

| Parameter      | Value | Description                        |
|----------------|-------|------------------------------------|
| Embedding dim  | 128   | Token embedding dimension          |
| Hidden size    | 256   | LSTM hidden state size             |
| LSTM layers    | 2     | Stacked layers per block           |
| Context window | 1024  | Max sequence length (tokens)       |
| Temperature    | 0.85  | Softmax temperature at generation  |
| Top-k          | 30    | Top-k sampling                     |
| Rep. penalty   | 1.5   | Repetition penalty factor          |
| Target length  | 60 s  | Target generation duration         |

---

{{< paige/figure float="end" >}}
{{< paige/image src="marjazz-velocity.png" width="32rem" class="rounded" >}}
{{< /paige/figure >}}

## Dataset Analysis

The model was trained on filtered MIDI files from PiJAMA. Quality filters were applied for pitch range, tempo, duration, and note density before tokenisation. The figures show pitch class and velocity distributions of the training corpus.

---

## Sample Output

A generated ~60-second jazz piano piece is included in `samples/generated_song.mid`. To listen, drag and drop the file into [Signal MIDI Editor](https://signal.vercel.app) (browser-based, no install needed).

---

## Tech Stack

- **PyTorch** — model definition and training
- **MidiTok** — REMI tokenisation
- **Symusic** — fast MIDI I/O
- **pretty_midi** — MIDI analysis and visualisation
- NumPy, Pandas, Matplotlib

---

## GitHub

[markusle56/MarJazzzzz](https://github.com/markusle56/MarJazzzzz)
