const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
		firstName: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		},
		lastName: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		},
		password: {
			type: Number,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		}
		}, {
		timestamps: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User