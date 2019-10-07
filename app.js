const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
//const layout = require('./views/layout');

const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const layout = require('./views/layout');

app.get('/', (req, res) => {
  res.send(layout('hello world.'));
});

module.exports = app;
