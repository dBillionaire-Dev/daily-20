# Week 2: TypeScript & Node.js with Express.js (28th March, 2026 - 3rd April, 2026)

## Overview
This week builds on the foundations from Week 1, where core Node.js modules like File System, Path, Events, Event Loop, and Streams were covered.

In Week 2, the focus shifts to:
- Completing remaining important Node.js core concepts
- Deepening understanding of **Buffers**
- Transitioning into backend development using **Express.js**
- Writing everything with **TypeScript**

---

## Week 1 Recap
Covered core Node.js modules and concepts:

- File System (fs)
- Path
- Events & EventEmitter
- Event Loop
- Streams

---

## Week 2 Goals

- Understand and use **Buffers** in Node.js
- Explore additional Node.js internals
- Set up a **TypeScript-based Node project**
- Learn and build APIs using **Express.js with TypeScript**
- Understand backend structure and middleware

---

## Node.js Core Concepts (Continuation)

### 1. Buffers
Buffers are used to handle **binary data directly in memory**.

#### Topics to Cover:
- What is a Buffer?
- Buffer allocation (`Buffer.alloc`, `Buffer.from`)
- Encoding (utf-8, base64, etc.)
- Working with binary data
- Buffers vs Streams

#### Practice:
- Convert strings to buffers and back
- Read binary files
- Work with file uploads (basic simulation)

---

### 2. Process & OS Modules (Optional but Recommended)

#### Process Module:
- `process.env`
- `process.argv`
- `process.exit()`

#### OS Module:
- System information (CPU, memory)
- Platform details

---

## ⚙️ TypeScript Setup for Node.js

### Setup Steps:
- Initialize project:
  ```bash
  npm init -y
  ```
  
  ```bash
  npm install typescript ts-node @types/node --save-dev
  npx tsc --init
  ```
  
- Configure `tsconfig.json` for Node.js
- Create a simple TypeScript file (`index.ts`) and run it using `ts-node`
- Install express and types for express:
 
  ```bash
  npm install express
  npm install --save-dev @types/express
  ```

## Express Topics to Cover

### 1. Basic Server Setup
   Create a server
   Listen on a port
### 2. Routing
   GET, POST, PUT, DELETE
   Route parameters
   Query parameters
### 3. Middleware
   Built-in middleware (express.json)
   Custom middleware
   Request lifecycle
### 4. Request & Response
   req.body
   req.params
   req.query
   Sending responses
### 5. Error Handling
   Handling errors properly
   Custom error middleware
   
## Practice Projects
- Build a simple REST API for a TODO application
- Implement CRUD operations
- Use in-memory data storage (for simplicity)
- Test API endpoints using Postman or curl
- Document using swagger
    
  ```typescript
    import express, { Request, Response } from "express";

    const app = express();

    app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, TypeScript + Express!" });
    });
    
    app.listen(3000, () => {
    console.log("Server running on port 3000");
    });
    ```
  
---

## End of Week Outcome

By the end of Week 2, you should be able to:
- Understand and use Buffers in Node.js
- Build a backend server using Express
- Write backend code in TypeScript
- Structure a simple API project
- Handle requests, responses, and middleware

- By the end of Week 2, you should have a solid understanding of Buffers in Node.js, be comfortable setting up a TypeScript-based Node project, and have built a simple API using Express.js. This will set a strong foundation for more complex backend development in the coming weeks!
