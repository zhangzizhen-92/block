/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express'),
    router = express.Router();
router.get('/add', (req, res) =>
    res.render('add', {
        title: 'add'
    })
)
module.exports = router;