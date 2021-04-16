const mongoose = require("mongoose");
require("dotenv").config();

// Connection created to mongodb using mongoose
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

mongoose.connection.on("open", () => {
	console.info("Connected to Mongo");
});

mongoose.connection.on("error", (err) => {
	console.error(err);
});