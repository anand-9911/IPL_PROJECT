import React from 'react';
import PropTypes from 'prop-types';

const TeamList = ({ teams, onTeamClick }) =>
  teams.map((team) => {
    return (
      <ul>
        <li className='cursor' onClick={() => onTeamClick(team)}>
          {team}
        </li>
      </ul>
    );
  });

TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default TeamList;
