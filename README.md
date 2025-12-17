# Monadic

> A **starter system, not a finished product**.

Monadic is a deliberately opinionated foundation for building modern web projects inside an organization. It is designed to be **cloned, adapted, and diverged**, not endlessly forked or merged back into a single canonical repo.

This repository exists to encode *intent*:
- how we structure projects
- how we share UI, tokens, and patterns
- how teams move fast **without** re‑solving setup decisions

---

## What Monadic Is

Monadic is:

- A **template-first repository**
- A **baseline configuration** for Next.js + Tailwind + shared UI
- A **monorepo-style system** that scales from solo work to teams
- A place where *decisions are made once*, then reused

Think of it as a **launchpad** rather than a library.

---

## What Monadic Is Not

Monadic is **not**:

- A dependency you install
- A repo you continuously merge upstream from
- A single "source of truth" that all projects must stay identical to
- A dumping ground for app-specific logic

Once you clone it, **it becomes yours**.

---

## Intended Usage (Important)

### ✅ Recommended

- Clone this repo **as a template** into:
  - an organization account
  - a personal account
  - a new product or experiment

- Rename it
- Delete what you don’t need
- Extend it aggressively

### 🚫 Not Recommended

- Forking and trying to keep forks in sync
- Cherry-picking across unrelated products
- Treating this repo as a long-lived upstream

---

## Organizational Model

There are **three supported patterns**, all valid.

### 1. Organization-Owned Canonical Template (Most Common)

- `org/monadic-template`
- Used as the **official starting point** for new projects
- Updated intentionally and infrequently
- New projects clone from it

```
org/
  monadic-template
  product-a
  product-b
```

### 2. Personal + Organization Mirrors

- Each contributor keeps a personal version
- Org repo is authoritative for team projects
- Ideas move via:
  - commits
  - patches
  - small PRs

```
terrancebrunner/monadic
org/monadic-template
```

### 3. Fully Independent Derivatives

- Clone once
- Diverge permanently
- No expectation of sync

This is encouraged.

---

## Branching Philosophy

Branches are **experimental and intentional**, not long-lived obligations.

Examples:
- `bekkahfly` → conceptual / visual / experimental direction
- `clean-slate` → stripped baseline
- `ui-rewrite` → focused refactor

Branches are allowed to:
- break conventions
- delete large sections
- explore ideas without merge pressure

---

## Repo Structure (Conceptual)

```
apps/
  web/            # primary Next.js app
packages/
  ui/             # shared UI components & styles
  config/         # shared config (eslint, tailwind, ts)
components/       # optional app-level components
```

This structure is **guidance**, not law.

---

## Tailwind & Styling Intent

Tailwind is used as:

- a **token delivery system**
- a **constraint**, not a playground

Global styles exist to:
- normalize typography
- prevent class collisions
- enforce defaults

Utility usage is intentional and compositional.

---

## How to Start a New Project

### Option A: Use as a GitHub Template (Recommended)

1. Mark this repo as a **Template** on GitHub
2. Click **"Use this template"**
3. Create a new repo (org or personal)

### Option B: Clone Manually

```bash
git clone git@github.com:ORG/monadic-template.git my-project
cd my-project
rm -rf .git
git init
git add .
git commit -m "init from monadic"
```

---

## Contribution Philosophy

There is no obligation to contribute back.

If you do:
- keep changes **small and intentional**
- prefer documentation over abstraction
- prioritize clarity over cleverness

---

## Why This Exists

Monadic exists to reduce:
- setup fatigue
- design drift
- configuration sprawl

And to increase:
- creative momentum
- shared language
- confidence in starting new work

---

## License

MIT (or adjust as needed).

---

## Final Note

If you find yourself asking:

> "Should this go back into Monadic?"

The answer is usually **no**.

If the pattern keeps repeating — *then* maybe.

Build forward.
Clone boldly.
Diverge without guilt.

