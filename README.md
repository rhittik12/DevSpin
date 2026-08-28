# DevSpin

A random tech topic generator to fuel a daily blog-writing habit. Hit spin, get a topic pulled from a curated bank spanning frontend, backend, databases, infra, testing, AI, and more — then go read up and write about it.

No login. No history. No tracking. Just an honest random topic generator.

<img width="1912" height="928" alt="Screenshot 2026-08-28 191355" src="https://github.com/user-attachments/assets/c7cc0a4b-796e-462a-ac6a-d6553f9b3179" />

## How it works

DevSpin holds a bank of topics in Postgres, built by crossing technologies (React, PostgreSQL, Docker, etc.) with concepts (caching, testing, load balancing, etc.) within matching domains, plus a set of standalone systems-design topics (CAP Theorem, Microservices, OAuth 2.0, and similar). Every spin is a fully random pick from the whole bank.

## Tech stack

- **Framework:** Next.js (App Router, Server Actions)
- **Database:** PostgreSQL via [Neon](https://neon.tech)
- **ORM:** Drizzle
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/rhittik12/devspin.git
cd devspin
npm install
```

### 2. Set up your database

Create a free project at [neon.tech](https://neon.tech) and grab your connection string.

Copy `.env.example` to `.env.local` and add it:

```
DATABASE_URL=your-neon-connection-string
```

### 3. Push the schema

```bash
npx drizzle-kit push
```

This creates the `topics` table in your database.

### 4. Seed the topic bank

```bash
npm run seed
```

This populates `topics` from `scripts/data/technologies.ts`, `concepts.ts`, and `standalone-topics.ts`.

### 5. Run it

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000) and hit spin.

## Project structure

```
app/
  page.tsx                 # Home - spin button + topic card
  actions/spin.ts           # Server action that picks a random topic
  layout.tsx
components/
  topic-card.tsx             # Displays the current topic
  spin-button.tsx
  ui/                          # Button, badge primitives
db/
  schema.ts                     # Drizzle table definition
  index.ts                       # DB connection
  queries/topics.ts               # getRandomTopic query
scripts/
  seed.ts                          # Seeds the topic bank
  data/                              # Raw technology/concept/standalone lists
lib/
  types.ts                            # Shared Topic type
```


## Contributing

Contributions are welcome — this is a small project and a good one to get your feet wet with Next.js, Drizzle, or just adding more topics.

**1. Grow the topic bank (easiest way to contribute)**

Add more entries to `scripts/data/technologies.ts`, `concepts.ts`, or `standalone-topics.ts`, then run `npm run seed` locally to confirm it generates sensible topics before opening a PR. Keep the domain tags consistent with the existing entries — a technology and a concept only get crossed together if they share a domain, so mismatched tags produce topics that never get generated.

**2. Improve the product**

Have an idea for how DevSpin could be better — UI, performance, features, code quality, anything? Just raise a PR for it.

**To contribute code:**

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit: `git commit -m "Add: short description"`
5. Push: `git push origin feature/your-feature-name`
6. Open a pull request

Please keep PRs focused — one change per PR is easier to review than a bundle of unrelated changes.

## License

MIT — see [LICENSE](./LICENSE).
