import { REGISTER_SUCCESS, AUTH_ERROR } from '../actions/types';

const initialState = {
  token: null,
  loading: true,
};

export default function (state = { initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
}
