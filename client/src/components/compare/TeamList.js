import React from 'react';
import PropTypes from 'prop-types';

const TeamList = ({ teams }) =>
  teams.map((team) => {
    return (
      <ul>
        <li>{team}</li>
      </ul>
    );
  });

TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default TeamList;
