-- CREATE TABLE IN POSTGRESQL
/**
    The syntax looks like this:

          CREATE TABLE table_name (
          column_name  DATA_TYPE  CONSTRAINTS,
          column_name  DATA_TYPE  CONSTRAINTS
        );
 */

CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE CHECK ( email = LOWER(email) AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' ),
    username    VARCHAR(50)  NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    is_verified BOOLEAN      DEFAULT false,
    created_at  TIMESTAMPTZ  DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  DEFAULT NOW()
);

/**
    In this example, we are creating a table named `users` with the following columns:
    - `id`: A unique identifier for each user, which is automatically generated (SERIAL) and serves as the primary key.
    - `name`: A string that cannot be null, representing the user's name.
    - `email`: A string that cannot be null and must be unique, representing the user's email address.
    - `username`: A string that cannot be null and must be unique, representing the user's username.
    - `password`: A text field that cannot be null, representing the user's password.
    - `is_verified`: A boolean field that defaults to false, indicating whether the user's email is verified.
    - `created_at`: A timestamp with time zone that defaults to the current time when a new record is created.
 */

CREATE TABLE posts (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)

-- In this example, we are creating a table named `posts` with the following columns:
-- - `id`: A unique identifier for each post, which is automatically generated and serves as the primary key.
-- - `title`: A string that cannot be null, representing the title of the post.
-- - `content`: A text field that cannot be null, representing the content of the post.
-- - `user_id`: An integer that cannot be null, representing the ID of the user who created the post. This is a foreign key that references the `id` column in the `users` table, and it has a cascading delete behavior.
-- - `published`: A boolean field that defaults to false, indicating whether the post is published.
-- - `created_at`: A timestamp with time zone that defaults to the current time when a new record is created.
-- - `updated_at`: A timestamp with time zone that defaults to the current time when a new record is created or updated.

-- DROPPING/DELETING A TABLE IN POSTGRESQL

/**
    The syntax looks like this:

          DROP TABLE table_name;   // deletes the table and all its data
          DROP TABLE IF EXISTS table_name; //same, but safer. Will throw an error if table doesn't exist
 */

DROP TABLE IF EXISTS posts;

-- INSERT INTO A TABLE IN POSTGRESQL
/**
    The syntax looks like this:

          INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
 */

INSERT INTO users (name, email, username, password_hash) VALUES ('Nezer Nex', 'nezer@nex.com', 'nezer', "password_hash_here");

-- INSERT MULTIPLE ROWS INTO A TABLE IN POSTGRESQL

INSERT INTO users (name, email, username, password_hash) VALUES
('Alice Smith', 'alicesmith@email.com', 'alice', 'password_hash_here'),
('Bob Johnson', 'bobjones@gmail.com', 'bob', 'password_hash_here'),
('Charlie Brown', 'charlieb@apple.com', 'charlie', 'password_hash_here');
RETURNING id, email;

-- READING DATA IN POSTGRESQL

-- Get every user info (avoid doing this in production, as it can be inefficient and may expose sensitive data)
SELECT * FROM users;

-- Get specific columns only from every user (better practice)
SELECT id, email, username FROM users;

-- Get one specific user
SELECT * FROM users WHERE email = 'nezer@nex.com';

-- Get all published posts
SELECT * FROM posts WHERE published = true;

-- Get all posts by a specific user (using the foreign key)
SELECT * FROM posts WHERE user_id = 1;

-- * means all columns

/**
  RETURNING, Super useful for backends

  When you insert a row, by default Postgres doesn't send it back.
  But in a Node.js API, you almost always want the new record returned (especially the auto-generated id).
  In PostgreSQL, you can use the `RETURNING` clause to achieve this.

    The syntax looks like this:

          INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...) RETURNING column_to_return;

    For example, if you want to insert a new user and get back their ID and email, you can do:

          INSERT INTO users (name, email, username, password_hash)
            VALUES ('Nezer Nex', 'nezer@nex.com', 'nezer', 'password_hash_here')
            RETURNING id, email, username, created_at;

  This gives you back the inserted row immediately, no need for a second query.
  In Express, this is how you'd respond to a POST /users request with the created user object.
  Refer to the Express code for more details.
 */

