var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: 'application/text-enriched' }))

app.post('/demo', function(req, res) {
	console.log('POST DATA')
	console.log('STREAM', req.body)
	console.log('STREAM to STRING', req.body.toString())

	res.status(200).send('ok')
});

app.listen(3000)