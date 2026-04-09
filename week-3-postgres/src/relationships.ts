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
 *      For example, in a "users" table, the "id" column is often used as the primary key to uniquely identify each user.
 *      In a "posts" table, the "id" column can also serve as the primary key to uniquely identify each post.
 *      In a "comments" table, you might have a composite primary key consisting of "post_id" and "comment_id" to uniquely identify each comment for a specific post.
 *      In a "categories" table, the "id" column can be the primary key to uniquely identify each category.
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
 */

