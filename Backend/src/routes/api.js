const express = require("express");
const router = express.Router();

const pool = require("../database");

router.get("/products", async (req, res) => {
    const products = await pool.query("SELECT * FROM Products");
    res.json(products);
});

router.post("/products", async (req, res) => {
    console.log(req.body);
    const productCreated = await pool.query(
        `INSERT INTO Products(name, description, created_at, price, image_url, vendor, category) VALUES (${req.body.name}, ${req.body.description}, ${req.body.created_at}, ${req.body.price}, ${req.body.image_url}, ${parseInt(req.body.vendor)}, ${req.body.category})`
    );
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

module.exports = router;
