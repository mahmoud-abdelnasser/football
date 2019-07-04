// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LeaguesItem  from '../components/pages/leagues/LeaguesItem';
import { leaguesActions } from '../actions/leagues';
import { teamsActions } from '../actions/teams';

function mapStateToProps(state) {
  return {
    leaguesItem: state.leaguesItem,
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...leaguesActions , ...teamsActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaguesItem);