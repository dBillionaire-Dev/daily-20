# 25-Week Career-Ready Full-Stack Roadmap

---

## Phase 1: Core Foundations

**Goal:** Solidify TypeScript, Node.js, and PostgreSQL fundamentals.

### Weeks 1–2: TypeScript & Node.js Essentials *(unchanged)*
- Deep dive into TypeScript — types, interfaces, generics, modules.
- Node.js fundamentals: event loop, file system, HTTP, modules.
- **Project:** Build a CLI or simple Node API (CRUD) with TypeScript.

### Weeks 3–4: PostgreSQL Foundations (Restart)
- SQL queries, joins, constraints, indexing.
- Connect via the `pg` library in Node.js. Relationships and data modeling basics.
- **Project:** Task manager backend with a database-driven API.

### Week 5: PostgreSQL — Advanced
- Transactions, views, stored procedures, full-text search.
- Query optimization with EXPLAIN ANALYZE.
- **Project:** Audit and optimize your Week 4 app queries.

---

## Phase 2: Backend Mastery with Nest.js

**Goal:** Become confident in scalable backend development.

### Weeks 6–7: Nest.js Core
- Modules, controllers, providers, services.
- Dependency injection and middleware.
- Prisma ORM with PostgreSQL.
- **Project:** Build a REST API with Nest.js + PostgreSQL (e.g. blog API).

### Weeks 8–9: Advanced Backend
- Authentication and authorization: JWT, Passport.js.
- Validation pipes, exception filters, guards.
- User roles and relational data.
- **Project:** Extend blog API with user auth, roles, and relations.

---

## Phase 3: Frontend & Full-Stack Integration

**Goal:** Connect a React frontend with your Nest backend.

### Weeks 10–11: React + TypeScript
- Functional components, hooks, context API, and TypeScript types.
- Consuming REST APIs with axios or fetch.
- **Project:** Build a dashboard that consumes your Nest API.

### Weeks 12–13: Full-Stack Integration
- Integrate Nest.js API with React frontend end-to-end.
- Handle JWT authentication in the frontend.
- CRUD operations, forms, validations, and error handling.
- **Project:** Full-stack application — job board, task manager, or mini e-learning platform.

---

## Phase 4: Production Features

**Goal:** Add the backend capabilities that matter in real-world roles.

### Week 14: Caching & Validation
- Redis for caching frequent queries and session storage.
- Zod for runtime validation of API requests and frontend forms.
- **Project:** Update your full-stack app with caching and Zod-validated payloads.

### Weeks 15–16: Security & Real-Time Features
- OAuth — implement Google or GitHub login.
- 2FA — add OTP-based authentication.
- WebSockets — real-time notifications or live chat.
- **Project:** Extend full-stack app with secure login (OAuth + 2FA) and real-time updates.

### Weeks 17–18: Push Notifications
- Web Push API fundamentals — VAPID keys, push subscriptions, service workers.
- Firebase Cloud Messaging (FCM) setup and integration with Nest.js.
- Handling background notifications, notification permissions, and user preferences.
- **Project:** Add real push notifications to your full-stack app (e.g. task reminders, activity alerts).

### Weeks 19–20: Payment Integration — Foundations
- Stripe setup — API keys, products, and pricing models.
- One-time payments and checkout sessions with Stripe.js on the frontend.
- Handling payment success and failure flows end-to-end.
- **Project:** Add a one-time payment flow to your app (e.g. buying a plan or a product).

### Weeks 21–22: Payment Integration — Advanced
- Stripe subscriptions — recurring billing, trial periods, plan upgrades and downgrades.
- Webhook handling — verifying and processing Stripe events securely in Nest.js.
- Refunds, cancellations, and edge case handling.
- **Project:** Full subscription system with webhook-driven status updates in your app.

---

## Phase 5: DevOps & Deployment

**Goal:** Ship a production-ready, containerized application.

### Weeks 23–24: Docker & Containerization
- Containerize your Nest.js backend and React frontend with Docker.
- Docker Compose for local multi-service orchestration.
- **Project:** Fully Dockerized full-stack application running locally.

### Week 25: CI/CD & Cloud Deployment
- Set up CI/CD pipelines using GitHub Actions or GitLab CI.
- Automate tests and deployments.
- Deploy to Vercel, Render, or AWS.
- **Project:** Live, deployed full-stack app with an automated pipeline.

---

## Key Tips

- **Backend-first:** Build REST APIs in Nest before worrying about React styling.
- **Project-based learning:** Every 1–2 weeks, ship a mini project — it reinforces everything.
- **TypeScript everywhere:** Node, Nest, and React — this makes you career-ready.
- **PostgreSQL over MongoDB:** Stronger for structured apps and backend-heavy roles.
- **Production mindset from Phase 4:** Security, caching, validation, and real-time features are what separate junior from mid-level developers.
- **Take your time with Stripe:** Webhook handling and subscription logic are where most developers trip up — don't rush it.

---

By **Week 25**, you will be:

1. A **backend-heavy full-stack developer** with Nest.js, PostgreSQL, React, and TypeScript.
2. Skilled in **advanced backend features** — Redis, OAuth, 2FA, Zod, WebSockets, push notifications.
3. Capable of building **production payment systems** with Stripe — one-time payments, subscriptions, and webhooks.
4. Ready for **production deployments** using Docker and CI/CD pipelines.