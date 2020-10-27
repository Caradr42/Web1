const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

function cloneToObjArr(doc){
    var copy = [];
    doc.forEach(e => { 
        if(Array.isArray(e)){
            copy.push(e);
        }else if (typeof e === "object"){
            copy.push(e.toObject());
        }
    });
    return copy;
}

var Schema = mongoose.Schema;

var cvDataSchema = new Schema({
    title: {type: String, required: true},
    content: [String]
},{collection: "cvFields"});

var homeDataSchema = new Schema({
    title: String,
    content: [String],
    imgURL: String
},{collection: "homeData"});

var hbDataSchema = new Schema({
    title: String,
    content: [String],
    imgURL: String
},{collection: "hbData"});

var cvData = mongoose.model('cvFields', cvDataSchema);
var homeData = mongoose.model('homeData', homeDataSchema);
var hbData = mongoose.model('hbData', hbDataSchema);

router.get('/cv', (req, res, next) => {
    cvData.find() 
        .then(function (doc) {
            var copy = cloneToObjArr(doc);
            res.render('cv', {cvFields: copy});
        });
});

/*get home page*/
router.get('/', (req, res, next) => {
    homeData.find() 
        .then(function (doc) {
            var copy = cloneToObjArr(doc);
            res.render('home', {homeFields: copy});
        });
});

router.get('/home', (req, res, next) => {
    homeData.find() 
        .then(function (doc) {
            var copy = cloneToObjArr(doc);
            res.render('home', {homeFields: copy});
        });
});

router.get('/hobbies', (req, res, next) => {
    hbData.find() 
        .then(function (doc) {
            var copy = cloneToObjArr(doc);
            res.render('hobbies', {hbFields: copy});
        });
});

module.exports = router;