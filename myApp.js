var express = require('express');
var app = express();

console.log("Hello World");

app.get('/', function(req, res) {
	let path = `${__dirname}/views/index.html`;
	res.sendFile(path);
});

app.get('/json', function(req, res,) {
let str = "Hello json";
str = process.env.MESSAGE_STYLE === 'uppercase' ? str.toUpperCase() : str;
  res.json({"message": str});
});

app.use('/public', express.static(`${__dirname}/public`));




































 module.exports = app;
