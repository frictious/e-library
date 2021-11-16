const       express             = require("express");

const router = express.Router();

//ROUTES
router.get("/", (req, res) => {
    res.render("index");
});

//PROFILE
router.get("/profile", (req, res) => {
    res.render("profile");
});

//BOOKS
router.get("/books", (req, res) => {
    res.render("books");
});

//LOGOUT
router.get("/logout", (req, res) => {
    res.render("/");
});

module.exports = router;

