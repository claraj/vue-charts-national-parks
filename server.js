var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var chart_api = require('./routes/api.js')

var app = express() 

app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.use(bodyParser.json())

app.use('/api', chart_api)

// Error handlers - for not found, and app errors 
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
  })

// Start server running 
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})