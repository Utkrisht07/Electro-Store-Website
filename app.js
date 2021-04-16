const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./connection/mongoose");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoutes = require("./routes/auth/auth.routes");
const contactRoutes = require("./routes/contact/contact.routes");

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/check",(req,res) => {
    res.send("Server is running");
});

// app.get("/",(req,res) => {
//     res.render("index.ejs");
// });


app.use("/contact-us",contactRoutes);
app.use("/",authRoutes);

app.post("/checkout",(req,res) => {
    res.render("checkout.ejs");
});



app.listen(8000,() => {
    console.log("Server is up and running");
})