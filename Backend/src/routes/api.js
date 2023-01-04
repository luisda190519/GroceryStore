const express = require('express');
const router = express.Router()

const pool = require('../database');

router.get("/products", async (req, res) =>{
    const products = await pool.query("SELECT * FROM Products")
    res.json()
})

module.exports = router;