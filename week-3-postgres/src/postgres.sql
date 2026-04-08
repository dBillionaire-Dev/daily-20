-- FROM index.sql
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
  UPDATING DATA IN SQL:
  This is where bugs can get expensive. a bad update can corrupt records.
  Always be careful when writing update statements, and always test them on a small dataset first.

    The syntax looks like this:

          UPDATE table_name
          SET column1 = value1, column2 = value2, ...
          WHERE condition;

  Example below:
 */

-- Updates a user's name from 'Alice Smith' to 'Alice Abua'
UPDATE users
SET name = 'Alice Abua'
WHERE name = 'Alice Smith';

-- Verify a user
UPDATE users
SET is_verified = true
WHERE id = 2;

-- Update multiple columns at once
UPDATE users
SET username = 'Nezer Ekunke', email = 'nezer@thenex.dev'
WHERE username = 'nezer';

/**
  THE MOST DANGEROUS MISTAKE IN SQL:

   You meant to verify one user...

    UPDATE users
    SET is_verified = true;

 ...but you just verified EVERY user in the table.

  Postgres will happily execute this with no warning.
  This will update all records in the users table, setting is_verified to true for every user.
  This is one of the most common production disasters, when you forget to include a WHERE clause in your UPDATE statement.
  Always double-check your UPDATE statements before executing them, especially if they don't have a WHERE clause.
 */

-- A safe habit before running any update, run the SELECT version first:
-- Step 1: check what you're about to update
SELECT * FROM users
WHERE id = 1;

-- Step 2: only then, run the update
UPDATE users
SET is_verified = true
WHERE id = 1
RETURNING id, email, is_verified; -- Always make it a habit to return after INSERT and UPDATE

-- REFER TO LINE 60 IN index.ts for Express examples