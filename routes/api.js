var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rozetka'
});

/* GET users listing. */
router.get('/categories', function(req, res, next) {
    connection.query('SELECT * FROM category', function (err, rows) {
        if (err) throw err;
        console.log('get all categories, length: ' + rows.length);
        res.status(200).send(rows);
    });});

module.exports = router;


// app.get('/api/categories', function (req, res) {
//     connection.query('SELECT * FROM category', function (err, rows) {
//         if (err) throw err;
//         console.log('get all categories, length: ' + rows.length);
//         res.status(200).send(rows);
//     });
// });