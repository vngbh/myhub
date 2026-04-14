---
name: myhub-project-conventions
description: Use this skill when working on the myhub Next.js home project to follow project structure, language, UI, Git, branch, commit, pull request, dependency, and documentation conventions.
---

# myhub Project Conventions

Use this file as the working agreement for every task in this repository. Before changing code, read the current project structure and keep this file updated when the structure changes.

## Design System

The visual design is guided by `DESIGN.md` at the repository root (Supabase-inspired dark theme). Read `DESIGN.md` before writing any UI. Key rules derived from it:

- **Dark-mode-native**: `#171717` page background, `#0f0f0f` for deeper surfaces. Never pure black.
- **Brand green** (`#3ecf8e`, `#00c573`): use sparingly — eyebrow labels, link accents, badge hovers. Not for backgrounds or large surfaces.
- **Typography weights**: 400 for body and headings, 500 for nav links and button labels only. No 700.
- **Hero line-height**: `1.00` — the signature typographic move. Do not increase.
- **Pill buttons** (9999px radius) for primary CTAs; 6px for ghost/ghost-like elements; 8–16px for cards.
- **No box-shadows** — depth comes from border color differences (`#242424` → `#2e2e2e` → `#363636`).
- **Eyebrow labels**: Source Code Pro or monospace, 12px, uppercase, 1.2px letter-spacing, brand green color.
- **`DESIGN.md` is the source of truth** for colors, typography scale, button shapes, spacing, and component patterns. When this file and `DESIGN.md` conflict on visual details, `DESIGN.md` wins.

## Language Convention

Use English across the project by default:

- Write documentation, `SKILL.md` files, comments, commit messages, branch names, PR titles, and PR descriptions in English.
- Spell the repository and package name as `myhub` in lowercase in technical contexts such as `package.json`, branch names, commits, and PR titles.
- Use `myhub` only when title case is useful for brand-style display copy.
- Write code identifiers, file names, folders, test names, fixtures, and accessibility labels in English.
- Use English as the default user-facing product copy unless a task is explicitly about Vietnamese copy, localization, or a personal home section that should stay in another language.
- Put translations in localization resources or docs under `docs/translate` if the project adds localization.
- If a task finds Vietnamese or any other non-English project text outside an explicit localization or requested home-copy context, propose converting it to English in the same PR.

## Project Structure

Current structure:

```text
myhub/
├── .gitignore
├── DESIGN.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
│   └── icons/
│       └── myhub_logo.svg
├── README.md
├── SKILL.md
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── skill/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── page-shell.tsx
│   │   │   ├── site-footer.tsx
│   │   │   └── site-header.tsx
│   │   ├── sections/
│   │   │   ├── page-header.tsx
│   │   │   ├── project-card.tsx
│   │   │   └── skill-ribbon.tsx
│   │   └── ui/
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── reveal-frame.tsx
│   ├── data/
│   │   ├── home.ts
│   │   └── site.ts
│   ├── lib/
│   │   └── utils.ts
├── tsconfig.json
└── yarn.lock
```

Generated or local-only paths such as `.next/`, `node_modules/`, `.DS_Store`, and environment files must stay out of Git.

Planned structure as the home grows:

```text
myhub/
├── SKILL.md
├── docs/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── styles/
│   └── types/
└── tests/
```

## App Structure Standard

