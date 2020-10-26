const express = require('express');
const router = express.Router();

/*get home page*/
router.get('/', (req, res, next) => {
    res.render('home');
});

router.get('/potato', (req, res, next) => {
    res.render('home');
});

/*

router.get('/hobbys', (req, res, next) => {
    res.render('hobbys');
});


router.get('/cv', (req, res, next) => {
    res.render('cv');
});
*/
module.exports = router;