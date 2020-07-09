import React from 'react';
import PropTypes from 'prop-types';
import fetchSeasonData from './fetchSeasonData';

const DisplaySeasonData = ({ seasons, matches, team1, team2 }) =>
  seasons.map((season) => {
    return (
      <>
        <div>Season:-{season}</div>
        {fetchSeasonData(matches, season, team1, team2)}
      </>
    );
  });

DisplaySeasonData.propTypes = {
  matches: PropTypes.array.isRequired,
  seasons: PropTypes.array.isRequired,
};

export default DisplaySeasonData;
