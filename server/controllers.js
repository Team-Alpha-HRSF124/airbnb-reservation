const models = require('./models.js');

module.exports = {
  getHouse: (req, res) => {
    models.getPrice((err, data) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send(data);
      }
    });
  },
};
