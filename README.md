# 🍳 The Cookbook — Project Spec & README

> A personal, living cookbook to document the recipes I cook, and to share that passion with friends and family.

This document is the source of truth for what this project is, how it's built, and how I add to it. It's intentionally scoped to a lean **v1**.

---

## 1. Vision

A personal, living cookbook — a small, lovingly-made website where I collect the recipes I actually cook, and share them with the people I'd otherwise only get to cook *for*.

It is **view-only** for visitors. I am the sole author and editor.

---

## 2. Audience

| Role | Who | Can they… |
|------|-----|-----------|
| Author / editor | Me | Add, edit, and publish recipes |
| Visitors | Friends & family | View and browse only |

No user accounts. No logins. Anyone with the link can view.

---

## 3. How it's built (technical decisions)

| Decision | Choice |
|----------|--------|
| Site type | **Static site** (no backend, no live database) |
| Site generator | **Astro** (static site generator) |
| Content format | One **markdown file per recipe**, with a structured frontmatter header |
| Code editor | **VS Code** |
| Version control | **Git + GitHub** (the repo is the control panel) |
| Hosting | **GitHub Pages** (auto-publishes on every push) |
| Photos | Stored in the repo alongside the code |

### The publishing loop

Adding a recipe is a four-step loop, all inside tools I already use:

1. **Create** a new file in VS Code, e.g. `src/content/recipes/mapo-tofu.md`, and drop its photo in the images folder.
2. **Commit** the change in VS Code's Git panel with a short message (e.g. "Add mapo tofu").
3. **Push** the commit to GitHub.
4. GitHub Pages **auto-rebuilds and republishes** — the recipe is live a minute or two later.

There is no separate website dashboard. Add file → commit → push → live.

---

## 4. Adding recipes (the import workflow)

Import is **not** a button on the live site (a static site has no server to fetch links). Instead it's part of my authoring workflow:

- **Recipe websites:** I paste the link to Claude → Claude returns a ready-to-drop-in markdown recipe file, with fields already split out (title, structured ingredients, steps, source credit). I commit it.
- **TikTok:** I paste the link + caption/description to Claude → Claude helps me fill in the recipe fields into the same markdown format. (No magic one-click scrape — assisted fill instead.)

Either way, the original source is **credited** via the `source` field.

---

## 5. Recipe data model

Every recipe is a markdown file with this structure:

```markdown
---
title: Mapo Tofu
description: A short story or note about the dish.
image: ./images/mapo-tofu.jpg
diet: [meat]                      # multi-select: meat | vegetarian | vegan | low-carb
mealType: dinner                  # breakfast | lunch-dinner | dessert
cuisine: Sichuan
time: 30 min
servings: 4                       # displayed only; no scaling in v1
source: https://original-link...
---

## Ingredients
- 400 g silken tofu
- 200 g ground pork
- 2 tbsp doubanjiang

## Method
1. Step one…
2. Step two…
```

### Field reference

| Field | Type | Notes |
|-------|------|-------|
| `title` | text | Recipe name |
| `description` | text | Short story / intro |
| `image` | path | Main photo (multiple photos optional) |
| `diet` | list | **Multi-value.** A recipe can appear under several diet tags. Values: `meat`, `vegetarian`, `vegan`, `low-carb` |
| `mealType` | single | `breakfast`, `lunch-dinner`, `dessert` |
| `cuisine` | text | e.g. Sichuan, Italian |
| `time` | text | Total time, e.g. "30 min" |
| `servings` | text/number | Displayed as "Serves 4". **No scaling in v1.** |
| `source` | URL | Original TikTok/website, credited |
| Ingredients | structured rows | amount + unit + name |
| Method | numbered steps | The instructions |

---

## 6. Pages / sitemap

1. **Landing** — opens with a **static mascot illustration** of the blonde buzz-cut character (cooking pose). Not animated in v1.
2. **Home / recipe gallery** — browse all recipes as cards, with tag filtering.
3. **Single recipe page** — photo, story, ingredients, method, source credit, and the character sign-off at the end.
4. **"A note to you"** — my personal message to the people I'm sharing this with.
5. **About / how-to-use** — short page explaining what this is and how to navigate it.

---

## 7. Features (v1)

- **Browse & filter** the gallery by **diet tag** — and, since the data's already there, also by **meal type, cuisine, and time**. One recipe can match several filters.
- **View** individual recipe pages.
- **The personal note page.**
- (Import lives in my authoring workflow, per §4 — not a site feature.)

---

## 8. Design language

Yoshitomo Nara–*inspired* (original artwork in that spirit, **not** copies of his paintings):

- Flat, simple shapes; big-headed minimal figure.
- Muted, limited colour palette.
- Slightly deadpan, mischievous mood.
- **Central mascot:** a boy with a **blonde buzz cut and a slightly receding hairline.** Used as a recurring motif.

### Where the character appears

| Placement | Treatment |
|-----------|-----------|
| Landing screen | Static illustration, a cooking pose (e.g. serving mapo tofu) |
| Logo (top, centre) | The character in **differing looks** — chef hat, holding a spatula, chopping a veg, etc. |
| End of each recipe | A sign-off illustration of the character |

All character art is **original SVG illustration**.

---

## 9. Out of scope for v1

Deliberately excluded to keep the first version focused:

- ❌ Recipe scaling / serving adjuster
- ❌ Animated mascot (static only for now)
- ❌ Live one-click web/TikTok import
- ❌ Meal planning
- ❌ Shopping lists
- ❌ Comments / ratings
- ❌ User accounts / logins

---

## 10. Build order

1. **Project skeleton** — Astro set up, folder structure, GitHub repo.
2. **Design language** — palette, typography, mascot illustration(s), logo, recipe sign-off.
3. **Templates** — gallery page, single recipe page, note page, about page, landing.
4. **A few hand-typed recipes** to populate it.
5. **Tag filtering** working on the gallery.
6. **Deploy** to GitHub Pages — shareable v1 live.

_Later (post-v1):_ the paste-to-Claude import workflow polish, the animated mascot, and any "nice to have" extras.

---

## 11. Setup notes (one-time)

- Install **Node** (the runtime Astro needs).
- Initialise the Astro project and install dependencies.
- Connect the repo to **GitHub Pages**.

After this one-time setup, day-to-day is just the **write → commit → push** loop in §3.