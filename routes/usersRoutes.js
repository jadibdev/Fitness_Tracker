
const router = require('express').Router()
const User = require('../models/user.model')


router.route('/').get((req, res) => {
    /* User.find({}, (err, users) => {
        res.json(users)
        next(err)
    }) */
    User.find({}, (err, users) => {
        res.json(users)
    })

})

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    const newUser = new User({ 
        firstName,
        lastName,
        email,
        password
    })

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router