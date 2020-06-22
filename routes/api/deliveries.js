const mongoose = require('mongoose');
const express = require('express');
const Matches = require('../../models/Deliveries');
const router = express.Router();
const auth = require('../../middleware/auth');
const Deliveries = require('../../models/Deliveries');

//@route  get api/deliveries/batsman/:playerName
//@desc   Load BatsMan Data
//@access Private

router.get('/batsman/:batsmanName', auth, async (req, res) => {
  try {
    const batsman = await Deliveries.find(
      {
        batsman: req.params.batsmanName,
      },
      {
        batsman: 1,
        batting_team: 1,
        batsman_runs: 1,
        dismissal_kind: 1,
      }
    );
    return res.json(batsman);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});
//@route  get api/deliveries/bowler/:bowlerName
//@desc   Load PlayerData
//@access Privateb

router.get('/bowler/:bowlerName', auth, async (req, res) => {
  try {
    const bowler = await Deliveries.find(
      {
        bowler: req.params.bowlerName,
      },
      {
        bowling_team: 1,
        bowler: 1,
        wide_runs: 1,
        penalty_runs: 1,
        bye_runs: 1,
        legbye_runs: 1,
        noball_runs: 1,
        batsman_runs: 1,
        dismissal_kind: 1,
      }
    );
    return res.json(bowler);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

//@route  get api/deliveries/players
//@desc   Load Player List
//@access Privateb

router.get('/players', auth, async (req, res) => {
  try {
    const players = await Deliveries.aggregate([
      {
        $group: {
          _id: 0,
          batsman: { $addToSet: '$batsman' },
          bowler: { $addToSet: '$bowler' },
        },
      },
    ]);
    return res.json(players);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
