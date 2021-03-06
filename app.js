var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var socket_io=require('socket.io');



//var sample = require('./routes/sample');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petStore',{useMongoClient:true});
const router = express.Router();



var customer =require("./routes/customer-managament.js")(router);
var pet =require("./routes/pet-managament.js")(router);
var appointment = require("./routes/appointment-managament.js")(router);

//var Customer = require('./routes/customers.json');

var app = express();

app.io = require('socket.io')();

require("./routes/socketio-manager.js")(app.io);

//const io = socket_io();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//// Nuevas Rutas van aqui:
app.use('/api',customer );
app.use('/api',pet );
app.use('/api',appointment );

//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
