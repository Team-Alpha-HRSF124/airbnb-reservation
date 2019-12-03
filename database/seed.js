const faker = require('faker');
const Models = require('../server/models.js');

function houses() {
  for (let i = 0; i < 100; i += 1) {
    const randomPrice = faker.random.number(200);
    const cleaningPrice = faker.random.number(50);
    const serviceFees = faker.random.number(50);

    Models.houses({
      price_per_night: randomPrice,
      cleaning_fees: cleaningPrice,
      service_fees: serviceFees,
    });
  }
}

function dates() {
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const checkIn = faker.date.between('2019-12-01', '2020-02-31');
      const checkOut = faker.date.between(checkIn, '2020-02-31');
      Models.dates({ room_id: i, reservation_start: checkIn, reservation_end: checkOut });
    }
  }
}

houses();
dates();
