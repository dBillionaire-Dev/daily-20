/**
 * # Data Types — What Can PostgreSQL Store?
 *
 * Before you create any table, you need to tell Postgres exactly what kind of data each column will hold.
 * This is one of the things that makes Postgres powerful, it's very strict about types, which protects your data from garbage getting in.
 *
 * Think of it like this: if a column is meant to store someone's age, you don't want someone accidentally storing "twenty" as text instead of `20` as a number.
 * Postgres enforces this for you.
 *
 * The types you'll use 90% of the time as a backend dev:
 *
 * Numbers
 *
 *      INT           -- whole numbers: 1, 42, -7  (use for IDs, counts, ages)
 *      BIGINT        -- very large whole numbers  (use when INT might not be big enough)
 *      NUMERIC(10,2) -- exact decimals: 99.99     (use for prices/money — never FLOAT for money!)
 *      FLOAT         -- approximate decimals      (use for scientific data, not money)
 *
 *
 * Text
 *
 *      VARCHAR(255)  -- text with a max length    (use for names, emails, titles)
 *      TEXT          -- unlimited length text     (use for descriptions, posts, comments)
 *      CHAR(2)       -- fixed-length text         (use for things like country codes: 'NG', 'US')
 *
 *
 * Boolean
 *
 *      BOOLEAN       -- true or false             (use for is_active, is_verified, is_deleted)
 *
 * Dates & Times
 *
 *      DATE          -- just a date: 2025-01-15
 *      TIME          -- just a time: 14:30:00
 *      TIMESTAMP     -- date + time: 2025-01-15 14:30:00
 *      TIMESTAMPTZ   -- timestamp with timezone   (almost always prefer this over TIMESTAMP)
 *
 * Special
 *
 *      SERIAL        -- auto-incrementing integer (classic way to make auto IDs)
 *      UUID          -- universally unique ID: a4b3c2d1-...  (modern way, great for APIs)
 *      JSON / JSONB  -- store JSON data           (JSONB is faster and searchable — prefer it)
 *
 *
 * A real-world example: a `users` table for a web app:
 *
 *      CREATE TABLE users (
 *           id          SERIAL PRIMARY KEY,
 *           email       VARCHAR(255) NOT NULL UNIQUE,
 *           username    VARCHAR(50)  NOT NULL UNIQUE,
 *           password    TEXT         NOT NULL,
 *           is_verified BOOLEAN      DEFAULT false,
 *           created_at  TIMESTAMPTZ  DEFAULT NOW()
 *         );
 *
 * Notice a few things here:
 * - `SERIAL PRIMARY KEY` — auto-generates a unique ID for every new user (1, 2, 3…)
 * - `NOT NULL` — Postgres will reject the row if this field is missing
 * - `UNIQUE` — no two rows can have the same email or username
 * - `DEFAULT false` — if you don't provide a value, it defaults to false
 * - `DEFAULT NOW()` — automatically records when the row was created
 *
 * This is exactly the kind of table you'd write for a real Node.js/Express app.
 *
 * Key rules to remember:
 *
 * - Use **`TIMESTAMPTZ`** over `TIMESTAMP` — always store time with timezone awareness
 * - Use **`NUMERIC`** for money, never `FLOAT` (floating point rounding causes bugs)
 * - Use **`TEXT`** freely — Postgres stores it efficiently, no need to obsess over `VARCHAR` lengths
 * - Use **`BOOLEAN`** instead of storing `0`/`1` as integers
 *
 */