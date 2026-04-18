/**
 * JOINs IN POSTGRES:
 *
 *  JOINs are used to combine rows from two or more tables based on a related column between them.
 *  It lets you combine data from multiple tables in a single query.
 *  Instead of making 3 separate database calls in your API, you make one.
 *
 *  The Problem JOINs Solve
 *  Imagine fetching a blog post with its author's name. Without JOINs you'd do this in your Node.js code:
 *
 *      -- Two separate queries, slow and messy
 *      const post = await db.query('SELECT * FROM posts WHERE id = $1', [1]);
 *      const user = await db.query('SELECT * FROM users WHERE id = $1', [post.rows[0].user_id]);
 *
 *  With a join, you can fetch both the post and the author's name in one query:
 *
 *      -- One query — clean and fast
 *      const result = await db.query(`
 *      SELECT posts.title, posts.body, users.username
 *      FROM posts
 *      JOIN users ON posts.user_id = users.id
 *      WHERE posts.id = $1
 *      `, [1]);
 *
 *  In PostgreSQL, there are several types of joins that you can use to retrieve data from multiple tables:
 *
 * - INNER JOIN: Returns only the rows that have matching values in both tables.
 * - LEFT JOIN (or LEFT OUTER JOIN): Returns all rows from the left table, and the matched rows from the right table. If there is no match, the result is NULL on the right side.
 * - RIGHT JOIN (or RIGHT OUTER JOIN): Returns all rows from the right table, and the matched rows from the left table. If there is no match, the result is NULL on the left side.
 * - FULL JOIN (or FULL OUTER JOIN): Returns all rows when there is a match in either left or right table. If there is no match, the result is NULL on the side that does not have a match.
 * - CROSS JOIN: Returns the Cartesian product of both tables, meaning it returns all possible combinations of rows from both tables.
 * - SELF JOIN: A self join is a regular join, but the table is joined with itself.
 * - NATURAL JOIN: A natural join is based on all columns in the two tables that have the same name and selects rows with equal values in the relevant columns.
 * - USING JOIN: The USING clause is used to specify the column(s) that should be used for the join condition when the column names are the same in both tables.
 * - ON JOIN: The ON clause is used to specify the join condition when the column names are different in both tables.
 * - LATERAL JOIN: A lateral join allows a subquery in the FROM clause to reference columns from preceding tables in the same FROM clause.
 * - ANTI JOIN: An anti join returns rows from the left table that do not have a match in the right table.
 * - SEMI JOIN: A semi join returns rows from the left table that have a match in the right table, but does not return any columns from the right table.
 *
 */