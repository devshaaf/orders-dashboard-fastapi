# Orders Dashboard — React + FastAPI

> **Sample project.** Diagnosing and fixing integration issues in a React + FastAPI app.

This is a **demo / portfolio project**, not a production service and not a real business. It exists
to show one specific skill: **finding the root cause of bugs in an existing React + FastAPI
codebase and fixing them with targeted changes instead of rewrites.**

"OpsBoard" is a small orders-and-clients dashboard for a fictional small business. The interesting
part is not the app — it's the three branches.

---

## The three branches

| Branch | What's in it |
|---|---|
| `main` | The working app. Every workflow functions end to end. |
| `broken-baseline` | The same app with 9 realistic bugs introduced — the kind that show up in real handover codebases, not deliberate sabotage. |
| `fixes` | One commit per bug (`fix(#N): …`), each backend fix covered by a test that fails on `broken-baseline` and passes here. |

Read **[FIXES.md](./FIXES.md)** for the case study: symptom → root cause (file + line) → fix → how it
was verified, for all 9 bugs.

---

## Stack

**Backend** — Python 3.12, FastAPI, Pydantic v2, SQLAlchemy 2.0 (async), Alembic, PostgreSQL,
JWT auth with `admin` / `staff` roles, pytest + httpx.

**Frontend** — Next.js 14 (App Router), TypeScript, Tailwind CSS, TanStack Query,
React Hook Form + Zod, Recharts.

**Dev** — Docker Compose brings up Postgres, the API and the web app together.

---

## Running it

```bash
cp .env.example .env
docker compose up --build
```

| Service | URL |
|---|---|
| Web app | http://localhost:3000 |
| API | http://localhost:8000 |
| Swagger docs | http://localhost:8000/docs |

Then seed the database (~20 clients, ~300 orders across the last 90 days):

```bash
docker compose exec api python -m app.seed
```

### Demo logins

| Role | Email | Password |
|---|---|---|
| Admin | `admin@example.com` | `admin1234` |
| Staff | `staff@example.com` | `staff1234` |

Admins can delete orders and clients; staff cannot, and the UI hides those controls.

---

## What's in the app

- `/login` — JWT login
- `/dashboard` — 4 KPI cards (revenue, order count, average order value) plus a revenue-by-day
  line chart with a 7d / 30d / 90d range selector
- `/orders` — table with status filter, client filter, search and pagination; delete is admin only
- `/clients` — table plus a create/edit modal form

API surface: `/auth/login`, `/auth/me`, CRUD on `/clients` and `/orders`, and
`/dashboard/kpis?range=7d|30d|90d`. Full list in the Swagger docs.

---

## Repository layout

```
api/            FastAPI service
  app/
    core/       config, security, dependencies
    models/     SQLAlchemy models
    schemas/    Pydantic schemas
    routers/    route handlers
  alembic/      migrations
  tests/        pytest suite
web/            Next.js 14 app
  src/app/      App Router pages
  src/components/
  src/lib/      API client, query hooks
docs/           case study assets
```

---

## License

MIT — see [LICENSE](./LICENSE).
