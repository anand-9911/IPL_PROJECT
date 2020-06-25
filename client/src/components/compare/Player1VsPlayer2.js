import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPlayers } from '../../actions/deliveries';
import PropTypes from 'prop-types';
import Scroll from '../layout/Scroll';
import Spinner from '../layout/Spinner';
import _ from 'lodash';
import PlayerItem from './PlayerItem';
const Player1VsPlayer2 = ({ loadPlayers, batsman, bowlers }) => {
  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  const [searchField1, setSearchField1] = useState('');
  const [searchField2, setSearchField2] = useState('');

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

  return (
    <>
      <form>
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
              <PlayerItem players={filteredPlayers1} />
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
              <PlayerItem players={filteredPlayers2} />
            </Scroll>
          </div>
        </div>
      </form>
    </>
  );
};

Player1VsPlayer2.propTypes = {
  loadPlayers: PropTypes.func.isRequired,
  delivery: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  batsman: state.deliveryReducer.batsman,
  bowlers: state.deliveryReducer.bowler,
});

export default connect(mapStateToProps, { loadPlayers })(Player1VsPlayer2);
