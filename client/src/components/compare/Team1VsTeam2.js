import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPlayers } from '../../actions/deliveries';
import PropTypes from 'prop-types';

const Team1VsTeam2 = ({ loadPlayers }) => {
  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);
  return (
    <>
      <div>{loadPlayers && <div>{loadPlayers.batsman}</div>}</div>
    </>
  );
};

Team1VsTeam2.propTypes = {
  loadPlayers: PropTypes.func.isRequired,
};

export default connect(null, { loadPlayers })(Team1VsTeam2);
