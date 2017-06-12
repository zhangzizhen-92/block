/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express'),
    connection = require("../config/configsql.js"),
    router = express.Router();
router.post('/some', (req, res) => {
    let title = req.body.title,

        content = req.body.content,

        sql = "insert into newTitle(title,time,content) values('" + title + "',now(),'" + content + "')";
    console.log(sql)
    connection.query(sql, (err, result) => {
        if (err) throw err;
        return res.send({ code: 0, msg: result })
    })

})
module.exports = router;