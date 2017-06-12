/**
 * Created by Administrator on 2017/6/11.
 */
const express = require('express'),
    router = express.Router();
router.get('/content', (req, res) =>
    res.render('content', {
        title: 'content'
    })
)
module.exports = router;