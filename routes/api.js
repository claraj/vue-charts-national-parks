var express = require('express')
var NationalPark = require('../models').NationalPark

var router = express.Router() 

// Get all the parks 
router.get('/parks', function(req, res, next){
    NationalPark.findAll( {order: [ ['annualVisitors', 'DESC'] ] })  // What a lot of brackets. 
    .then( parks => {
        return res.json(parks)
    })
    .catch(err => next(err))
})


// Add a new park 
router.post('/park', function(req, res, next){
    NationalPark.create(req.body).then (result => {
        return res.status(200).send('ok')
    })
    .catch(err => next(err))
})

module.exports = router 