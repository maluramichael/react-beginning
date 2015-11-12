var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static('dist'));
app.listen(port, function listen(){
	console.log('server listening on port', port)
});