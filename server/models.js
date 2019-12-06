const mysql = require('mysql');
const Config = require('../config.js')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: Config.getPassword(),
  database: 'reservations',
});

connection.connect();

module.exports = {
  houses: (fakeData) => {
    const queryVal = [fakeData.price_per_night, fakeData.cleaning_fees, fakeData.service_fees, fakeData.average_rating, fakeData.number_of_reviews];
    const query = 'INSERT INTO reservation (price_per_night, cleaning_fees, service_fees, average_rating, number_of_reviews) VALUES(?, ?, ?, ?, ?)';
    connection.query(query, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  dates: (fakeData) => {
    const queryVal = [fakeData.room_id, fakeData.reservation_start, fakeData.reservation_end];
    const query = 'INSERT INTO details (room_id, reservation_start, reservation_end) VALUES(?, ?, ?)';
    connection.query(query, queryVal, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  },
  getPrice: (callback, id) => {
    connection.query(`SELECT * from reservation where id = ${id};`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getDates: (callback, id) => {
    connection.query(`SELECT * from details where room_id = ${id};`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};
