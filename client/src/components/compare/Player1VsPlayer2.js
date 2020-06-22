import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPlayers } from '../../actions/deliveries';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import _ from 'lodash';
const Player1VsPlayer2 = ({ loadPlayers, delivery }) => {
  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  if (delivery === undefined) return <Spinner />;
  else {
    const { batsman, bowler } = delivery;
    if (batsman && bowler) {
      const combinedPlayers = [...batsman, ...bowler];
      const players = _.uniq(combinedPlayers);
      console.log(players);
    }
  }

  return <>PLayer</>;
};

Player1VsPlayer2.propTypes = {
  loadPlayers: PropTypes.func.isRequired,
  delivery: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  delivery: state.deliveryReducer,
});

export default connect(mapStateToProps, { loadPlayers })(Player1VsPlayer2);
