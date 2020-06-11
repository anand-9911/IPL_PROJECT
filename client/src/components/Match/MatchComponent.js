import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMatches } from '../../actions/matches';
import PropTypes from 'prop-types';

const MatchComponent = ({ getAllMatches }) => {
  useEffect(() => {
    getAllMatches();
  }, [getAllMatches]);

  return <>MatchComponent Loaded</>;
};

MatchComponent.propTypes = {
  getAllMatches: PropTypes.func.isRequired,
};

export default connect(null, { getAllMatches })(MatchComponent);
