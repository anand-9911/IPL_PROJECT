import React from 'react';
import PropTypes from 'prop-types';

const PlayerList = ({ players }) =>
  players.map((player) => {
    return (
      <ul>
        <li>{player}</li>
      </ul>
    );
  });

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
