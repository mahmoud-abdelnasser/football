import { leaguesService } from "../services/leagues";
import { alertActions } from "./alert";

export const GET_COMPETITIONS_REQUEST = "GET_COMPETITIONS_REQUEST";
export const GET_COMPETITIONS_SUCCESS = "GET_COMPETITIONS_SUCCESS";
export const GET_COMPETITIONS_FAILED = "GET_COMPETITIONS_FAILED";

export const GET_LEAGUES_ITEM_REQUEST = "GET_LEAGUES_ITEM_REQUEST";
export const GET_LEAGUES_ITEM_SUCCESS = "GET_LEAGUES_ITEM_SUCCESS";
export const GET_LEAGUES_ITEM_FAILED = "GET_LEAGUES_ITEM_FAILED";


/*---- GET ALL COMPETITIONS ------*/

const getCompetitionsStart = () => {
  return {
    type: GET_COMPETITIONS_REQUEST
  };
};
const getCompetitionsSuccess = data => {
  return {
    type: GET_COMPETITIONS_SUCCESS,
    data
  };
};

const getCompetitionsFailed = error =>{
  return {
    type: GET_COMPETITIONS_FAILED,
    error
  }
}


function getCompetitions(data) {
  return dispatch => {
    dispatch(getCompetitionsStart());
    leaguesService
      .getCompetitions(data)
      .then(response => {
        const competitions = response.data;
        dispatch(getCompetitionsSuccess(competitions));
        dispatch(alertActions.success("Competitions loaded successfully"));
        setTimeout(() => {
          dispatch(alertActions.clear());
        }, 0.5e4);
      })
      .catch(error => {
        dispatch(getCompetitionsFailed(error));
        dispatch(alertActions.error(error));
        setTimeout(() => {
          dispatch(alertActions.clear());
        }, 0.5e4);
      });
  };
}

/*---- GET LEAGUE ITEM BY ID ------*/

const getLeaguesItemStart = () => {
  return {
    type: GET_LEAGUES_ITEM_REQUEST
  };
};
const getLeaguesItemSuccess = data => {
  return {
    type: GET_LEAGUES_ITEM_SUCCESS,
    data
  };
};

const getLeaguesItemFailed = error =>{
  return {
    type: GET_LEAGUES_ITEM_FAILED,
    error
  }
}

function getLeaguesItem(id){
  return dispatch => {
    dispatch(getLeaguesItemStart());
    leaguesService
      .getLeaguesItem(id)
      .then(response => {
        const data = response.data;
        dispatch(getLeaguesItemSuccess(data));
        dispatch(alertActions.success("League loaded successfully"));
        setTimeout(() => {
          dispatch(alertActions.clear());
        }, 0.5e4);
      })
      .catch(error => {
        dispatch(getLeaguesItemFailed(error));
        // dispatch(alertActions.error(""));
        
      });
  };
}



export const leaguesActions = {
  getCompetitions,
  getLeaguesItem
};
