const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
        unique: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 3
	},
}, {
	timestamps: true
});

const User = mongoose.model('users', UserSchema);

module.exports = User;