import React from 'react';
import PropTypes from 'prop-types';

const DisplayPlayerData = ({ batsman, bowler }) => {
  console.log(batsman);
  console.log(bowler);
  return <div>Player Data to be displayed here</div>;
};

DisplayPlayerData.propTypes = {
  batsman: PropTypes.array.isRequired,
  bowler: PropTypes.array.isRequired,
};

export default DisplayPlayerData;
