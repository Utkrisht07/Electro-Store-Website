const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/auth.controller");

router.get("/login",(req,res) => {
    res.render("login.ejs",{msg:""});
});

router.get("/register",(req,res) => {
    res.render("register.ejs",{msg:""});
});


router.post("/login",authController.login);

router.post("/register",authController.register);

router.get("/:name",authController.index)

module.exports = router;