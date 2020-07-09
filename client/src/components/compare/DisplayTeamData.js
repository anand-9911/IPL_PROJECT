import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DisplaySeasonData from './DisplaySeasonData';
import { matchesTied, matchesWon, tossWon } from './fetchSeasonData';

const DisplayTeamData = ({ matches, team1, team2 }) => {
  const seasons = [];
  matches.map((match) => seasons.push(match.season));
  const uniqSeason = _.uniq(seasons).sort(function (a, b) {
    return a - b;
  });

  return (
    <>
      <h2>
        Below are the match statistics between {team1} and {team2}:
      </h2>
      <div>
        <div className='card'>
          <div className='card-body'>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Overall
            </div>
            <table>
              <tr>
                <th>Total Matches Played:</th>
                <td>{matches.length}</td>
              </tr>
              <tr>
                <th> Total Matches Won by {team1}:</th>
                <td> {matchesWon(team1, matches)}</td>
              </tr>
              <tr>
                <th> Total Matches Won by {team2}:</th>
                <td> {matchesWon(team2, matches)}</td>
              </tr>
              <tr>
                <th> Total Matches Tied:</th>
                <td> {matchesTied(matches)}</td>
              </tr>
              <tr>
                <th> Total Tosses Won by {team1}:</th>
                <td> {tossWon(team1, matches)}</td>
              </tr>
              <tr>
                <th> Total Tosses Won by {team2}:</th>
                <td>{tossWon(team2, matches)}</td>
              </tr>
            </table>
          </div>
        </div>

        <DisplaySeasonData
          seasons={uniqSeason}
          matches={matches}
          team1={team1}
          team2={team2}
        />
      </div>
    </>
  );
};

DisplayTeamData.propTypes = {
  matches: PropTypes.array.isRequired,
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
};

export default DisplayTeamData;
