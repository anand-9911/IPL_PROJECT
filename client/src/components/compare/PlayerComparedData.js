import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DisplayPlayerData from './DisplayPlayerData';

const PlayerComparedData = ({
  player1Batting,
  player1Bowling,
  player2Batting,
  player2Bowling,
}) => {
  console.log(player1Batting);

  // const batsman;
  // const batsman_runs;
  // const batting_team;
  // const dismissal_kind;
  // const match_id;

  // const computeBattingData = (playerBatting) => {
  //   const battingData = {
  //     totalRunsScored: 0,
  //     sixes: 0,
  //     fours: 0,
  //     singles: 0,
  //     double: 0,
  //     matchPlayed: 0,
  //   };
  // let totalRunsScored = 0;
  // if (player1Batting) {
  //   for (let i = 0; i < player1Batting.length; i++) {
  //     totalRunsScored += player1Batting[i].batsman_runs;
  //   }
  // }

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
