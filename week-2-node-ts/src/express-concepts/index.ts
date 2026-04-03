import express, { type Request, type Response, type Application } from "express";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
    res.send("Hello, Express!");
});

app.post("/data", (req: Request, res: Response): void => {
    const data = req.body;
    res.json({ message: "Data received", data });
});

app.use((err: Error, req: Request, res: Response): void => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(PORT, (): void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});