const mongoose = require('mongoose');
const express = require('express');
const Matches = require('../../models/Deliveries');
const router = express.Router();
const auth = require('../../middleware/auth');
const Deliveries = require('../../models/Deliveries');

//@route  get api/deliveries
//@desc   Load all the matches
//@access Private

router.get('/', async (req, res) => {
  try {
    const deliveries = await Deliveries.find({
      batsman: 'DA Warner',
    });
    return res.json(deliveries);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
