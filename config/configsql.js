/**
 * Created by Administrator on 2017/6/10.
 */
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "896523",
    database: "zzzdata"
})
connection.connect();

module.exports = connection;