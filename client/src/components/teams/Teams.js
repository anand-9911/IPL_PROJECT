import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllMatches } from '../../actions/matches';
import Spinner from '../layout/Spinner';
import _ from 'lodash';
import TeamItem from './TeamItem';

const Teams = ({ getAllMatches, matches }) => {
  useEffect(() => {
    getAllMatches();
  }, [getAllMatches]);

  const [searchField, setSearchField] = useState('');

  const matchesDetails = [];

  if (matches === undefined) return <Spinner />;
  else {
    matchesDetails.push(...matches);
  }
  const teamArray = [];
  matchesDetails.map((match) => teamArray.push(match.team1));
  const uniqTeam = _.uniq(teamArray);

  const removeTeams = [
    'Delhi Capitals',
    'Rising Pune Supergiants',
    'Pune Warriors',
  ];
  _.remove(uniqTeam, (n) => {
    return n === removeTeams[0] || n === removeTeams[1] || n === removeTeams[2];
  });

  const filteredTeams = uniqTeam.filter((team) => {
    return team.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <h1 id='h1Team'>List of Teams Participated</h1>
      <input
        type='text'
        class='form-control'
        id='searchTeam'
        name='search'
        required
        placeholder='Search...'
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <div className='cards'>
        <TeamItem teams={filteredTeams} />
      </div>
    </>
  );
};

Teams.propTypes = {
  getAllMatches: PropTypes.func.isRequired,
  matches: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  matches: state.matchReducer.matches,
});
export default connect(mapStateToProps, { getAllMatches })(Teams);
