const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../database");
const helpers = require("./helpers");

passport.use(
    new LocalStrategy(async function verify(username, password, cb) {
        let user = await pool.query(
            `SELECT * FROM Users WHERE username = "${username}"`
        );

        user = JSON.parse(JSON.stringify(user))[0]

        if (!helpers.matchPassword(password, user.password)) {
            return cb(null, false, {
                message: "Incorrect username or password.",
            });
        }

        return cb(null, user, {
            message: "logged in succesfully",
        });
    })
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
