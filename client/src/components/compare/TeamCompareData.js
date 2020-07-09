import React from 'react';
import DisplayTeamData from './DisplayTeamData';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const TeamCompareData = ({ matches, team1, team2 }) => {
  return (
    <>
      <div>
        {matches.length > 0 ? (
          <DisplayTeamData matches={matches} team1={team1} team2={team2} />
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

TeamCompareData.propTypes = {
  matches: PropTypes.array.isRequired,
  team1: PropTypes.string.isRequired,
  team2: PropTypes.string.isRequired,
};

export default TeamCompareData;
