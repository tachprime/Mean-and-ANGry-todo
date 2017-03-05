//jshint esversion:6
const express = require('express');
const app = express();
const logger = require('morgan');
const port = 3400;
const bodyParser = require('body-parser');
const api = require('./api/route/apiRoute');

app.use(logger('common'));
app.use(express.static(__dirname + "/app"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api', api);

app.listen(port, () => {
    console.log("listening on http://localhost:%s", port);
});
