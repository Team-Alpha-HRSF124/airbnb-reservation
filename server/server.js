const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers.js');

// app.get('/', (req, res) => res.send('Hello World!'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/:id', express.static(path.join(__dirname, '../dist')));

app.get('/houses/:id', (req, res) => {
  controllers.getHouse(req, res);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
