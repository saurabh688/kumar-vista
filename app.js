/* ---------------------------------------------------------------
** Variable declaration
------------------------------------------------------------------*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


/* ---------------------------------------------------------------
** Giving Connection for mongonative and mysql database
------------------------------------------------------------------*/
//require('./server/api/data/mongonative-connection.js').open();
require('./api/data/mysql-connection.js')

/* ---------------------------------------------------------------
** ** Declarations of routes
------------------------------------------------------------------*/
var appRoutes         = require('./api/routes/app');
var appCrudMysqlDd    = require('./api/routes/crudmysqldb');
var appUser           = require('./api/routes/user');


/* ---------------------------------------------------------------
** Express Setting
---------------------------------------------------------------- */
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use(express.static(path.join(__dirname, 'public')));
// This is required if angular and backend code are
// in different servers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

/* ---------------------------------------------------------------
** Set Routes
---------------------------------------------------------------- */
app.use('/', appRoutes);
app.use('/api/mysqlDb', appCrudMysqlDd);
app.use('/api/user', appUser);

/* ---------------------------------------------------------------
** Error handling
---------------------------------------------------------------- */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send("ok");
});

module.exports = app;


