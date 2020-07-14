
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 1337

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const newUserRouter = require('./routes/newUser')

app.use('/users', newUserRouter)

app.post('/signin', (req, res) => {
    console.log('Got body:', req.body)
})

app.post('/signup', (req, res) => {
    console.log('Got body:', req.body)
})

app.listen(port, (req, res) => {
    console.log('Server is up')
})