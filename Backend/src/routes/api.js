const { query } = require("express");
const express = require("express");
const router = express.Router();

const pool = require("../database");

router.get("/products", async (req, res) => {
    const products = await pool.query("SELECT * FROM Products");
    res.json(products);
});

router.get("/categories", async (req, res) => {
    const categories = await pool.query(
        "SELECT distinct(category) FROM Products"
    );
    res.json(categories);
});

router.post("/products", async (req, res) => {
    let vendor = await pool.query(
        `SELECT id FROM Vendor WHERE name = "${req.body.vendor}"`
    );
    vendor = JSON.parse(JSON.stringify(vendor));

    const product = {
        name: req.body.name,
        description: req.body.description,
        created_at: req.body.created_at,
        price: req.body.price,
        image_url: req.body.image_url,
        vendor: vendor[0].id,
        category: req.body.category,
    };

    const productCreated = await pool.query(`INSERT INTO Products set ?`, [
        product,
    ]);

    res.json(productCreated);
});

router.get("/products/category/:category", async (req, res) => {
    const products = await pool.query(
        `SELECT * FROM Products p WHERE p.category = '${req.params.category}'`
    );
    res.json(products);
});

router.get("/products/:productID", async (req, res) => {
    const products = await pool.query(
        `SELECT * FROM Products p WHERE p.id = '${req.params.productID}'`
    );
    res.json(products);
});

router.get("/vendorName/:vendorID", async (req, res) => {
    const name = await pool.query(
        `SELECT * FROM Vendor WHERE id = ${req.params.vendorID};`
    );
    res.json(name);
});

router.get("/vendors", async (req, res) => {
    const vendors = await pool.query(`SELECT name FROM Vendor;`);
    res.json(vendors);
});

router.post("/vendors", async (req, res) => {
    const vendor = {
        name: req.body.name,
        location: req.body.location,
        empresa: req.body.empresa,
    };

    const vendorCreated = await pool.query(`INSERT INTO Vendor set ?`, [
        vendor,
    ]);

    res.json(vendorCreated);
});

router.post("/cart", async (req, res) => {
    const product = {
        total: req.body.total,
        userID: req.body.userID,
        productID: req.body.productID,
        vendorID: req.body.vendorID,
    };
    const productAdded = await pool.query(`INSERT INTO Cart set ?`, [product]);
    res.json(productAdded);
});

router.get("/cart/:userID", async (req, res) => {
    const cart = await pool.query(
        `SELECT * FROM Cart WHERE userID = "${req.params.userID}"`
    );
    res.json(cart);
});

router.post("/payCart/:userID", async (req, res) => {
    const pay = await pool.query(
        `DELETE FROM Cart WHERE userID = ${req.params.userID};`
    );
    res.json(pay);
});

router.get("/getProductsByUser/:userID", async (req, res) => {
    const products = await pool.query(
        `with productos(id, image_url, name, price, quantity, category, vendor, description) as ( 
            SELECT p.id, p.image_url, p.name as name, p.price, (c.total/p.price), p.category, p.vendor, p.description 
            FROM Products p JOIN Cart c ON p.id = c.productID 
            WHERE c.userID = ${req.params.userID} 
        ) 
        
        SELECT p.id, p.image_url, p.name, p.price, p.quantity,p.category, v.name as vendor, p.description 
        FROM productos p JOIN Vendor v ON p.vendor = v.id;`
    );
    res.json(products);
});

router.delete("/cart/:userID/:productID", async (req, res) => {
    const remove = await pool.query(
        `
        DELETE
        FROM Cart
        WHERE productID = ${req.params.productID} AND userID = ${req.params.userID};
        `
    );

    res.json(remove);
});

module.exports = router;
