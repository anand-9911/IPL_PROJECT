import axios from 'axios';
import {
  PLAYERS_LOADED,
  LOADING_ERROR,
  PLAYER1_BATTING_DATA,
  PLAYER2_BATTING_DATA,
  PLAYER1_BOWLING_DATA,
  PLAYER2_BOWLING_DATA,
} from './types';

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

export const getPlayer1BattingData = (batsmanName) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/deliveries/batsman/${batsmanName}`);

    dispatch({
      type: PLAYER1_BATTING_DATA,
      payload: res.data,
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
export const getPlayer2BattingData = (batsmanName) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/deliveries/batsman/${batsmanName}`);

    dispatch({
      type: PLAYER2_BATTING_DATA,
      payload: res.data,
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

export const getPlayer1BowlingData = (bowlerName) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/deliveries/bowler/${bowlerName}`);

    dispatch({
      type: PLAYER1_BOWLING_DATA,
      payload: res.data,
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

export const getPlayer2BowlingData = (bowlerName) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/deliveries/bowler/${bowlerName}`);

    dispatch({
      type: PLAYER2_BOWLING_DATA,
      payload: res.data,
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
