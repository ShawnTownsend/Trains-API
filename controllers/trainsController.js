const Trains = require('../models/trainsModel');

const getStations = async (req, res) => {
  const stations = await Trains.getStationsFromDB();
  console.log(stations);
  res.status(200).json(stations);
};

module.exports = { getStations };
