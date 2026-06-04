# ioniapara.com

Personal site for Ion Iapară, Senior PM in Berlin.
Goal: find collaborators for side projects + writing presence.

## Design system

- **Aesthetic:** minimal monospace, all lowercase
- **Fonts:** JetBrains Mono (body), Departure Mono (hero name only)
- **Colors:** #fafaf9 background, #1c1c1a text, #a0a09c muted
- **Tag colors:** ship/join #2563eb, start #c2820a, write #15803d, life #a0a09c
- **Nav:** `ion` (left) · `log · projects · writing · now` (right)
- **Footer:** sticky, frosted glass, `ion iapară · berlin · open to collab` + email/LinkedIn/GitHub
- **Motion:** entrance fade-in, respects prefers-reduced-motion
- **Selection:** inverted (background = text, text = background)
- **External links:** marked with ↗ (used on Medium links)

## Conventions

- All file paths lowercase, no spaces
- Diacritic `Iapară` in display contexts, `Iapara` in URLs/meta
- One shared `styles.css`, page-specific styles only when truly page-specific
- Plain HTML + CSS, no build step, no JS frameworks
- Vanilla JS only where interactivity is needed (filters on log page)

## Pages

- `/` — homepage (hero + log section + condensed projects/writing)
- `/log` — full changelog with filters
- `/projects` — side projects with detail
- `/writing` — Medium article list (manual, not RSS)
- `/now` — current state, short
