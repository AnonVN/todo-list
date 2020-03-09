var express = require('express');
var router = express.Router();
var db = require('../models/todo');


// /* GET home page. */
router.get('/', function (req, res, next) {
    db.find({}).then(data =>{
        res.render('index', { title: 'Express', data });
    })

    
});
module.exports = router;
