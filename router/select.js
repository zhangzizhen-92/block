/**
 * Created by Administrator on 2017/6/11.
 */
let express = require("express"),
    connection = require('../config/configSql.js'),
    router = express.Router();
router.post('/select', (req, res) => {
    let id = req.body.id,
        sql = "select * from newTitle where id=" + id;
    connection.query(sql, (err, result) => {

        if (err) throw err;
        if (result.length > 0) {

            res.send(result)
        }
    })
})
module.exports = router;