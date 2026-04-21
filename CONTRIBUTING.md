# Contributing

Thanks for contributing to Awesome UI.

## Development Flow

1. Install dependencies with `pnpm install`
2. Start the docs app with `pnpm dev:docs`
3. Make changes in the app or shared packages
4. Validate the workspace before committing

## Project Conventions

- Put reusable React components in `packages/core`
- Put shared CSS tokens and global styles in `packages/styles`
- Keep documentation pages and examples in `apps/docs`
- Use `packages/storybook` for shared Storybook config
- Prefer TypeScript and keep exported APIs small and clear

## Branch Naming

Use short descriptive branch names. Preferred format:

```bash
codex/<scope>-<change>
```

Examples:

- `codex/docs-homepage`
- `codex/core-button-styles`
- `codex/storybook-setup`

## Validation

Run these commands before opening a PR or creating a final commit:

```bash
pnpm typecheck
pnpm --filter docs build
```

Add more package-specific checks as the repo grows.

## Commit Instructions

Write commits in imperative style and keep each commit focused on one logical
change.

Recommended prefixes:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `refactor:` for internal code improvements
- `chore:` for tooling or maintenance work

Examples:

- `feat: add docs app foundation`
- `feat: create shared button component`
- `docs: add contribution workflow`
- `chore: configure turbo pipeline`

Avoid mixing unrelated changes in one commit.

## Pull Requests

- Explain what changed and why
- Mention any follow-up work still needed
- Include screenshots for docs or UI changes when useful
- Keep PRs small enough to review quickly

