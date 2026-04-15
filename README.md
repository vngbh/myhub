# myhub

myhub is a personal home site for product interface work. It is built with Next.js App Router, React, TypeScript, and Tailwind CSS v4, with local UI primitives and a dark visual system inspired by `DESIGN.md`.

## What Is Inside

- Home route with a focused product interface introduction.
- Work route for selected projects and practical delivery notes.
- Skill route for the frontend tools and systems behind the work.
- Contact route with a direct email path.
- Shared layout, section, and UI components under `src/components`.
- Project copy and site configuration under `src/data`.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4 through PostCSS
- ESLint flat config
- Yarn classic

## Local Setup

Install dependencies:

```sh
yarn install
```

Start the development server:

```sh
yarn dev
```

Open `http://localhost:3000` in a browser.

## Validation

Run linting before opening a pull request:

```sh
yarn lint
```

Run a production build before opening a pull request:

```sh
yarn build
```

## Project Structure

```text
src/
├── app/
│   ├── contact/
│   ├── skill/
│   ├── work/
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
└── lib/
    └── utils.ts
```

Root-level project guidance lives in `SKILL.md`. Visual decisions should follow `DESIGN.md`.

## Conventions

- Use English for documentation, comments, branches, commits, and pull requests.
- Use Yarn for dependency management and scripts.
- Keep task work off `main`; create a branch and open a pull request.
- Use `docs/...`, `feature/...`, `fix/...`, or the closest matching branch prefix from `SKILL.md`.
- Follow the PR title and body format in `SKILL.md`.
- Do not use emojis in documentation.

## Deployment

This is a standard Next.js application and can be deployed anywhere Next.js is supported. Keep build validation passing before deployment.
