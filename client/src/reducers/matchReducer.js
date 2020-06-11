import { MATCH_ERROR, LOAD_MATCHES } from '../actions/types';

const initialState = {
  loading: true,
  matches: [],
  match: null,
  error: [],
};

export default function (state = { initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MATCHES:
      return {
        ...state,
        matches: payload,
        loading: false,
      };
    case MATCH_ERROR:
      return {
        ...state,
        loading: false,
        matches: [],
        error: payload,
      };
    default:
      return state;
  }
}
