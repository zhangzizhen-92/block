/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express'),
    router = express.Router(),

    connection = require("../config/configsql.js");
router.post('/found', (req, res) => {

    connection.query("select * from newTitle limit " + req.body.start + ",5", (err, result) =>
        res.send(result)
    )
})
module.exports = router;