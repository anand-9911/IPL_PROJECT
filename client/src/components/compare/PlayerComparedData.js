import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DisplayPlayerData from './DisplayPlayerData';

const PlayerComparedData = ({
  player1Batting,
  player1Bowling,
  player2Batting,
  player2Bowling,
}) => {
  return (
    <>
      <div class='row'>
        <div class='col-sm'>
          <DisplayPlayerData batsman={player1Batting} bowler={player1Bowling} />
        </div>
        <div class='col-sm'>
          <DisplayPlayerData batsman={player2Batting} bowler={player2Bowling} />
        </div>
      </div>
    </>
  );
};

PlayerComparedData.propTypes = {
  player1Batting: PropTypes.array.isRequired,
  player2Batting: PropTypes.array.isRequired,
  player1Bowling: PropTypes.array.isRequired,
  player2Bowling: PropTypes.array.isRequired,
};

export default PlayerComparedData;
