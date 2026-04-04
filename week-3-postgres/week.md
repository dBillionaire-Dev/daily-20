# Week 3: PostgreSQL Basics & Node.js Integration (4th April, 2026 - 10th April, 2026)

## **Objectives**

* Understand the fundamentals of **relational databases** and PostgreSQL.
* Learn core **SQL operations**: SELECT, INSERT, UPDATE, DELETE.
* Work with **constraints, relationships, and joins**.
* Connect **Node.js + TypeScript** to PostgreSQL using the `pg` library.
* Build a **database-driven backend API (Task Manager)**.

---

## **Prerequisites**

* Completion of Week 1 & Week 2:
  * TypeScript basics
  * Node.js fundamentals
  * Express.js basics
* Install **PostgreSQL** locally or use a cloud database (e.g., Supabase, Neon)
* Basic understanding of APIs and backend structure

---

## **Project Setup**

1. Create a new project folder:

```bash
mkdir week-3-postgres
cd week-3-postgres
````

2. Initialize npm:

```bash
npm init -y
```

3. Install dependencies:

```bash
npm install pg
npm install --save-dev typescript ts-node @types/node @types/pg nodemon
```

4. Initialize TypeScript:

```bash
npx tsc --init
```

5. Create project structure:

```bash
mkdir src
touch src/index.ts
```

---

## **Database Setup**

1. Open PostgreSQL CLI or GUI (pgAdmin)

2. Create a database:

```sql
CREATE DATABASE task_manager;
```

3. Create a table:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## **Connecting PostgreSQL to Node.js**

Create a database connection:

```ts
import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "task_manager",
  password: "your_password",
  port: 5432,
});
```

---

## **Mini-Project: Task Manager Backend**

### **Task: Build a database-driven API**

* Create a `Task` interface:

```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

---

## **API Features**

Implement CRUD operations:

* Create a task
* Get all tasks
* Get a single task
* Update a task
* Delete a task

---

## **Example API Route (Express + TypeScript)**

```ts
import express, { Request, Response } from "express";
import { pool } from "./db";

const app = express();
app.use(express.json());

app.get("/tasks", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM tasks");
  res.json(result.rows);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

## **Key SQL Topics to Practice**

* SELECT queries
* WHERE conditions
* ORDER BY
* LIMIT & OFFSET
* INSERT, UPDATE, DELETE
* INNER JOIN (intro)
* Constraints (PRIMARY KEY, NOT NULL, UNIQUE)

---

## **Commands to Run**

* Run with ts-node:

```bash
npx ts-node src/index.ts
```

* Run with nodemon:

```bash
npx nodemon src/index.ts
```

---

## **Learning Milestones**

* Understand relational databases and table structure
* Write basic SQL queries (CRUD)
* Connect Node.js to PostgreSQL
* Build a working database-driven API
* Handle database responses in TypeScript

---

## **Next Steps (Week 4 Preview)**

* Advanced SQL queries and joins
* Database relationships in practice
* Query optimization basics
* Introduction to ORMs (Prisma / TypeORM)
* Preparing for Nest.js backend development

---

## **Notes**

* Focus on understanding how data is structured and queried
* Practice SQL daily — repetition is key
* Think like a backend engineer: data + logic
* Keep your code modular and clean

---