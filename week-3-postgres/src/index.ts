/**
 * MASTERING POSTGRESQL: FOR SCALABLE BACKEND ENGINEERING
 *
 * What is PostgreSQL?
 *
 * PostgreSQL (or just "Postgres") is a relational database.
 * Think of it as an extremely powerful, organized spreadsheet that your web app can talk to.
 * When a user signs up on your app, their data goes somewhere, that somewhere is usually a database like Postgres.
 * When they log in, your app asks Postgres "hey, does this email and password exist?" Postgres checks and responds instantly.
 *
 * Why Postgres specifically?
 *
 * * Free and open source
 * * Extremely reliable; used by Instagram, Reddit, Shopify, GitHub
 * * Handles everything from tiny side projects to massive production systems
 * * Has powerful features most databases don't (JSON support, full-text search, and more)
 *
 * How it's structured
 *
 * Think of it in three levels:
 *
 *        PostgreSQL Server
 *        └── Database (e.g. "myapp")
 *            └── Tables (e.g. "users", "posts", "comments")
 *                └── Rows (each row = one record, e.g. one user)
 *
 * * A table is like a spreadsheet tab.
 * * A row is one entry in that table.
 * * A column defines what kind of info each row stores.
 *
 * For example, a users table might look like this:
 *
 *      id  name            email               created_at
 *      1   Ada Lovelace    ada@example.com     2025-01-01
 *      2   Grace Hopper    grace@example.com   2025-01-02
 *
 * Every user is a row. Every piece of info about them (id, name, email) is a column.
 *
 * How you talk to Postgres
 *
 * You use a language called SQL (Structured Query Language).
 * It's not a programming language like Python, it's a query language, meaning you use it to ask questions and give instructions to the database.
 *
 * Example:
 *
 *      -- Ask the database for all users
 *      SELECT * FROM users;
 *
 *      -- Ask for just one user
 *      SELECT * FROM users WHERE email = 'ada@example.com';
 *
 * SQL reads almost like plain English, which makes it beginner-friendly.
 */