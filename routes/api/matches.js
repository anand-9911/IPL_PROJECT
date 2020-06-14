const mongoose = require('mongoose');
const express = require('express');
const Matches = require('../../models/Matches');
const router = express.Router();
const auth = require('../../middleware/auth');

//@route  get api/matches
//@desc   Load all the matches
//@access Private

router.get('/', async (req, res) => {
  try {
    const matches = await Matches.find();
    return res.json(matches);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
