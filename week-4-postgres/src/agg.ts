/**
 * AGGREGATE FUNCTIONS:
 *
 * * Aggregate functions perform a calculation on a set of values and return a single value.
 * * They are often used with the GROUP BY clause to group the result set by one or more columns.
 *      These collapse many rows into a single calculated value:
 *
 *
 *      COUNT(*)        -- count rows
 *      SUM(column)     -- add up values
 *      AVG(column)     -- calculate the average
 *      MIN(column)     -- find the smallest value
 *      MAX(column)     -- find the largest value
 *
 *      SIMPLE EXAMPLE:
 *      -- This will return the total number of rows in the posts table.
 *      SELECT COUNT(*) FROM posts;
 *
 *      -- How many users do we have?
 *      SELECT COUNT(*) FROM users;
 *
 *      -- How many published posts?
 *      SELECT COUNT(*) FROM posts WHERE published = true;
 *
 *      -- How many users signed up today?
 *      SELECT COUNT(*) FROM users
 *      WHERE created_at >= CURRENT_DATE;
 *
 *  COUNT(*) counts all rows.
 *  COUNT(column) counts only rows where that column is not NULL, a subtle but important difference.
 *
 */

/**
 * GROUP BY:
 *
 * * The GROUP BY clause groups rows that have the same values in specified columns into summary rows.
 * * It is often used with aggregate functions to group the result set by one or more columns.
 * * * For example, to count how many posts each user has published:
 *
 *
 *      SELECT user_id, COUNT(*) AS post_count
 *      FROM posts
 *      WHERE published = true
 *      GROUP BY user_id;
 *
 *      RESULTS:
 *      user_id | post_count
 *      --------|----------
 *      1       | 5
 *      2       | 2
 *      3       | 8
 *
 */

/**
 * HAVING:
 * * The HAVING clause is used to filter groups created by the GROUP BY clause based on a specified condition.
 * * It is similar to the WHERE clause, but WHERE filters rows before grouping, while HAVING filters groups after they have been formed.
 *
 *
 */