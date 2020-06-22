import { PLAYERS_LOADED, LOADING_ERROR } from '../actions/types';

const initialState = {
  batsman: [],
  bowler: [],
  loading: true,
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
      };
    default:
      return state;
  }
}
