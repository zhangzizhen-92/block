let express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    ejs = require('ejs');
app.use(bodyparser.urlencoded({ 'extended': false }));
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use(express.static('./static'));
require(__dirname + '/config/configroute.js')(app);
app.listen(8090, () =>
    console.log('listen 8090...')
)