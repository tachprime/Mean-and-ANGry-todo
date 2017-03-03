//jshint esversion:6
const express = require('express');
const app = express();
const logger = require('morgan');
const port = 3400;

app.use(logger('dev'));
app.use(express.static(__dirname + "/app"));

app.listen(port, () => {
    console.log("listening on http://localhost:%s", port);
});
