CREATE DATABASE grocerystoredb;

USE grocerystoredb;

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
    VALUES(1, "luisda", "$2b$10$dl8H.gMPurWIN2xhM/n.RuZZsgk5aR7UIWSOAA9UjJUk/0XBTXhy.");

SELECT *
FROM Users;

CREATE TABLE Vendor(
    id INT(11) NOT NULL,
    name VARCHAR(250) NOT NULL,
    location VARCHAR(250) NOT NULL,
    empresa VARCHAR(250) NOT NULL
);

ALTER TABLE Vendor
    ADD PRIMARY KEY (id);

ALTER TABLE Vendor
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

CREATE TABLE Products(
    id INT(11) NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    price FLOAT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    vendor INT(11),
    category VARCHAR(50),
    CONSTRAINT fk_vendor FOREIGN KEY(vendor) REFERENCES Vendor(id) 
);

ALTER TABLE Products
    ADD PRIMARY KEY (id);

ALTER TABLE Products
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Products;

CREATE TABLE Cart(
    id INT(11) NOT NULL,
    TOTAL FLOAT NOT NULL,
    userID INT(11),
    productID INT(11),
    vendorID INT(11),
    CONSTRAINT fk_user FOREIGN KEY(userID) REFERENCES Users(id),
    CONSTRAINT fk_product FOREIGN KEY(productID) REFERENCES Products(id),
    CONSTRAINT fk_vendedor FOREIGN KEY(vendorID) REFERENCES Vendor(id) 
);

ALTER TABLE Cart
    ADD PRIMARY KEY (id);

ALTER TABLE Cart
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Cart;

INSERT INTO Vendor(id, name, location, empresa)
VALUES(1, "Olimpica", "Bogota", "Olimpica");


INSERT INTO Products(id, name, description, created_at, price, image_url, vendor, category)
VALUES(1, "Hot Dog", "Hot dog made with butter bean bread, german sausage, and imported italian ketchup", "2018-02-26 16:16:17", 45.80, "https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info", 1, "Fast food");

SELECT *
FROM Products;

