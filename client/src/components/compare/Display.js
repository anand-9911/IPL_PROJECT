import React from 'react';
import PropTypes from 'prop-types';
import { matchesTied, matchesWon, tossWon } from './fetchSeasonData';

const Display = ({ match, team1, team2 }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Matches Played:</th>
          <td>{match.length}</td>
        </tr>
        <tr>
          <th> Matches Won by {team1}:</th>
          <td> {matchesWon(team1, match)}</td>
        </tr>
        <tr>
          <th> Matches Won by {team2}:</th>
          <td> {matchesWon(team2, match)}</td>
        </tr>
        <tr>
          <th> Matches Tied:</th>
          <td> {matchesTied(match)}</td>
        </tr>
        <tr>
          <th> Tosses Won by {team1}:</th>
          <td> {tossWon(team1, match)}</td>
        </tr>
        <tr>
          <th> Tosses Won by {team2}:</th>
          <td>{tossWon(team2, match)}</td>
        </tr>
      </table>
    </div>
  );
};

Display.propTypes = {
  match: PropTypes.array.isRequired,
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
};

export default Display;
