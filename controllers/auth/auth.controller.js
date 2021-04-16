const User = require("../../models/users.model");
const firebase= require("firebase");
const chalk = require("chalk");

module.exports.login = async (req,res) => {
    const {name,password} = req.body;
    // db.collection("Users").get()
    // .then(snapShot => {
    //     snapShot.forEach(user => {
    //         console.log(user.data());
    //         if(user.data().name == name && user.data().password == password){
    //             console.log(chalk.green(`User found with name ${name}..Logging in`));
    //             res.redirect(`/${name}`);
    //             return;
    //         }
    //     });
    //     res.render("login.ejs",{msg:"Invalid credentials"});
    // })
    const user = await User.findOne({ name });
    if (!user) {
        console.log(chalk.red("Can't find user"));
        res.render("login.ejs",{msg:"Invalid credentials"});
    }else if(user.password == password){
        console.log(chalk.green(`User found with name ${name}..Logging in`));
        res.redirect(`/${user.name.split(" ").join("-")}`);
    }
}


module.exports.register = async (req,res) => {
    const {name,email,password} = req.body;
    // db.collection("Users").add({...newUser,timestamp: firebase.firestore.FieldValue.serverTimestamp()})
    // .then( _ => {
    //     console.log(chalk.green("Successfully registered...Redirecting to login"));
    //     res.redirect("/login");
    // }) 
    // .catch(err => {
    //     console.log(chalk.red(err));
    //     res.render("register.ejs",{msg:"Error occured. Please try again!"})
    // })
    const newUser = new User({name:name,email:email,password:password});
    try{
        await newUser.save();
        console.log(chalk.green("Successfully registered...Redirecting to login"));
        res.redirect("/login");
    } catch(err){
        console.log(chalk.red(err));
        res.render("register.ejs",{msg:"Error occured. Please try again!"})
    }
};


module.exports.index = async (req,res) => {
    const name = req.params.name.split("-").join(" ");
    // db.collection("Users").get()
    // .then(snapShot => {
    //     snapShot.forEach(user => {
    //         console.log(user.data());
    //         if(user.data().name == name){
    //             console.log(chalk.green(`Redirecting ${name} to index page`));
    //             res.render("index.ejs",{user:user.data()});
    //             return;
    //         }
    //     });
    //     res.render("login.ejs",{msg:"Invalid credentials"});
    //})
    console.log(name);
    const user = await User.findOne({ name:name });
    res.render("index.ejs",{user:user});
}