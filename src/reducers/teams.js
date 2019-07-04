const initState = { loading: false, payload: [], error: {} };

export default function teams(state = initState, action) {
  switch (action.type) {
    case "GET_TEAMS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_TEAMS_SUCCESS":
      return {
        ...state,
        loading: false,
        payload: action.data
      };
    case "GET_TEAMS_FAILED":
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
