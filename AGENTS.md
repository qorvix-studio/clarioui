# AGENTS

This file helps human and AI contributors work consistently in the Awesome UI
monorepo.

## Mission

Build a clean, reusable UI system with a docs-first workflow.

## Repo Map

- `apps/docs`: documentation site and showcase surface
- `packages/core`: reusable UI components
- `packages/styles`: shared CSS, tokens, and visual foundations
- `packages/storybook`: shared Storybook setup

## Working Rules

- Prefer changes that improve reuse across the workspace
- Keep docs and shared packages in sync
- Do not add app-specific styling into `packages/core`
- Keep `packages/styles` focused on tokens, globals, and design primitives
- Make small, reviewable changes instead of broad rewrites

## Validation Rules

Before finishing a task, run:

```bash
pnpm typecheck
pnpm --filter docs build
```

If a change affects Storybook later, run the relevant Storybook command too.

## Commit Rules

- Use conventional-style prefixes such as `feat:`, `fix:`, `docs:`, and `chore:`
- Keep each commit scoped to one clear change
- Write commit messages that describe intent, not just files touched

Examples:

- `feat: add initial docs landing page`
- `docs: add repo contribution guides`
- `chore: configure workspace defaults`

## Handoff Notes

When handing work to another contributor or agent:

- mention the files changed
- mention any assumptions made
- mention checks already run
- note any unfinished follow-up work
