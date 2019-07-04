const initState = { loading: false, payload: {}, error: {} };


export default function leaguesItem(state = initState, action) {
  switch (action.type) {
    case "GET_LEAGUES_ITEM_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_LEAGUES_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        payload: action.data
      };

    case "GET_LEAGUES_ITEM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
