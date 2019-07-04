// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Leagues  from '../components/pages/leagues/Leagues';
import { leaguesActions } from '../actions/leagues';

function mapStateToProps(state) {
  return {
    competitions: state.competitions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(leaguesActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leagues);