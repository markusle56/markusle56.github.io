# markusle56.github.io

Personal portfolio for Anh Khoa (Markus) Le — [anhkhoa.dev](https://anhkhoa.dev).
Built with [Hugo](https://gohugo.io) and hand-written layouts (no theme, no Go
module, no npm).

## Running it

```bash
hugo server
```

Then open <http://localhost:1313>. To build the production site into `public/`:

```bash
hugo --minify
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/hugo.yml`.

## Adding content

Everything on the home page comes from files — drop a file in, it shows up.

### A new thought

```bash
hugo new content thoughts/what-34-hours-at-a-hackathon-teaches-you.md
```

Write markdown, set `draft = false`, done. It appears as a card in the
**My Thoughts** section on the home page and gets its own page at
`/thoughts/<slug>/`. The section hides itself entirely while there are no
thoughts, so nothing looks broken before the first one lands.

### A new project

```bash
hugo new content project/MyThing.md
```

Cards are ordered by `date`, newest first, on both the home page and
`/project/`. The rest of the front matter drives the card itself:

| Key          | What it does                                             |
|--------------|----------------------------------------------------------|
| `date`       | Card order, newest first                                  |
| `kicker`     | Small uppercase label above the title                     |
| `blurb`      | Card text, falling back to the page's opening lines       |
| `tags`       | Tag chips on the card                                     |
| `link`       | External link (repo, live demo)                           |
| `linkLabel`  | Label for that link, e.g. "Try the demo"                  |
| `featured`   | Tints the card with the accent and adds a "Featured" chip |

Set `featured = true` on one project at a time — VegaHed currently holds it.

### Images

Put them in `assets/` and reference them by path. Hugo resizes and converts to
WebP at build time:

```
{{< paige/figure float="end" >}}
  {{< paige/image src="vegahed.png" width="30rem" class="rounded" >}}
{{< /paige/figure >}}
```

The `paige/*` shortcodes (`figure`, `image`, `gallery`, `icon`) are ours now —
they were kept when the Paige theme was dropped so existing write-ups render
unchanged.

### The rest of the home page

| What                | Where                                        |
|---------------------|----------------------------------------------|
| Hero copy, portrait | `content/_index.md` front matter             |
| "Outside the code"  | `content/_index.md` (`outside_text`, `outside_images`) |
| Skills & stack      | `data/skills.yaml`                           |
| Timeline            | `data/timeline.yaml`                         |
| Contact links       | `hugo.toml` under `[params]`                 |
| Full about page     | `content/about/_index.md`                    |

The hero portrait is read from `assets/portrait.jpg`. Until that file exists the
hero renders full-width with no photo.