-- ADDING A COLUMN TO AN EXISTING TABLE IN POSTGRESQL
/**
    The syntax looks like this:

          ALTER TABLE table_name ADD COLUMN column_name DATA_TYPE CONSTRAINTS;

  The ALTER TABLE statement is used to modify the structure of an existing table.
  In this case, we are adding a new column to the `users` table.
  And the ADD COLUMN statement specifies that we want to add a new column with the given name, data type, and any constraints.
 */

-- For example, if we want to add a `bio` column to the `users` table, we can do:

ALTER TABLE users
ADD COLUMN bio TEXT NOT NULL;

-- FILTERING ROWS
-- The WHERE statement lets you fetch only the rows that match a condition.

-- EXAMPLE USAGE
-- Exact match
SELECT * FROM users WHERE email = 'alicesmith@email.com';

-- Not equal
SELECT * FROM posts WHERE published != false;

-- Greater / less than
SELECT * FROM users WHERE id > 3;
SELECT * FROM users WHERE created_at < '2026-04-07';

-- Multiple conditions with AND / OR
SELECT * FROM posts WHERE published = true AND user_id = 1;
SELECT * FROM users WHERE username = 'nex_dev' OR username = 'grace_hop';

-- LIKE operator for pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- finds all users with a gmail email
SELECT * FROM users WHERE username LIKE 'a%'; -- finds all users whose username starts with 'a'
SELECT * FROM users WHERE username LIKE '%e%'; -- finds all users whose username contains 'e'
-- % is a wildcard meaning "anything here".
-- One limitation — LIKE is case-sensitive.
-- For case-insensitive search, Postgres has ILIKE, for example:

-- Matches 'Postgres', 'POSTGRES', 'postgres', etc.
SELECT * FROM posts WHERE title ILIKE '%postgres%';

-- Matches only 'postgres'.
SELECT * FROM posts WHERE title LIKE '%postgres%';


-- IN operator for matching against a list of values
SELECT * FROM users WHERE id IN (1, 2, 5); -- finds users
-- instead of a messy: SELECT * FROM users WHERE id = 1 OR id = 2 OR id = 5;
-- Opposite — exclude a list
SELECT * FROM posts WHERE user_id NOT IN (3, 4);
-- In a real API, IN is great for batch lookups — "fetch all posts by these user IDs".

-- BETWEEN operator for range queries
SELECT * FROM users WHERE created_at BETWEEN '2026-01-01' AND '2026-12-31'; -- finds users created in 2026
SELECT * FROM posts WHERE id BETWEEN 10 AND 20; -- finds posts with IDs from 10 to 20

-- IS NULL / IS NOT NULL for checking null values
SELECT * FROM users WHERE bio IS NULL; -- finds users without a bio
SELECT * FROM users WHERE bio IS NOT NULL; -- finds users with a bio
/**
  NULL means "no value", and you can't use = to check for it:
  SELECT * FROM users WHERE bio = NULL;  <== WRONG — this won't work

  This trips up a lot of beginners.
  In Postgres, NULL is not a value, it's the absence of one, so normal equality checks don't apply.
 */

-- ORDER BY - Sorting results
SELECT * FROM posts ORDER BY created_at DESC -- Newest posts first (Descending order)
SELECT * FROM posts ORDER BY created_at ASC -- Oldest posts first (Ascending order) - Default
SELECT * FROM users ORDER BY username ASC --Alphabetical orders of username
-- Most APIs default to newest-first, so ORDER BY created_at DESC will be the most-used pattern.

-- LIMIT and OFFSET (Pagination) - Restricting the number of results
SELECT * FROM posts ORDER BY created_at DESC LIMIT 10; -- Get the 10 most recent posts (Page 1)
SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET 10; -- Get the next 10 recent posts (Page 2)
SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET 20; -- Get the next 10 recent posts (Page 3)
SELECT * FROM users ORDER BY created_at ASC LIMIT 5; -- Get the 5 oldest users
SELECT * FROM users WHERE email LIKE '%@gmail.com' LIMIT 20; -- Get up to 20 users with a gmail email
-- OFFSET skips that many rows before starting.
-- The formula for any page number is:
OFFSET = (page - 1) * limit

-- PUTTING TOGETHER
SELECT id, title, user_id, created_at
FROM posts
WHERE published = true
  AND title ILIKE '%node%'
ORDER BY created_at DESC
    LIMIT 5;
-- The above gets the five most recent published posts with "node" in the title,
-- showing only the id, title, user_id, and created_at columns.
-- Refer to express file for more.
-- More lessons on postgres.sql (This file is too long)