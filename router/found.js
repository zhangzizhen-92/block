/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express'),
    router = express.Router(),
    connection = require("../config/configsql.js");
router.get('/found', (req, res) => {

    connection.query("select * from newTitle", (err, result) =>
        res.send(result)
    )
})
module.exports = router;