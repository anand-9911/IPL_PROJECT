import React from 'react';
import PropTypes from 'prop-types';
import fetchSeasonData from './fetchSeasonData';

const DisplaySeasonData = ({ seasons, matches, team1, team2 }) =>
  seasons.map((season) => {
    return (
      <>
        <div className='card'>
          <div className='card-body'>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Season:-{season}
            </div>
            {fetchSeasonData(matches, season, team1, team2)}
          </div>
        </div>
      </>
    );
  });

DisplaySeasonData.propTypes = {
  matches: PropTypes.array.isRequired,
  seasons: PropTypes.array.isRequired,
};

export default DisplaySeasonData;
