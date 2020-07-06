import {
  PLAYERS_LOADED,
  LOADING_ERROR,
  PLAYER1_BATTING_DATA,
  PLAYER2_BATTING_DATA,
  PLAYER1_BOWLING_DATA,
  PLAYER2_BOWLING_DATA,
} from '../actions/types';

const initialState = {
  batsman: [],
  bowler: [],
  loading: true,
  player1Batting: [],
  player2Batting: [],
  player1Bowling: [],
  player2Bowling: [],
};

export default function (state = { initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case PLAYERS_LOADED:
      return {
        ...state,
        loading: false,
        batsman: payload.batsman,
        bowler: payload.bowler,
      };
    case LOADING_ERROR:
      return {
        ...state,
        loading: false,
        batsman: [],
        bowler: [],
        player1Batting: [],
        player2Batting: [],
        player1Bowling: [],
        player2Bowling: [],
      };
    case PLAYER1_BATTING_DATA:
      return {
        ...state,
        loading: false,
        player1Batting: payload,
      };
    case PLAYER2_BATTING_DATA:
      return {
        ...state,
        loading: false,
        player2Batting: payload,
      };
    case PLAYER1_BOWLING_DATA:
      return {
        ...state,
        loading: false,
        player1Bowling: payload,
      };
    case PLAYER2_BOWLING_DATA:
      return {
        ...state,
        loading: false,
        player2Bowling: payload,
      };
    default:
      return state;
  }
}
