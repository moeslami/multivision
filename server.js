var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');

app.set('view engine', 'vash');

app.get('*', function(req, res){
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('App is running at port '+ port);
