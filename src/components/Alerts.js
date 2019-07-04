// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Alerts extends Component {
  render() {
    const { alerts, removeAlert } = this.props;
    if (!alerts || !alerts.length) {
      return null;
    }
    return (
      <div className="app-alert col-lg-4 col-sm-8 col-xs-10">
        {alerts.map(alert => {
          return (
            <div
              key={alert.uuid}
              className={`alert ${alert.type}`}   
            >
              
              <div className="alert-icon">
                {/* <FontAwesomeIcon icon={['fa', alert.icon]} size="2x"/> */}
              </div>
              <div className="alert-content">
                {alert.message && (
                  <h6 className="alert-heading">{alert.message}</h6>
                )}
                {alert.details &&
                  alert.details.length > 0 &&
                  alert.details.map(detail => <p>{detail.info}</p>)}
              </div>
              <div className="close-icon" onClick={event => removeAlert(alert.uuid)}>
                {/* <FontAwesomeIcon icon={['fa', 'window-close']} /> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Alerts;