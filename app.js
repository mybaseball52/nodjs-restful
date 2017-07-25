var express = require('express');

var app = express();

app.use('/', function(req,res){
	res.send('Welcome to my API!');
});

app.listen(8000, function(){
	console.log('Gulp is running my project on port 8000!');
});
