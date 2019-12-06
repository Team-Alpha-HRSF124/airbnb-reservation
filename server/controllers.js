const models = require('./models.js');

module.exports = {
  getHouse: (req, res) => {
    const array = req.path.split('/');
    models.getPrice((err, data) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send(data);
      }
    }, array[array.length - 1]);
  },
  getDates: (req, res) => {
    const array = req.path.split('/');
    models.getDates((err, data) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send(data);
      }
    }, array[array.length - 1]);
  },
};
