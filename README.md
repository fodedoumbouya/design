# Ekklo Design System

Ekklo is an all-in-one operating system for independent fitness coaches and wellness pros — clients, prospects (CRM), calendar, fitness & nutrition programs, tracking, videos, accounting, teams, drive, automations, notifications, and a mobile app for clients. The product is in active beta ("9 free trial days remaining") and supports French + English UIs.

This repo captures the visual + interaction language pulled directly from the live `pro.ekklo` web app (see `/screens/`).

## Brand tone

Friendly, energetic, **operator-grade**. Ekklo's coaches juggle a lot — payments, sessions, meal plans, exercise libraries with 2,761 entries — so the UI stays calm and dense, then uses one loud accent (lime) to point at the next action. The mascot (a smiling kettlebell named **Bell**) is the emotional anchor; he shows up in empty states and onboarding, never in dense data views.

## The system at a glance

| | |
|---|---|
| **Primary accent** | `#D8F11A` lime — used as a fill for the single most-important CTA on every screen |
| **Primary text / dark fill** | `#1A1A1A` near-black — used for selected pills, headings, and the secondary CTA |
| **Surface** | `#FFFFFF` cards on `#FAFAFA` canvas; sidebar sits on the canvas |
| **Helper accent** | `#1ED77A` mint — reserved for the chat/help FAB and the mascot |
| **Type** | Inter for UI, weights 400 / 500 / 600 / 700 |
| **Radius** | Pills (full) for buttons, 12px for cards, 8px for inputs |
| **Density** | 14px body, 13px secondary, 11px uppercase eyebrows with +0.08em tracking |

## File index

- `colors_and_type.css` — design tokens (CSS variables) — single source of truth
- `preview/colors.html` — palette swatches
- `preview/type.html` — type ramp + voice
- `preview/spacing.html` — radius + spacing + shadow scale
- `preview/components.html` — buttons, pills, inputs, cards, table, modal, sidebar nav, empty state
- `preview/brand.html` — logo, mascot, iconography notes
- `ui_kits/dashboard/` — full Ekklo dashboard composed from the kit, ready to clone for new screens

## Using the system

Drop `colors_and_type.css` into a new screen. Then assemble pages using the patterns documented in `preview/components.html`. For full-screen mockups, copy `ui_kits/dashboard/index.html` and swap the `<main>` content.
