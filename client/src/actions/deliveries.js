import axios from 'axios';
import { PLAYERS_LOADED, LOADING_ERROR } from './types';

export const loadPlayers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/deliveries/players');
    // console.log(res.data[0].batsman);
    dispatch({
      type: PLAYERS_LOADED,
      payload: res.data[0],
    });
  } catch (error) {
    dispatch({
      type: LOADING_ERROR,
      payload: {
        mgs: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
