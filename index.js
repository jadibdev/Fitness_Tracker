
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./models/user.model')
// this is a logger for server events
const morgan = require('morgan')
// this is for security, 
const helmet = require('helmet')
const middlewares = require('./middlewares')
const Workout = require('./models/workout.model')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 1337


app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('common'))
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}) 


app.get('/', function (req, res) {
    res.json({
        message: "main route was requested ..."
    })
});



app.get('/sf', (req, res) => {
    res.json({
        message: "SF! I'm coming back"
    })
})

app.post('/sf', (req, res) => {
    console.log('You just posted:', req.body)
    res.send('check server logs ...')
})

const Workouts = require('./routes/workouts')
app.use('/Workouts', Workouts)

const usersRoutes = require('./routes/usersRoutes')
app.use('/users', usersRoutes)
/* this middleware is for creating the not-found error
    setting the status to 404 then passing the error to the error handler*/
app.use(middlewares.notFound)

// this middleware is the error handler
// eslint-disable-next-line no-unused-vars
app.use(middlewares.errorHandler)

app.listen(port, () => {
    console.log('server is listening')
})