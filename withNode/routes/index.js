const express = require('express');
const router = express.Router();

/*get home page*/
router.get('/', (req, res, next) => {
    res.render('home');
});

router.get('/home', (req, res, next) => {
    res.render('home');
});

router.get('/cv', (req, res, next) => {
    res.render('cv');
});

router.get('/hobbies', (req, res, next) => {
    res.render('hobbies');
});

/*

router.get('/hobbys', (req, res, next) => {
    res.render('hobbies');
});


router.get('/cv', (req, res, next) => {
    res.render('cv');
});
*/
module.exports = router;