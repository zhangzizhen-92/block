/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express');
const router = express.Router();
router.get('/index', (req, res) =>
    res.render('index', {
        title: 'first'
    })
)
module.exports = router;