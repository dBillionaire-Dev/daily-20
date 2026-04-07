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