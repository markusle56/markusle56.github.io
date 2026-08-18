+++
date = "2026-08-01T00:00:00+09:30"
draft = false
title = "VegaHed"
kicker = "Full-stack · Live"
featured = true
blurb = "A personal “Punk Record”: paste any link and it scrapes the metadata and files it away under an AI-picked category."
tags = ["Next.js", "TypeScript", "MongoDB", "Gemini"]
link = "https://vegahead.com"
linkLabel = "Visit the site"
+++
{{< paige/figure float="end" >}}
{{< paige/image src="vegahed.png" width="30rem" class="rounded" >}}
{{< /paige/figure >}}

# Project Overview

VegaHed is a full-stack web application inspired by the *One Piece* character Vegapunk, who consumed a fruit that allows him to remember everything he has ever read. However, the more knowledge he acquires, the larger his head becomes. With his intelligence, he invented Punk Record — a system that stores his knowledge on a server and links with his brain, allowing him to keep learning without worrying about the physical limits of his head.

**VegaHed** acts as a personal "Punk Record." Users paste links to YouTube videos, TikToks, articles, or any webpage, and the system automatically categorises the content using AI — making it easy to review without searching across multiple platforms.

**Live site: [vegahead.com](https://vegahead.com)**

---

## Features

- **Save any URL** — paste a link and have it stored in your personal archive
- **AI-powered categorisation** — content is automatically categorised on save using Google Gemini / OpenAI
- **Metadata extraction** — title, description, and thumbnail scraped and stored for each record
- **Search** — search across all saved records by keyword
- **Authentication** — email/password sign-up and sign-in via NextAuth v5
- **Email notifications** — transactional emails via Resend
- **Dashboard** — browse and manage all saved records in one place

---

{{< paige/figure float="end" >}}
{{< paige/image src="vegahed_dashboard.png" width="35rem" class="rounded" >}}
{{< /paige/figure >}}

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Framework  | Next.js 15 (App Router)                        |
| Language   | TypeScript                                      |
| Styling    | Tailwind CSS v4                                 |
| Auth       | NextAuth v5 with MongoDB Adapter                |
| Database   | MongoDB                                         |
| AI         | Google Gemini, OpenAI                           |
| Scraping   | Metascraper, Cheerio                            |
| Email      | Resend                                          |
| Runtime    | Node.js / pnpm                                  |

---

{{< paige/figure float="start" >}}
{{< paige/image src="vegahed-color.png" width="16rem" class="rounded" >}}
{{< /paige/figure >}}

## Design Resources

- **Brand Guidelines:** Logo (self-designed)
- **Color Palette:**

| #FFFFFF | #FFF6EA | #7C0A02 | #ED2939 | #FF5757 |
|---------|---------|---------|---------|---------|

- **Typography:** Rowdies, Maven Pro
- **Mockups:** [Canva](https://www.canva.com/design/DAGtndnALKI/xU_uTeM6EHbHLOA0vYnKQw/edit)

---

## Browser Extension

A Manifest V3 Chrome extension puts the whole vault one keystroke away: capture
the current tab, search your records by meaning, and mint private or public
short links without leaving the page.

| | |
|---|---|
| **Capture** | Save the open tab straight into your vault, AI category and all |
| **Search** | Semantic search across every record from the popup |
| **Short links** | Private (`/my/`) or public (`/to/`) slugs with availability checks |
| **Shortcut** | Quick-capture on any page with ⌘⇧S / Ctrl+Shift+S |

Built with Vite, React 18, TypeScript and Tailwind CSS via `@crxjs/vite-plugin`.
