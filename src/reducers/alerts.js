import moment from 'moment';

export default function alerts(state = [], action) {
  switch (action.type) {
    case 'ALERT_SUCCESS':
      return [
        ...state,
        {
          uuid: moment().format('x'),
          type: 'alert-success',
          icon: 'shield-check',
          message: action.message,
          details: action.details
        }
      ];
    case 'ALERT_WARNING':
      return [
        ...state,
        {
          uuid: moment().format('x'),
          type: 'alert-warning',
          icon: 'exclamation-circle',
          message: action.message,
          details: action.details
        }
      ];
    case 'ALERT_ERROR':
      return [
        ...state,
        {
          uuid: moment().format('x'),
          type: 'alert-danger',
          icon: 'exclamation-triangle',
          message: action.message,
          details: action.details
        }
      ];
    case 'REMOVE_ALERT':
      return state.filter(a => a.uuid !== action.uuid);

    case 'ALERT_CLEAR' :
      return [];
    default:
      return state;
  }
}
