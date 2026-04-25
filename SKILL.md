# Ekklo Design System — Skill

When designing for Ekklo, follow these rules.

## 1. Read the system first
Always read `colors_and_type.css` (tokens) and skim `preview/components.html` before designing. Use `ui_kits/dashboard/index.html` as the canonical example of how it all fits together.

## 2. Use tokens, never raw values
- Colors → `var(--ekklo-lime)`, `var(--text-primary)`, `var(--surface-card)`, etc.
- Type → `font: var(--t-h2)` shorthand whenever possible
- Radii → `var(--r-pill)` for buttons, `var(--r-card)` for cards, `var(--r-input)` for inputs
- Never invent a new color. If a tone is missing, ask first.

## 3. The lime rule
`#D8F11A` is the primary CTA on every screen, and there should be **only one** lime button visible at a time. Secondary actions are ink (`#1A1A1A`) pills or ghost buttons. Tertiary is text-only.

## 4. The mascot rule
**Bell** (the green kettlebell) appears only in:
- Onboarding flows
- Greeting cards (Dashboard "Hello {name}")
- Long empty states (Notifications, Activity, etc.)

Never in tables, charts, or dense data. Never below 36px. The mint green (`#1ED77A`) belongs to Bell and the help FAB — nothing else.

## 5. Voice
Friendly + operator-grade. Microcopy is short, action-oriented, and addresses the coach directly. Keep emoji to 🚀 (Getting Started) and 👋 (greeting) — nothing else in chrome.

## 6. Density
Coaches manage a lot of data. Default body is 14px, table rows are 36–40px, sidebar items are 32px. Don't pad — ship dense.

## 7. Components — what exists
Button (lime / ink / ghost), pill chip, segmented filter, search input, text input, card, table row, modal, sidebar nav item with `.active` and right-side `.tag`, empty state with mascot, "Getting Started" sidebar pinned card, top-bar trial banner.

If you need something not listed, propose it with a sketch first.
