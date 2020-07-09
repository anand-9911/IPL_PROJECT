import React from 'react';
import PropTypes from 'prop-types';

const PlayerList = ({ players, onPlayerClick }) =>
  players.map((player) => {
    return (
      <ul>
        <li className='cursor' onClick={() => onPlayerClick(player)}>
          {player}
        </li>
      </ul>
    );
  });

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
