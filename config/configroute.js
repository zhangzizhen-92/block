/**
 * Created by Administrator on 2017/6/10.
 */
const index = require("../router/index.js"),
    found = require("../router/found.js"),
    content = require("../router/content.js"),
    select = require("../router/select.js"),
    add = require("../router/add.js"),
    some = require("../router/data.js");


module.exports = (app) => {
    app.get('/index', index);
    app.post('/found', found);

    app.get('/content', content);
    app.post('/select', select);

    app.get('/add', add);
    app.post('/some', some)
}