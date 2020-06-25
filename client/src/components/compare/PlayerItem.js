import React from 'react';
import PropTypes from 'prop-types';

const PlayerItem = ({ players }) =>
  players.map((player) => {
    return (
      <ul>
        <li>{player}</li>
      </ul>
    );
  });

PlayerItem.propTypes = {};

export default PlayerItem;
