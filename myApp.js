var bodyParser = require("body-parser");
var express = require('express');
var app = express();

console.log("Hello World");

app.use('/public', express.static(`${__dirname}/public`));

app.use(function(req,res,next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
	let path = `${__dirname}/views/index.html`;
	res.sendFile(path);
});

app.get('/json', function(req, res,) {
let str = "Hello json";
str = process.env.MESSAGE_STYLE === 'uppercase' ? str.toUpperCase() : str;
  res.json({"message": str});
});

app.get('/now', function(req,res,next) {
  req.time = new Date().toString();
  next();
}, function(req,res) {
  res.send({time: req.time});
});


app.get('/:word/echo', function(req,res) {
  res.send({echo: req.params.word});
});


app.route('/name')
  .get(function(req,res){
    res.send({name: `${req.query.first} ${req.query.last}`});
  })
  .post(function(req,res){
    res.send({name: `${req.query.first} ${req.query.last}`});
  });



































 module.exports = app;
