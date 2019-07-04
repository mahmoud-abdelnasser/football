import customAxios from "./base";

const getTeams = (id) => {
    return customAxios.get(`/competitions/${id}/teams`)
}

export const teamsService = {
  getTeams
};
