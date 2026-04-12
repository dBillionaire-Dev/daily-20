// HERE WE WILL LEARN ABOUT RELATIONSHIPS IN POSTGRESQL, USING PRIMARY AND FOREIGN KEYS

/**
 * RELATIONSHIPS IN POSTGRESQL:
 *
 * * Primary keys:
 *   - A primary key is a unique identifier for each record in a table.
 *   - It ensures that each record can be uniquely identified and accessed.
 *   - A primary key can be a single column or a combination of columns (composite key).
 *   - It must contain unique values and cannot contain NULL values.
 *
 *      * For example, in a "users" table, the "id" column is often used as the primary key to uniquely identify each user.
 *          - In a "posts" table, the "id" column can also serve as the primary key to uniquely identify each post.
 *          - In a "comments" table, you might have a composite primary key consisting of "post_id" and "comment_id" to uniquely identify each comment for a specific post.
 *          - In a "categories" table, the "id" column can be the primary key to uniquely identify each category.
 *
 *
 *      CREATE TABLE users (
 *           id SERIAL PRIMARY KEY,  -- no two users can have the same id
 *           email VARCHAR(255) NOT NULL UNIQUE
 *        );
 *
 *  SERIAL vs UUID as Primary keys:
 *      Syntax:
 *
 *      -- SERIAL: simple auto-incrementing integer (1, 2, 3...)
 *      id SERIAL PRIMARY KEY
 *
 *      -- UUID: random unique string (a4f3b2c1-...)
 *      id UUID PRIMARY KEY DEFAULT gen_random_uuid()
 *
 * * SERIAL is simpler.
 * * UUID is better for APIs as it doesn't expose how many records you have, and it works across distributed systems.
 * * With Prisma and NestJS, UUID is the modern default.
 *
 * * Foreign keys:
 *   - A foreign key is a column or a set of columns in one table that references the primary key of another table.
 *   - It establishes a relationship between two tables, allowing you to enforce referential integrity.
 *   - A foreign key can contain duplicate values and can contain NULL values (if the relationship is optional).
 *
 *          CREATE TABLE posts (
 *              id         SERIAL PRIMARY KEY,
 *              title      VARCHAR(255) NOT NULL,
 *              body       TEXT NOT NULL,
 *              user_id    INT NOT NULL REFERENCES users(id), -- FOREIGN KEY referencing users table
 *              created_at TIMESTAMPTZ DEFAULT NOW()
 *          );
 *
 *  REFERENCES users(id) is the foreign key. It tells Postgres: "the value in this column must exist as an id in the users table."
 *  This means:
 * * You cannot insert a post with a user_id that doesn't exist in users
 * * Postgres enforces this automatically, no bad data gets in
 *
 * ON DELETE — What Happens When the Parent is Deleted?
 * - This is a critical decision. What should happen to a user's posts if that user is deleted?
 *
 *          -- Option 1: CASCADE — delete the posts too
 *          user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
 *
 *          -- Option 2: SET NULL — orphan the posts (keep them, clear the user link)
 *          user_id INT REFERENCES users(id) ON DELETE SET NULL
 *
 *          -- Option 3: RESTRICT — block the deletion entirely (default)
 *          user_id INT NOT NULL REFERENCES users(id) ON DELETE RESTRICT
 *
 *  USE CASES:
 *  - For a blog app, CASCADE makes sense. If a user is deleted, their posts go too.
 *  - For something like an orders table in an e-commerce app, you'd use RESTRICT. You never want to delete a user if they have orders.
 */

/**
 * THREE TYPES OF RELATIONSHIPS:
 * 1. One-to-One (1:1)
 *    - Each record in Table A is related to one and only one record in Table B, and vice versa.
 *    - Example: A user has one profile, and a profile belongs to one user.
 *
 *    Example:
 *
 *          CREATE TABLE profiles (
 *          id       SERIAL PRIMARY KEY,
 *          user_id  INT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
 *          bio      TEXT,
 *          avatar   VARCHAR(255)
 *          );
 * * The UNIQUE constraint on user_id is what makes it one-to-one.
 * * It prevents two profiles from pointing to the same user.
 *
 * 2. One-to-many (1:M)
 *      - One user has many posts. One post belongs to one user.
 *
 *      Example:
 *
 *          CREATE TABLE users (
 *          id    SERIAL PRIMARY KEY,
 *          email VARCHAR(255) NOT NULL UNIQUE
 *          );
 *
 *          CREATE TABLE posts (
 *          id      SERIAL PRIMARY KEY,
 *          title   VARCHAR(255) NOT NULL,
 *          user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
 *          );
 *
 * The foreign key always goes on the "many" side — posts has user_id, not the other way around.
 *
 *      users         posts
 *      ------        ------
 *      id ◄──────── user_id
 *      email         title
 *
 * 3. Many-to-Many relationships (M:M)
 *      - A post can have many tags.
 *      - A tag can belong to many posts.
 *      - You can't model this with just two tables — you need a junction table (also called a join table or pivot table):
 *
 *
 *      CREATE TABLE tags (
 *      id   SERIAL PRIMARY KEY,
 *      name VARCHAR(50) NOT NULL UNIQUE
 *      );
 *
 *      CREATE TABLE post_tags (
 *      post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
 *      tag_id  INT NOT NULL REFERENCES tags(id)  ON DELETE CASCADE,
 *      PRIMARY KEY (post_id, tag_id)  -- composite primary key, prevents duplicates
 *      );
 *
 *  - post_tags is the junction table. Each row says "this post has this tag".
 *  - The composite primary key ensures the same post can't have the same tag twice.
 *
 *          posts              post_tags           tags
 *          -----              ---------           ----
 *          id ◄────────────── post_id
 *                              tag_id ────────────► id
 *                                                  name
 */

