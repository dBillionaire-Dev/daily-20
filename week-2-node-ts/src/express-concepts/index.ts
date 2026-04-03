/**
 * Express Concepts:
 * 1. Middleware: Functions that execute during the request-response cycle. They can modify the request and response objects, end the request-response cycle, or call the next middleware in the stack.
 * 2. Routing: The process of defining endpoints (URIs) and how they respond to client requests. Express provides methods like app.get(), app.post(), etc., to handle different HTTP methods.
 * 3. Request and Response Objects: The req object contains information about the client's request, while the res object is used to send a response back to the client.
 * 4. Error Handling: Express allows you to define error-handling middleware that can catch and handle errors that occur during the request-response cycle.
 * 5. Application Setup: You can set up an Express application by creating an instance of Express and configuring it with middleware, routes, and error handlers.
 *
 * In this code snippet, we create a simple Express server that listens on port 3000. It has two routes: a GET route at the root ("/") that responds with a greeting message, and a POST route at "/data" that accepts JSON data and responds with a confirmation message. We also include error-handling middleware to catch any errors that may occur during the request-response cycle.
 */

import express, { type Request, type Response, type Application } from "express";
import routes from "./routes/routes.js";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
const appRouter = routes;

app.use("/", appRouter);
app.use("/about", appRouter);

app.use((err: Error, req: Request, res: Response): void => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(PORT, (): void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/**
 * STARTING OUT WITH EXPRESS:
 * 1. Install Express: Use npm to install Express in your project directory.
 * 2. Create an Express Application: Import Express and create an instance of it.
 * 3. Define Routes: Use app.get(), app.post(), etc., to define routes that respond to client requests.
 * 4. Start the Server: Use app.listen() to start the server and listen for incoming requests on a specified port.
 * 5. Test Your Server: You can use tools like Postman or curl to test your endpoints and see how they respond.
 *
 * This is a basic setup for an Express server, and you can expand it with more routes, middleware, and error handling as needed.
 */