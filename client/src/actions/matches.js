import axios from 'axios';
import { LOAD_MATCHES, MATCH_ERROR } from './types';

//Loading  all Matches information
export const getAllMatches = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/matches');
    dispatch({
      type: LOAD_MATCHES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: MATCH_ERROR,
      payload: {
        mgs: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
