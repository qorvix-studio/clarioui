# Awesome UI Monorepo

Awesome UI is a Turborepo workspace for building a shared UI system with docs,
core components, shared styles, and Storybook support.

## Workspace

- `apps/docs`: Next.js documentation site for the design system
- `packages/core`: shared React components
- `packages/styles`: design tokens and global CSS
- `packages/storybook`: shared Storybook configuration

## Stack

- Turborepo
- pnpm workspaces
- Next.js 15
- React 19
- TypeScript

## Getting Started

```bash
pnpm install
pnpm dev:docs
```

Open the docs app at `http://localhost:3000`.

## Common Commands

```bash
pnpm dev
pnpm dev:docs
pnpm build
pnpm typecheck
pnpm lint
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development flow, branch naming,
validation steps, and commit guidance.

## Commit Instructions

Use small, focused commits that describe the user-visible change or the
technical intent.

Examples:

- `feat: add docs landing page for Awesome UI`
- `feat: scaffold core, styles, and storybook packages`
- `docs: add contributing and agent guidelines`
- `chore: align workspace config for turbo and pnpm`

Before committing, run:

```bash
pnpm typecheck
pnpm --filter docs build
```

## Collaboration Notes

- Add new reusable UI code in `packages/core`
- Put shared tokens and cross-app CSS in `packages/styles`
- Keep docs content in `apps/docs`
- Reuse the shared Storybook config from `packages/storybook`

