# 📘 Week 4: PostgreSQL + Node.js Integration (TypeScript)

## 🚀 Overview
Week 4 builds on the PostgreSQL fundamentals learned in Week 3, where core concepts like tables, primary keys (PK), foreign keys (FK), and relationships were introduced.

This week focuses on:
- Completing essential SQL concepts
- Understanding how to query relational data effectively
- Integrating PostgreSQL with a Node.js + TypeScript backend
- Building a database-driven API

---

## ✅ Week 3 Recap

Covered foundational PostgreSQL concepts:

- Tables
- Primary Keys (PK)
- Foreign Keys (FK)
- Relationships (One-to-One, One-to-Many)

---

## 🎯 Week 4 Goals

- Master SQL joins and relational queries
- Understand constraints and indexing
- Connect PostgreSQL to Node.js using TypeScript
- Build a database-driven backend API
- Apply clean backend architecture practices

---

## 🧠 PostgreSQL Concepts (Advanced)

### 1. SQL Joins (Critical)

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN

#### Example:
```sql
SELECT users.name, tasks.title
FROM tasks
JOIN users ON tasks.user_id = users.id;
```

---

### 2. Constraints

- UNIQUE
- NOT NULL
- DEFAULT
- CHECK

Purpose:
- Ensure data integrity
- Prevent invalid data

---

### 3. Indexing (Intro)

- What is an index?
- When to use indexes
- How indexes improve query performance

---

## ⚙️ Node.js + PostgreSQL Integration

### Tools Used

- Node.js
- TypeScript
- pg (PostgreSQL client for Node.js)

---

### Installation

```bash
npm install pg
npm install --save-dev @types/pg
```

---

### Basic Connection Setup

```ts
import { Pool } from "pg";

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "mydb",
  password: "password",
  port: 5432,
});

export default pool;
```

---

### Running a Query

```ts
const result = await pool.query("SELECT * FROM users");
console.log(result.rows);
```

---

## 🛠️ Week 4 Project

### 📌 Task Manager API (Database-Driven)

A backend API that manages users and tasks using PostgreSQL.

---

## 🧱 Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id)
);
```

---

## 🔗 Example Query (JOIN)

```sql
SELECT tasks.title, users.name
FROM tasks
JOIN users ON tasks.user_id = users.id;
```

---

## 📂 Project Structure

```bash
src/
│── db/
│   ├── index.ts
│── controllers/
│── services/
│── routes/
│── types/
│── index.ts
```

---

## 📌 Features to Implement

- Create user
- Get users
- Create task
- Assign task to user (FK)
- Get tasks with user info (JOIN)

---

## 🧪 Practice Tasks

- Write queries using JOIN
- Add constraints to tables
- Connect Node.js to PostgreSQL
- Perform CRUD operations
- Structure backend code using TypeScript

---

## 🎯 End of Week Outcome

By the end of Week 4, you should be able to:

- Design relational databases with PostgreSQL
- Use JOINs to fetch related data
- Apply constraints and indexing basics
- Connect PostgreSQL to a Node.js backend
- Build a functional API with TypeScript
- Structure backend projects properly

---

## 🔜 Next Week Preview (Week 5)

- Introduction to NestJS
- Modules, Controllers, Services
- Dependency Injection
- Build scalable backend architecture

---

## 💡 Notes

- Focus on understanding relationships and queries deeply
- Always test queries directly in PostgreSQL before using in code
- Keep your backend modular and clean
- Practice building, not just reading
