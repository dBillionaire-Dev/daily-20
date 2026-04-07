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
    email VARCHAR(255) NOT NULL UNIQUE CHECK ( email = LOWER(email), email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' ),
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

-- RETURNING, Super useful for backends

/**
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