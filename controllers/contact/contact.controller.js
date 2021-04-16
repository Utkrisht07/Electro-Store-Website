const chalk = require("chalk");
const {sendEmail} = require("../../utils/sendMail");


module.exports.sendEmail = async (req,res) => {
    await sendEmail({...req.body});
    console.log(req.body);
    res.render("index.ejs",{user:{name:""}});
};