import _ from 'lodash';

export const alertActions = {
  success,
  warn,
  error,
  remove,
  clear
};

function success(data) {
  return {
    type: 'ALERT_SUCCESS',
    message: _.get(data, 'message', data),
    details: _.get(data, 'details')
  };
}


function warn(data) {
  return {
    type: 'ALERT_WARNING',
    message: _.get(data, 'message', data),
    details: _.get(data, 'details')
  };
}


function error(data) {
  return {
    type: 'ALERT_ERROR',
    message: _.get(data, 'message', data),
    details: _.get(data, 'details')
  };
}

function clear() {
  return { type: 'ALERT_CLEAR' };
}

function remove(uuid) {
  return { type: 'REMOVE_ALERT', uuid };
}
