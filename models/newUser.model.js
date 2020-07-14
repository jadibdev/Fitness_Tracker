const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newUserSchema = new Schema({
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
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		}
		}, {
		timestamps: true
})

const newUser = mongoose.model('newUser', newUserSchema)

module.exports = newUser