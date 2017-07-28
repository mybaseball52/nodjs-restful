var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db;

if(process.env.ENV == 'Test') 
	db = mongoose.connect('mongodb://demo:123456789@ds050879.mlab.com:50879/standupmeetingnotes_test');
else
	db = mongoose.connect('mongodb://demo:123456789@ds050879.mlab.com:50879/standupmeetingnotes');
var Book = require('./models/bookModel');
// var Author = require('./models/authorModel');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);
// authorRouter = require('./routes/authorRouter')(Author);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function(req,res){
	res.send('Welcome to my API!');
});


app.listen(port, function(){
	console.log('Gulp is running my project on port 8000!');
});

module.exports = app;