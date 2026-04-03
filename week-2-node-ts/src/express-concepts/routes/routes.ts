/**
 * ROUTING IN EXPRESS:
 * 1. Define Routes: Use app.get(), app.post(), etc., to define routes that respond to client requests. Each route can have a specific path and a callback function that handles the request and sends a response.
 * 2. Route Parameters: You can define dynamic routes using route parameters (e.g., /users/:id) to capture values from the URL and use them in your route handlers.
 * 3. Query Parameters: You can access query parameters from the req.query object in your route handlers. These are typically used for filtering or sorting data.
 * 4. Middleware in Routes: You can use middleware functions in your routes to perform tasks like authentication, validation, or logging before the final route handler is executed.
 * 5. Route Organization: For larger applications, you can organize your routes using Express Router, which allows you to create modular route handlers and keep your codebase clean and maintainable.
 *
 * In this code snippet, we define two routes: a GET route at the root ("/") that responds with a greeting message, and a POST route at "/data" that accepts JSON data and responds with a confirmation message. We also include error-handling middleware to catch any errors that may occur during the request-response cycle.
 *
 */

import {Router, type Request, type Response} from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
    res.send('Hello, Express!');
});

router.post('/data', (req: Request, res: Response): void => {
    const data: string = req.body;
    res.json({ message: 'Data received', data });
});

export default router;