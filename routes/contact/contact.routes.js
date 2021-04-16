const express = require("express");
const router = express.Router();
const contactController = require("../../controllers/contact/contact.controller");

router.get("/",(req,res) => {
    res.render("contact.ejs");
});

router.post("/",contactController.sendEmail)

module.exports = router;