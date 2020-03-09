var express = require('express');
var router = express.Router();
var db = require('../models/todo')


router.post('/', (req, res, next) => {
    console.log(req.body);
    db.create({ name: req.body.name, email: req.body.email }).then(data => {
        res.json(data)
    })
})

router.put('/', (req, res, next) => {
    console.log(req.body);
    db.updateOne({ _id: req.body.id}, { name: req.body.name, email: req.body.email }).then(data => res.json(data))
})

router.delete('/', (req, res, next) => {
    console.log(req.body.id);
    db.remove({ _id: req.body.id}).then(data => res.json(data))
})


module.exports = router;