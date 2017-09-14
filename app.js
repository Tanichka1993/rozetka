var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
//

//
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 8000;
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     'extended': 'true'
// }));
// const cors = require('cors');
// app.use(cors());
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'rozetka'
// });
// let initDb = function () {
//     // connection.query(`
//     //         CREATE TABLE IF NOT EXISTS category (
//     //           id           INT          NOT NULL AUTO_INCREMENT,
//     //           title        VARCHAR(255) NOT NULL,
//     //           description  TEXT,
//     //           image_source VARCHAR(255),
//     //           PRIMARY KEY (id)
//     //         );
//     //
//     //
//     //         CREATE TABLE IF NOT EXISTS sub_category (
//     //           id           INT          NOT NULL AUTO_INCREMENT,
//     //           category_id  INT          NOT NULL,
//     //           title        VARCHAR(255) NOT NULL,
//     //           description  TEXT,
//     //           image_source VARCHAR(255),
//     //           PRIMARY KEY (id),
//     //           FOREIGN KEY (category_id) REFERENCES category (id)
//     //         );
//     //
//     //
//     //         CREATE TABLE IF NOT EXISTS first_names (
//     //           id         INT          NOT NULL AUTO_INCREMENT,
//     //           first_name VARCHAR(255) NOT NULL
//     //         );
//     //
//     //         CREATE TABLE IF NOT EXISTS last_names (
//     //           id        INT          NOT NULL AUTO_INCREMENT,
//     //           last_name VARCHAR(255) NOT NULL
//     //         );
//     //
//     //
//     //         CREATE TABLE IF NOT EXISTS user (
//     //           id            INT          NOT NULL AUTO_INCREMENT,
//     //           login         VARCHAR(20)  NOT NULL,
//     //           password_hash VARCHAR(255) NOT NULL,
//     //
//     //           first_name_id INT,
//     //           last_name_id  INT,
//     //
//     //
//     //           FOREIGN KEY (first_name_id) REFERENCES first_names (id),
//     //           FOREIGN KEY (last_name_id) REFERENCES last_names (id)
//     //         );
//     //         `
//     //     , function (err) {
//     //         if (err) {
//     //             console.log('Error during creating tables');
//     //             throw err;
//     //         }
//     //     });
// };




// initDb();