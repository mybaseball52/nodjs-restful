var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://demo:123456789@ds050879.mlab.com:50879/standupmeetingnotes');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
	.get(function(req,res){
		var query = {};

		if(req.query.genre){
			query.genre = req.query.genre;
		}

		Book.find(query, function(err, books){
			if(err)
				res.status(500).send(err);
			else
				res.json(books);
		});
	});

bookRouter.route('/Books/:bookId')
	.get(function(req,res){
		var query = {};

		if(req.query.genre){
			query.genre = req.query.genre;
		}
		
		// get item by parameters 
		Book.find(req.params.bookId, function(err, books){
			if(err)
				res.status(500).send(err);
			else
				res.json(books);
		});
	});

app.use('/api', bookRouter);

app.use('/', function(req,res){
	res.send('Welcome to my API!');
});




app.listen(port, function(){
	console.log('Gulp is running my project on port 8000!');
});
