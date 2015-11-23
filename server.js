var express = require('express'),
    stylus = require('stylus'),
    path = require('path'),
   // logger = require('morgan'),
    bodyparser = require('body-parser');

function compile(str, filepath){
    return stylus(str).set('filename', filepath);
}

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// config
app.set('views', __dirname + '/server/views');
app.set('view engine', 'vash');
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));

app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

//routes
app.get('*', function(req, res){
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('App is running at port '+ port);
