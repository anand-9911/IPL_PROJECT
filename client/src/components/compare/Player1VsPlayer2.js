import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  loadPlayers,
  getPlayer1BattingData,
  getPlayer2BattingData,
  getPlayer1BowlingData,
  getPlayer2BowlingData,
} from '../../actions/deliveries';
import PropTypes from 'prop-types';
import Scroll from '../layout/Scroll';
import Spinner from '../layout/Spinner';
import PlayerComparedData from './PlayerComparedData';
import _ from 'lodash';
import PlayerList from './PlayerList';
const Player1VsPlayer2 = ({
  loadPlayers,
  batsman,
  bowlers,
  getPlayer1BattingData,
  getPlayer2BattingData,
  getPlayer1BowlingData,
  getPlayer2BowlingData,
  player1Batting,
  player2Batting,
  player1Bowling,
  player2Bowling,
}) => {
  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  const [searchField1, setSearchField1] = useState('');
  const [searchField2, setSearchField2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const combinedPlayers = [];
  if (batsman === undefined && bowlers === undefined) return <Spinner />;
  else {
    combinedPlayers.push(...batsman);
    combinedPlayers.push(...bowlers);
  }
  const players = _.uniq(combinedPlayers);

  const filteredPlayers1 = players.filter((player) => {
    return player.toLowerCase().includes(searchField1.toLowerCase());
  });
  const filteredPlayers2 = players.filter((player) => {
    return player.toLowerCase().includes(searchField2.toLowerCase());
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(searchField1, searchField2);
  };

  const createProfile = (player1, player2) => {
    setSubmitted(false);
    getPlayer1BattingData(player1);
    getPlayer1BowlingData(player1);
    getPlayer2BattingData(player2);
    getPlayer2BowlingData(player2);

    setTimeout(() => {
      setSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1 id='h1Team'>Compare Players</h1>
        <div class='row'>
          <div class='col-sm'>
            <input
              type='text'
              class='form-control'
              id='searchTeam'
              name='search-player1'
              required
              placeholder='Search Player-1'
              value={searchField1}
              onChange={(e) => setSearchField1(e.target.value)}
            />
            <Scroll>
              <PlayerList players={filteredPlayers1} />
            </Scroll>
          </div>
          <h3>Vs</h3>
          <div class='col-sm'>
            <input
              type='text'
              class='form-control'
              id='searchTeam'
              name='search-player2'
              required
              placeholder='Search Player-2'
              value={searchField2}
              onChange={(e) => setSearchField2(e.target.value)}
            />
            <Scroll>
              <PlayerList players={filteredPlayers2} />
            </Scroll>
          </div>
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
      {submitted && (
        <PlayerComparedData
          player1Batting={player1Batting}
          player1Bowling={player1Bowling}
          player2Batting={player2Batting}
          player2Bowling={player2Bowling}
        />
      )}
    </>
  );
};

Player1VsPlayer2.propTypes = {
  loadPlayers: PropTypes.func.isRequired,
  delivery: PropTypes.array.isRequired,
  getPlayer1BattingData: PropTypes.func.isRequired,
  getPlayer2BattingData: PropTypes.func.isRequired,
  getPlayer1BowlingData: PropTypes.func.isRequired,
  getPlayer2BowlingData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  batsman: state.deliveryReducer.batsman,
  bowlers: state.deliveryReducer.bowler,
  player1Batting: state.deliveryReducer.player1Batting,
  player1Bowling: state.deliveryReducer.player1Bowling,
  player2Batting: state.deliveryReducer.player2Batting,
  player2Bowling: state.deliveryReducer.player2Bowling,
});

export default connect(mapStateToProps, {
  loadPlayers,
  getPlayer1BattingData,
  getPlayer2BattingData,
  getPlayer1BowlingData,
  getPlayer2BowlingData,
})(Player1VsPlayer2);
