# Week 1: TypeScript & Node.js Essentials (21st March, 2026 - 27th March, 2026)

## **Objectives**

* Understand the basics of **TypeScript**: types, interfaces, enums, and generics.
* Learn **Node.js fundamentals**: modules, Event Loop, file system, and HTTP server basics.
* Build your **first CLI or simple Node API (CRUD)** using TypeScript.
* Set up a structured project environment suitable for future Nest.js and full-stack development.

---

## **Prerequisites**

* Install **Node.js (>=18.x)**
* Install **npm or yarn**
* Install **TypeScript** globally:

```bash
npm install -g typescript
```

* Basic knowledge of JavaScript (ES6+ recommended)

---

## **Project Setup**

1. Create a new project folder:

```bash
mkdir week-1-node-ts
cd week-1-node-ts
```

2. Initialize npm:

```bash
npm init -y
```

3. Install TypeScript and types for Node.js:

```bash
npm install typescript @types/node --save-dev
```

4. Initialize TypeScript configuration:

```bash
npx tsc --init
```

5. Create a **src** folder:

```bash
mkdir src
touch src/index.ts
```

6. Optional: Install nodemon for auto-reloading:

```bash
npm install --save-dev nodemon ts-node
```

---

## **Mini-Project: CLI / Simple CRUD API**

### **Task: Build a simple Node.js API to manage tasks**

* Create a `Task` interface:

```ts
interface Task {
    id: number;
    title: string;
    completed: boolean;
}
```

* Maintain an **in-memory array of tasks**.

* Implement **CRUD operations**:

    * Create a new task
    * Read all tasks
    * Update a task
    * Delete a task

* Example `index.ts` snippet:

```ts
import http, { IncomingMessage, ServerResponse } from "http";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello, Node + TypeScript!" }));
});

server.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

## **Commands to Run**

* Compile TypeScript manually:

```bash
npx tsc
node dist/index.js
```

* Run with **ts-node** (development-friendly):

```bash
npx ts-node src/index.ts
```

* Run with **nodemon** (auto-reload):

```bash
npx nodemon src/index.ts
```

---

## **Learning Milestones**

* ✅ Understand TypeScript types, interfaces, and enums
* ✅ Set up Node.js + TypeScript project
* ✅ Build a working CLI or simple CRUD API
* ✅ Run project using ts-node and nodemon

---

## **Next Steps (Week 2 Preview)**

* Dive deeper into **Node.js modules** and **file system operations**.
* Explore **npm package management** and project structure for larger apps.
* Start connecting Node.js to **PostgreSQL** in preparation for Week 3.

