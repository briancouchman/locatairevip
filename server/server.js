var express = require('express');
var fs = require('fs');
var csvtojson = require("csvtojson");
var eyes = require('eyes');
var xmldoc = require('xmldoc');


var app = express();

app.all('*', function(req,res,next){
	console.log("Setting common headers");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

/*
app.get('/velo/signalisation', function(req, res) {
	console.log("Path /velo/signalisation");
	res.type('application/json'); // set content-type
	
	console.log("Start converting");
	//CSV_convert_stream('data/support_velo_sigs.csv', res);

	CSV_convert('data/support_velo_sigs.csv', function(json){
		res.send(json);
	});

});
*/

app.get('/locations', function(req, res) {
	console.log("Path /locations");
	res.type('application/json'); // set content-type

	fs.readFile('data/locations/locations.json', {encoding: 'utf-8'}, function(err, data){
		res.json(JSON.parse(data));
	});
});


app.listen(3000);
console.log("listening on port 3000");

