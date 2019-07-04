import { teamsService } from "../services/teams";
import { alertActions } from "./alert";

export const GET_TEAMS_REQUEST = "GET_TEAMS_REQUEST";
export const GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS";
export const GET_TEAMS_FAILED = "GET_TEAMS_FAILED";

/*---- GET ALL COMPETITIONS ------*/

const getTeamsStart = () => {
  return {
    type: GET_TEAMS_REQUEST
  };
};
const getTeamsSuccess = data => {
  return {
    type: GET_TEAMS_SUCCESS,
    data
  };
};

const getTeamsFailed = error =>{
  return {
    type: GET_TEAMS_FAILED,
    error
  }
}


function getTeams(id) {
  return dispatch => {
    dispatch(getTeamsStart());
    teamsService
      .getTeams(id)
      .then(response => {
        const data = response.data;
        dispatch(getTeamsSuccess(data));
        dispatch(alertActions.success("Teams loaded successfully"));
        setTimeout(() => {
          dispatch(alertActions.clear());
        }, 0.5e4);
      })
      .catch(error => {
        dispatch(getTeamsFailed(error));
        dispatch(alertActions.error(error));
        setTimeout(() => {
          dispatch(alertActions.clear());
        }, 0.5e4);
      });
  };
}
export const teamsActions = {
  getTeams
};
