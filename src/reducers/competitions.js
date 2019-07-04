const initState = { loading: false, payload: [], error: {} };


export default function competitions(state = initState, action) {
  switch (action.type) {
    case "GET_COMPETITIONS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_COMPETITIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        payload: action.data
      };

    case "GET_COMPETITIONS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
