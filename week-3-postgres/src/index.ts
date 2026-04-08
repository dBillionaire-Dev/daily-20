import express, {type Application, type Request, type Response} from "express";

const app: Application = express();
app.use(express.json());

app.post("/users", async (req: Request, res: Response): Promise<void> => {
   try {
       const {name, email, password_hash} = req.body;

//This is just a demo, in production you should never store password hashes directly in the database.
//Use a proper authentication system like OAuth or JWT.

       const result = await db.query(
           `INSERT INTO users (name, email, password_hash)
            VALUES ($1, $2, $3)
            RETURNING id, name, email, created_at`,
           [name, email, password_hash]
       );

       res.status(201).json(result.rows[0]);
   } catch (e) {
       console.error(e);
       res.status(500).json({
           success: false,
           message: "Internal server error"
       });
   }
})

/**
 * $1, $2, $3 are parameterized placeholders.
 * This is how you prevent SQL injection.
 * Never concatenate user input directly into a query string.
 */

app.get('/posts', async (req: Request, res: Response): Promise<void> => {
    try {
        const page: number  = parseInt(req.query.page)  || 1;
        const limit: number = parseInt(req.query.limit) || 10;
        const offset: number = (page - 1) * limit;

        const result = await db.query(
            `SELECT id, title, created_at FROM posts
             WHERE published = true
             ORDER BY created_at DESC
             LIMIT $1 OFFSET $2`,
                    [limit, offset]
                );

        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

// UPDATING RECORDS
app.patch('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        const result = await db.query(
            `UPDATE users SET username = $1
         WHERE id = $2
         RETURNING id, email, username`,
            [username, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(result.rows[0]);
    } catch (e) {
        console.error(e)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

/**
 * Notice the rows.length === 0
 * check if the WHERE matched nothing, Postgres returns an empty array.
 * That's how you detect "record not found" in your API.
 */