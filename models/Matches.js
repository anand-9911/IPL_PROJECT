const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  dl_applied: {
    type: Number,
  },
  id: {
    type: Number,
  },
  season: {
    type: Number,
  },
  win_by_runs: {
    type: Number,
  },
  win_by_wickets: {
    type: Number,
  },
  player_of_match: {
    type: String,
  },
  result: {
    type: String,
  },
  result: {
    type: String,
  },
  team1: {
    type: String,
  },
  team2: {
    type: String,
  },
  toss_decision: {
    type: String,
  },
  toss_winner: {
    type: String,
  },
  umpire1: {
    type: String,
  },
  umpire2: {
    type: String,
  },
  umpire3: {
    type: String,
  },
  venue: {
    type: String,
  },
  winner: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = Matches = mongoose.model('matches', MatchSchema);
