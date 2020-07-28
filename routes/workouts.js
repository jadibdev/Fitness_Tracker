const router = require('express').Router()
const Workout = require('../models/workout.model')


router.route('/').get((req, res, next) => {
    Workout.find({}, (err, workouts) => {
        res.json(workouts)
        next(err)
    })
    
})

router.route('/create').post((req, res) => {
    const newWorkout = new Workout({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    })

    newWorkout.save()
    .then(() => res.json('workout added'))
})

module.exports = router