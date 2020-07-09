import React, { useState } from 'react';
import { connect } from 'react-redux';
import TeamComparedData from './TeamCompareData';
import PropTypes from 'prop-types';
import TeamList from './TeamList';
import { setAlert } from '../../actions/alert';
import Spinner from '../layout/Spinner';
import Scroll from '../layout/Scroll';
import _ from 'lodash';

const Team1VsTeam2 = ({ matches, setAlert }) => {
  const [searchField1, setSearchField1] = useState('');
  const [searchField2, setSearchField2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const matchesDetails = [];

  if (matches === undefined) return <Spinner />;
  else {
    matchesDetails.push(...matches);
  }
  const teamArray = [];
  matchesDetails.map((match) => teamArray.push(match.team1));
  const uniqTeam = _.uniq(teamArray);

  const filteredTeam1 = uniqTeam.filter((team) => {
    return team.toLowerCase().includes(searchField1.toLowerCase());
  });
  const filteredTeam2 = uniqTeam.filter((team) => {
    return team.toLowerCase().includes(searchField2.toLowerCase());
  });
  const relevantMatches = [];
  matchesDetails.map((match) => {
    if (
      (match.team1 === searchField1 && match.team2 === searchField2) ||
      (match.team1 === searchField2 && match.team2 === searchField1)
    ) {
      relevantMatches.push(match);
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchField1 === searchField2) {
      setAlert('Comparasion cannot be between same players', 'danger');
    } else if (
      !uniqTeam.includes(searchField1) ||
      !uniqTeam.includes(searchField2)
    ) {
      setAlert(
        'Player is not present in the list, check spelling/select correct player ',
        'danger'
      );
    } else createProfile();
  };

  const createProfile = () => {
    setSubmitted(false);
    setTimeout(() => {
      setSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1 id='h1Team'>Compare Teams</h1>
        <div class='row'>
          <div class='col-sm'>
            <input
              type='text'
              class='form-control'
              id='searchTeam'
              name='search-player1'
              required
              placeholder='Search Team-1'
              value={searchField1}
              onChange={(e) => setSearchField1(e.target.value)}
            />
            <Scroll>
              <TeamList teams={filteredTeam1} />
            </Scroll>
          </div>
          <h3>Vs</h3>
          <div class='col-sm'>
            <input
              type='text'
              class='form-control'
              id='searchTeam'
              name='search-player2'
              required
              placeholder='Search Team-2'
              value={searchField2}
              onChange={(e) => setSearchField2(e.target.value)}
            />
            <Scroll>
              <TeamList teams={filteredTeam2} />
            </Scroll>
          </div>
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
      {submitted && (
        <TeamComparedData
          matches={relevantMatches}
          team1={searchField1}
          team2={searchField2}
        />
      )}
    </>
  );
};

Team1VsTeam2.propTypes = {
  matches: PropTypes.array.isRequired,
  getAllMatches: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  matches: state.matchReducer.matches,
});

export default connect(mapStateToProps, { setAlert })(Team1VsTeam2);
