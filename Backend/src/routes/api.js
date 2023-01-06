const express = require("express");
const router = express.Router();

const pool = require("../database");

router.get("/products", async (req, res) => {
    const products = await pool.query("SELECT * FROM Products");
    res.json(products);
});

router.get("/categories", async (req, res) => {
    const categories = await pool.query("SELECT distinct(category) FROM Products");
    res.json(categories);
});

router.post("/products", async (req, res) => {
    const product = {
        name: req.body.name,
        description: req.body.description,
        created_at: req.body.created_at,
        price: req.body.price,
        image_url: req.body.image_url,
        vendor: req.body.vendor,
        category: req.body.category,
    };
    const productCreated = await pool.query(`INSERT INTO Products set ?`, [
        product,
    ]);
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
