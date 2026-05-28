+++
date = "2025-08-26T13:07:03.720098"
draft = false
title = "VegaHed"
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

## GitHub

[markusle56/vegahed](https://github.com/markusle56/vegahed)
