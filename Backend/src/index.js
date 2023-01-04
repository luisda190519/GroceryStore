const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const session = require("express-session");
const validator = require("express-validator");
const flash = require("connect-flash");
const MySQLStore = require("express-mysql-session")(session);

const app = express();
const port = 3000;
const { database } = require('./keys');

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    session({
        secret: "luisda1905",
        resave: false,
        saveUninitialized: true,
        store: new MySQLStore(database),
    })
);

app.listen(port, () => {
    console.log("Listen on port " + port);
});
