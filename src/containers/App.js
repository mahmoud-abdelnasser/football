import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../constants/routes.json";

import Layout from "../components/Layout";
import Leagues from "./Leagues";
import Alerts from "../components/Alerts.js";
import { alertActions } from "../actions/alert.js";
import LeaguesItem from "./LeaguesItem.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {alerts , removeAlert} = this.props
    return (
      <div className={"wrapper"}>
        {alerts && alerts.length > 0 && (
          <Alerts alerts={alerts} removeAlert={removeAlert} />
        )}
        <Switch>
          <PrivateRoute exact path={routes.LEAGUES} component={Leagues} />
          <PrivateRoute exact path={routes.LEAGUES_ID} component={LeaguesItem} />
          <Route
            exact
            path={routes.HOME}
            render={() => <Redirect to={routes.LEAGUES} />}
          />
        </Switch>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    alerts: state.alerts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeAlert: uuid => {
      dispatch(alertActions.remove(uuid));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
