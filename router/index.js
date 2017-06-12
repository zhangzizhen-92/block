/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express');
const router = express.Router(),
    connection = require("../config/configsql.js");
router.get('/index', (req, res) =>
    connection.query("select * from newTitle", (err, result) =>
        // res.send(result)
        res.render('index', {
            title: 'first',
            len: result.length
        })
    )


)




module.exports = router;