CREATE DATABASE TestDB;

USE TestDB;

CREATE TABLE Users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

ALTER TABLE Users
    ADD PRIMARY KEY(id);

ALTER TABLE Users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Users;

INSERT INTO Users (id, username, password)
    VALUES(1, "luisda", "zzz123")

SELECT *
FROM Users

CREATE TABLE Products(
    id INT(11) NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    price FLOAT(500) NOT NULL,
    vendor INT(11),
    CONSTRAINT fk_user FOREIGN KEY(vendor) REFERENCES Users(id) 
)

CREATE TABLE Cart(
    id INT(11) NOT NULL,
    TOTAL FLOAT(500) NOT NULL,
    userID INT(11),
    vendorID INT(11),
    productID INT(11),
    CONSTRAINT fk_user FOREIGN KEY(userID) REFERENCES Users(id),
    CONSTRAINT fk_vendor FOREIGN KEY(vendorID) REFERENCES Users(id), 
    CONSTRAINT fk_product FOREIGN KEY(productID) REFERENCES Products(id) 
)

ALTER TABLE Products
    ADD PRIMARY KEY (id)

ALTER TABLE Products
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Products

ALTER TABLE Cart
    ADD PRIMARY KEY (id)

ALTER TABLE Cart
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Cart