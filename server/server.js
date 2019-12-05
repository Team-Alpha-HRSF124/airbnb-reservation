const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers.js');

const request = require('supertest');

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

// Test to check server responses using request supertest
request(app)
  .get('/houses/1')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err) => {
    if (err) {
      throw err;
    }
  });
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
