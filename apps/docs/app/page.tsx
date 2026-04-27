"use client";

import { Button } from "@awesomeui/core";

const principles = [
  "Reusable components, tokens, and docs built to stay aligned.",
  "A docs-first workflow so UI changes stay visible across the workspace.",
  "Shared styling primitives that scale across apps, docs, and Storybook."
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Apps / Docs</p>
        <h1>Clario UI documentation</h1>
        <p className="hero-copy">
          Clario UI is the shared design system for this monorepo. This docs
          app is the central place to present reusable components, visual
          foundations, and package relationships across the workspace.
        </p>
        <div className="hero-actions">
          <Button>Explore components</Button>
          <a className="text-link" href="#foundation">
            View foundations
          </a>
        </div>
      </section>

      <section className="content-grid" id="foundation">
        <article className="panel">
          <p className="section-label">Foundation</p>
          <h2>Built for a shared UI workflow</h2>
          <ul className="feature-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel accent-panel">
          <p className="section-label">Packages</p>
          <h2>Workspace package overview</h2>
          <p>
            `packages/core` provides reusable React components,
            `packages/styles` owns tokens and global CSS, and
            `packages/storybook` supports a shared preview setup so Clario UI
            stays consistent wherever it is consumed.
          </p>
        </article>
      </section>
    </main>
  );
}
