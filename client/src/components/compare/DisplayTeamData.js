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
        <p>Total Matches Played:{matches.length}</p>
        <p>
          Total Matches Won by {team1}:{matchesWon(team1, matches)}
        </p>
        <p>
          Total Matches Won by {team2}:{matchesWon(team2, matches)}
        </p>
        <p>Total Matches Tied:{matchesTied(matches)}</p>
        <p>
          Total Tosses Won by {team1}:{tossWon(team1, matches)}
        </p>
        <p>
          Total Tosses Won by {team2}:{tossWon(team2, matches)}
        </p>
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
