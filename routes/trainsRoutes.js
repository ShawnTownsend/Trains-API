const express = require('express');
const trainsController = require('../controllers/trainsController');
const router = express.Router();

router.get('/', trainsController.getStations);

router.all('*', (req, res) => {
  res.send('This stations route does not exist');
});

module.exports = router;
