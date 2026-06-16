-- CREATING A USER TABLE AND A PRODUCT TABLE, THEN INSERTING SOME SAMPLE DATA INTO EACH TABLE
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email)
VALUES ('Ebenezer Ekunke', 'nex@email.com'),
       ('Eliezer Ekunke', 'eli@email.com')
RETURNING *;

SELECT * FROM users;
    
-- PRODUCT TABLE
CREATE TABLE products (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price)
VALUES ('Laptop', 999.99),
       ('Smartphone', 499.99)
RETURNING *;


-- ORDER TABLE
CREATE TABLE orders (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders (user_id, product_id, quantity, total_price)
VALUES (2, 1, 3, 2999.97),
       (1, 2, 2, 999.98)
RETURNING *;

SELECT 
    o.id,
    u.name AS user_name,
    p.name AS product_name,
    o.quantity,
    o.total_price
FROM orders o
JOIN users u ON u.id = o.user_id
JOIN products p ON p.id = o.product_id;

SELECT * FROM orders;