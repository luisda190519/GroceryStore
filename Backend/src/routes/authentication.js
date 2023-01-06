const express = require("express");
const router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const pool = require("../database");
const helpers = require("../utils/helpers");

router.post("/login", passport.authenticate("local"), (req, res) => {});

router.post("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.json({ res: "Log out succesfully" });
    });
});

router.post("/signup", async function (req, res, next) {
    let user = await pool.query(
        `INSERT INTO Users (username, password) VALUES ("${
            req.body.username
        }", "${await helpers.encryptPassword(req.body.password)}");`
    );

    user = await pool.query(
        `SELECT * FROM Users WHERE username = "${req.body.username}"`
    );

    user = JSON.parse(JSON.stringify(user));

    req.login(
        {
            id: user[0].id,
            username: user[0].username,
            password: user[0].password,
        },
        function (err) {
            if (err) {
                return next(err);
            }
            res.json(user);
        }
    );
});

module.exports = router;