Keep the frontend organized around a small, predictable Next.js App Router structure:

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── home.ts
│   └── site.ts
├── lib/
│   └── utils.ts
├── styles/
└── types/
```

Folder responsibilities:

- `src/app`: routes, layouts, metadata, global CSS entry points, and page-level composition.
- Root route `/` is the Home page and lives in `src/app/page.tsx`; do not add a `/portfolio` route or use `portfolio` naming for Home copy, files, or imports.
- `src/components/layout`: navigation, footer, and shared page chrome.
- `src/components/sections`: home sections such as hero, projects, skills, experience, and contact.
- `src/components/ui`: small reusable presentational components with no project-specific data baked in.
- `src/data`: home content, project lists, social links, and site configuration.
- `src/lib`: small reusable helpers that are not React components.
- `src/styles`: shared style files only when global CSS grows beyond `src/app/globals.css`.
- `src/types`: shared TypeScript types used across multiple areas.
- `public/images`: local images and static home/project assets served by Next.js.
- `docs`: project documentation, copy drafts, design notes, and future local skill files.
- `tests`: unit, component, or end-to-end tests when test tooling is added.

Structure change rule:

- If a task adds, removes, renames, or moves a top-level folder or a major folder under `src`, update this `SKILL.md`.
- If a task introduces a new architectural layer, content convention, styling system, testing approach, or deployment workflow, update this `SKILL.md`.
- If a task only edits implementation inside the existing structure, no structure update is required unless the current convention becomes misleading.

## Skill Routing

Use the smallest relevant skill context for each task:

- Always start with the root `SKILL.md` for repository-wide rules.
- If local skill files are added later, read only the local `SKILL.md` files for folders touched by the task.
- Treat local skill files as the source of truth for their area; keep the root skill focused on routing and cross-repository rules.
- If a change affects multiple areas, read each affected local skill before editing that area.
- If a task changes an area's structure, workflow, or recurring convention, update that area's local `SKILL.md` in the same PR.
- If a local change also affects repository-wide workflow, structure, language, validation, or Git behavior, update this root `SKILL.md` too.

Suggested future routing map:

```text
docs/**             -> docs/SKILL.md
public/**           -> public/SKILL.md when asset rules become detailed
src/app/**          -> src/app/SKILL.md when routing rules become detailed
src/components/**   -> src/components/SKILL.md
src/data/**         -> src/data/SKILL.md
tests/**            -> tests/SKILL.md
README.md           -> root SKILL.md, then docs/SKILL.md when development documentation changes
```

## Continuous Learning Rule

Capture useful lessons directly in the appropriate skill file:

- If a task reveals a better workflow, convention, recurring mistake, or useful reminder, propose updating the relevant `SKILL.md`.
- Use this root `SKILL.md` for repository-wide lessons that affect Git workflow, PRs, language, structure, validation, dependencies, styling, or deployment.
- Use a local `SKILL.md` for lessons that only affect one area after local skill files exist.
- Include skill updates in the same PR as the work that taught the lesson unless the user asks to split documentation separately.
- Keep skill updates concise, actionable, and written as rules future agents can follow.

Guidelines:

- Update the `Project Structure` section whenever files or folders are added, removed, renamed, or meaningfully reorganized.
- Keep page files focused on route composition.
- Move repeated UI into components when it has a second real use or when the page becomes hard to scan.
- Move home content into `src/data/home.ts` when it grows beyond a few inline entries.
- Add or update tests when changing data transformation, nontrivial interactions, forms, routing behavior, or user-facing flows.
- Keep unrelated refactors out of a task branch.

## Code Quality

Follow clean code principles for every change:

- Prefer small, focused React components with clear names.
- Keep one responsibility per component, helper, data file, or route file.
- Use TypeScript types for shared data shapes and component props.
- Prefer readable code over clever code.
- Delete dead code instead of leaving commented-out blocks.
- Add comments only when the intent is not obvious from the code itself.
- Keep public APIs minimal and meaningful.
- Preserve existing project style unless there is a strong reason to improve it.
- When a change becomes too large, split it into smaller tasks or PRs.

React and Next.js rules:

- Use the App Router conventions already present in `src/app`.
- Keep components server-rendered by default; add `"use client"` only when browser state, effects, event handlers, or client-only APIs are needed.
- Put metadata in `layout.tsx` or route-level metadata exports when appropriate.
- Use `next/image` for local or configured remote images when image optimization matters.
- Use semantic HTML and accessible labels for navigation, links, buttons, forms, and interactive controls.
- Keep external links explicit about target behavior and include safe `rel` values when using `target="_blank"`.

## UI And Styling

This is a home project, so visual quality matters:

- Build the actual home experience first; do not replace it with a marketing landing page.
- Keep the design responsive across mobile and desktop.
- Use stable layout dimensions for repeated UI, cards, grids, navigation, and interactive controls.
- Avoid text overflow; content must fit within its parent on mobile and desktop.
- Do not scale font size directly with viewport width; use sensible responsive CSS such as `clamp()`.
- Follow `DESIGN.md` letter-spacing values: 1.2px for monospace eyebrow labels, -0.16px for card titles, normal otherwise.
- Avoid cards inside cards.
- Use images intentionally. Prefer local assets in `public/images` for home/project content that should be stable.
- Do not reuse the same image for unrelated content.
- Keep color palettes balanced; avoid a UI dominated by one hue family.
- Use 8–16px radius for cards, 6px for ghost elements, 9999px (pill) for primary CTA buttons per `DESIGN.md`.
- Write user-facing product copy only. Do not add copy that describes the interface or says what the page "shows" or "features."

CSS rules:

- Keep global styles in `src/app/globals.css` while the project is small.
- Move repeated component-specific styling closer to components when the CSS becomes difficult to navigate.
- Prefer clear CSS class names over dense utility-only markup when a section has substantial custom design.
- Avoid machine-specific URLs or temporary assets in source files.
- Use shadcn-style primitives for reusable UI under `src/components/ui` when a component has variants, composition needs, or repeated use.
- Keep `components.json` aligned with the local alias and Tailwind setup when shadcn-style UI conventions change.

### Tailwind v4 Syntax Rules

This project uses **Tailwind CSS v4**. v4 changed several syntax conventions from v3 — write all new classes using v4 form:

**Important modifier — suffix, not prefix:**

```
# Wrong (v3)        # Correct (v4)
!text-white         text-white!
!underline          underline!
!text-[#00c573]     text-[#00c573]!
```

The `!` (important) modifier always goes **at the end** of the class in v4.

**Canonical scale values — prefer over arbitrary brackets:**

Use the Tailwind scale shorthand instead of `[Npx]` when an equivalent exists. Common mappings (1 unit = 4 px):

| Arbitrary (avoid)    | Canonical (use)    |
| -------------------- | ------------------ |
| `max-w-[760px]`      | `max-w-190`        |
| `max-w-[440px]`      | `max-w-110`        |
| `pb-[52px]`          | `pb-13`            |
| `size-[34px]`        | `size-8.5`         |
| `bg-white/[0.04]`    | `bg-white/4`       |
| `hover:bg-white/[N]` | `hover:bg-white/N` |

**Opacity shorthand — no brackets for whole-number percentages:**

```
# Wrong              # Correct
bg-white/[0.04]      bg-white/4
text-black/[0.5]     text-black/50
```

**When in doubt:** the Tailwind IntelliSense `suggestCanonicalClasses` warning is the authoritative signal. Fix every warning before committing.

## Dependency And Tooling Convention

Use Yarn for this project:

- Use `yarn install` to install dependencies.
- Use `yarn dev` for local development.
- Use `yarn lint` for linting.
- Use `yarn build` before opening a PR.
- Keep `yarn.lock` committed and in sync with `package.json`.
- Do not add `package-lock.json` or `pnpm-lock.yaml`.
- Prefer established, well-maintained libraries for complex UI behavior, animation, forms, validation, content parsing, analytics, or testing.
- Keep dependencies small and justified for a personal home site.

Current stack:

- shadcn-style local UI primitives
- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4 through PostCSS
- ESLint flat config
- Yarn classic

## Path And Import Hygiene

Keep paths simple and stable:

- Prefer the `@/*` alias for imports from `src`.
- Use project-root-relative paths in documentation, scripts, and generated instructions.
- Avoid long chains like `../../../..` when the `@/*` alias is clearer.
- Do not hard-code machine-specific paths inside source code.
- In docs, use paths from the repository root, for example `src/app/page.tsx`.
- Keep imports minimal; remove unused imports when touching a file.
- Do not add global helpers unless they remove real repetition or confusion.

## Generated File Hygiene

Keep generated outputs and local environment files out of Git:

- Do not commit `.next/`, `node_modules/`, build outputs, local caches, `.DS_Store`, logs, or environment files.
- Prefer updating `.gitignore` when repeated generated files appear in `git status`.
- Do not ignore source files, shared configuration, assets, fixtures, lockfiles, or documentation needed by other developers.
- If a generated file is already tracked, remove it from Git tracking in the same PR that adds the ignore rule.

## Git Workflow

Every task should be done on its own branch and completed through a pull request. Never push task changes directly to `main`.

Rules:

- `main` should only receive changes through merged pull requests.
- Do not commit task work directly on `main`.
- Start each task from the latest `main`.
- Open a PR for every task, including documentation-only work, unless the user explicitly asks for local-only changes.
- Merge PRs before starting dependent work when possible.
- Delete local and remote task branches after their PRs are merged.

Branch naming:

```text
feature/short-task-name
fix/short-bug-name
docs/short-doc-name
refactor/short-refactor-name
test/short-test-name
chore/short-maintenance-name
ci/short-ci-name
build/short-build-name
style/short-visual-name
```

Examples:

```text
feature/add-project-gallery
fix/mobile-nav-overflow
docs/update-local-setup
refactor/extract-hero-section
test/add-contact-form-tests
chore/update-yarn-deps
ci/add-pr-checks
build/configure-vercel
style/polish-project-cards
```

Before starting a task:

```sh
git status --short --branch
git switch main
git pull --ff-only
git switch -c feature/short-task-name
```

If there is no remote yet, skip `git pull --ff-only` until `origin` is configured.

## Multi-PR Workflow

When several branches or PRs are created in one work session, keep the flow simple and predictable.

Prefer independent PRs into `main`:

- Split work into independent branches only when each branch can be reviewed and merged on its own.
- Base each independent branch on the latest `main`.
- Open each independent PR against `main`.
- Merge independent PRs one at a time after review.

Use stacked PRs only when a later task truly depends on an earlier unmerged task:

- Make the dependency explicit in the PR body.
- Base the dependent PR on the branch it depends on.
- Merge from the bottom of the stack upward: base PR first, dependent PR after.
- After a base PR merges into `main`, immediately rebase or retarget dependent PRs onto the latest `main`.
- Do not merge a dependent PR into an already-merged feature branch. Retarget it to `main` instead.
- Do not delete a base branch until dependent PRs are retargeted or merged.
- If branch history becomes confusing, pause and clean it before continuing.

Recommended order for one session:

1. Create branch from latest `main`.
2. Implement one task.
3. Commit using the commit convention.
4. Push the branch.
5. Open a PR.
6. Merge the PR before starting dependent work when practical.
7. Pull latest `main`.
8. Delete merged local and remote branches.
9. Start the next task from updated `main`.

If many PRs are needed in one session, prefer this safer rhythm:

```text
task branch -> PR -> merge -> pull main -> next task branch
```

Use this only when work must be parallelized:

```text
base branch -> base PR
dependent branch from base branch -> dependent PR
merge base PR -> retarget dependent PR to main -> merge dependent PR
```

## Commit Convention

Commit messages must follow:

```text
type(scope): message
```

The `scope` is optional but preferred when it makes the affected area clear.

Use this shorter form when no clear scope is needed:

```text
type: message
```

Allowed types:

- `feat`: new feature or user-facing capability.
- `fix`: bug fix.
- `docs`: documentation-only change.
- `style`: formatting or visual polish without behavior changes.
- `refactor`: code restructuring without changing behavior.
- `test`: adding or updating tests.
- `chore`: maintenance, dependency, or tooling changes.
- `ci`: continuous integration workflows and checks.
- `build`: build system, dependency, packaging, or deployment changes.
- `perf`: performance improvement without changing behavior.
- `revert`: revert a previous commit.

Examples:

```text
feat(projects): add case study cards
fix(nav): prevent mobile link wrapping
docs(skill): add home conventions
style(hero): polish intro layout
refactor(home): extract section components
test(contact): add form validation coverage
chore(deps): update next
ci(actions): add pr checks
build(vercel): configure deployment
perf(images): optimize home assets
revert: revert contact form experiment
```

Keep commits focused. If one task changes unrelated areas, split it into separate commits or separate branches.

## Pull Request Convention

Each task should open a pull request before merging to `main`.

PR title format:

```text
[Edited Place] Content Here
```

Use Title Case for the content part: capitalize the first letter of each important word.

Examples:

```text
[Home] Add Home Sections
[Projects] Add Case Study Cards
[README] Add Local Development Guide
[Build] Configure Vercel Deployment
```

PR body format:

```markdown
## Summary

Short explanation of what changed and why.

## Details

- Added ...
- Updated ...
- Fixed ...
- Tested ...
```

Rules:

- Keep `Summary` concise and user-facing.
- Use `Details` for concrete implementation notes.
- Include validation notes in `Details`.
- Mention any known limitation or follow-up if the task is intentionally incomplete.
- Do not merge a PR if linting or builds fail unless the PR explicitly documents why.

Merge method:

- Use a normal merge commit when merging PRs into `main`.
- Do not use squash merge or rebase merge by default.
- Keep the PR branch visible in the Git graph so each task branch and merge point remains traceable.
- Only use squash merge or rebase merge if the user explicitly asks for that specific merge method.

## Pre-PR Checklist

Run these before opening a PR:

```sh
yarn lint
yarn build
```

When UI behavior or layout changes, also run the app locally and inspect the affected viewport sizes:

```sh
yarn dev
```

Always check the diff before committing:

```sh
git status --short --branch
git diff
```
