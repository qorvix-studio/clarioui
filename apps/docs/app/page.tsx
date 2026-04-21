import { Button } from "@awesomeui/core";

const principles = [
  "Clear foundations for components, tokens, and docs.",
  "A docs-first workflow so design system changes stay visible.",
  "Shared styling primitives that work across apps and Storybook."
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Apps / Docs</p>
        <h1>Nor Awesome UI details</h1>
        <p className="hero-copy">
          This is the first docs page in the monorepo. It introduces the
          Awesome UI direction and proves that the `docs` app can consume shared
          packages from `core` and `styles`.
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
          <h2>Monorepo starting point</h2>
          <ul className="feature-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel accent-panel">
          <p className="section-label">Packages</p>
          <h2>Ready for the next pass</h2>
          <p>
            `packages/core` exports reusable React components, `packages/styles`
            owns tokens and global CSS, and `packages/storybook` now has a
            shared config shell for later Storybook setup.
          </p>
        </article>
      </section>
    </main>
  );
}

