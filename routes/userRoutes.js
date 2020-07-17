var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    res.send('this returns users');
})

// About page route.
router.get('/create', function (req, res) {
    res.send('this creates users');
})

module.exports = router;
