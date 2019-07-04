import customAxios from "./base";
import _ from "lodash";

const getCompetitions = () => {
  return customAxios.get("/competitions");
};

const getLeaguesItem = (id) => {
    return customAxios.get(`/competitions/${id}`)
}

export const leaguesService = {
  getCompetitions,
  getLeaguesItem
};
