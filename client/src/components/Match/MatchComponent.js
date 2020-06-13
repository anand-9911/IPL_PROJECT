import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMatches } from '../../actions/matches';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import _ from 'lodash';

const MatchComponent = ({ getAllMatches, matches }) => {
  useEffect(() => {
    getAllMatches();
  }, [getAllMatches]);

  const mm = [];

  if (matches === undefined) return <Spinner />;
  else {
    mm.push(...matches);
  }
  const propNotRequired = [
    'date',
    'id',
    'dl_applied',
    'result',
    'toss_decision',
    'toss_winner',
    'umpire1',
    'umpire2',
    'umpire3',
    'win_by_runs',
    'win_by_wickets',
    '_id',
  ];
  const array = [];
  const mainData = [];
  mm.forEach((item, index) => {
    array[index] = _.omit(mm[index], propNotRequired);
    mainData[index] = Object.values(array[index]);
  });

  const columns = [
    'Season',
    'City',
    'Team-1',
    'Team-2',
    'Winner',
    'Player of the Match',
    'Venue',
  ];

  const data = [...mainData];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <>
      <MUIDataTable
        title={'Matches List'}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

MatchComponent.propTypes = {
  getAllMatches: PropTypes.func.isRequired,
  matches: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  matches: state.matchReducer.matches,
});

export default connect(mapStateToProps, { getAllMatches })(MatchComponent);
