const pool = require('../db');

class Trains {
  static getStationsFromDB() {
    return pool.query('SELECT * FROM trains ORDER BY id').then((results) => results.rows);
  }
}

module.exports = Trains;
