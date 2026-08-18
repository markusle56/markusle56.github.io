+++
date = "2026-04-01T00:00:00+09:30"
draft = false
title = "#SkillHub.md: Agent Skill Registry"
kicker = "Product Cadet Challenge 2026"
blurb = "A SPA where builders upload, tag, and share markdown skill files for AI agents like Claude Code, with auth, versioning, and a public registry to browse."
tags = ["React", "FastAPI", "SQLite", "Docker"]
link = "https://github.com/markusle56/Agent-Skills-Registry"
linkLabel = "View on GitHub"
+++

{{< paige/figure float="end" >}}
{{< paige/image src="skillhub-color.png" width="18rem" class="rounded" >}}
{{< /paige/figure >}}

# Project Overview

**#SkillHub.md** is a Single-Page Application (SPA) built for the **2026 Product Cadet Challenge** by [insightfactory.ai](https://insightfactory.ai). It lets users upload, manage, and share markdown-based skill files for AI agents like Claude Code — the files contain instructions and metadata that guide agents in performing specific tasks.

---

## Features

### Essential
- User authentication with username/password
- Upload markdown skill files (private by default) with automatic frontmatter parsing (`name`, `description`, `allowed-tools`)
- Edit and delete skill files
- Tag assignment and management
- Publish skills as public and browse/search/download public skills from other users

### Nice-to-Have
- Download and view count tracking
- Version history with last-edited timestamps
- GitHub-style diff viewer between versions
- Clone public skills with source attribution
- Analytics dashboard (activity trends, top tags)

---

## Tech Stack

| Layer    | Technology                    |
|----------|-------------------------------|
| Frontend | Vite + React + Tailwind CSS   |
| Backend  | FastAPI (Python)               |
| Database | SQLite                        |
| Infra    | Docker + Docker Compose       |

**Architecture:** SPA with a dedicated REST API backend. FastAPI was chosen for strong typing, async support, and auto-generated Swagger docs. React + Vite for fast iteration; SQLite for simplicity with a storage-agnostic design ready for future migration.

---

## Demo

[![SkillHub Demo](https://img.youtube.com/vi/Pruf94h8BuI/mqdefault.jpg)](https://youtu.be/Pruf94h8BuI)

**[▶ Watch on YouTube](https://youtu.be/Pruf94h8BuI)**

---

## Quick Start (Docker)

```bash
docker compose up --build
# Frontend: http://localhost:5173
# Backend (Swagger): http://localhost:8000/docs
```

Demo account — **Username:** `demo` / **Password:** `Password123@`

---

## GitHub

[markusle56/Agent-Skills-Registry](https://github.com/markusle56/Agent-Skills-Registry)
