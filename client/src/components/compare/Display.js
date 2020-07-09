import React from 'react';
import PropTypes from 'prop-types';
import { matchesTied, matchesWon, tossWon } from './fetchSeasonData';

const Display = ({ match, team1, team2 }) => {
  return (
    <div>
      <p>Matches Played:{match.length}</p>
      <p>
        Matches Won by {team1}:{matchesWon(team1, match)}
      </p>
      <p>
        Matches Won by {team2}:{matchesWon(team2, match)}
      </p>
      <p>Matches Tied:{matchesTied(match)}</p>
      <p>
        Tosses Won by {team1}:{tossWon(team1, match)}
      </p>
      <p>
        Tosses Won by {team2}:{tossWon(team2, match)}
      </p>
    </div>
  );
};

Display.propTypes = {
  match: PropTypes.array.isRequired,
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
};

export default Display;
