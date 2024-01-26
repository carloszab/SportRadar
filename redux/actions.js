export const fetchTeams = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://www.balldontlie.io/api/v1/teams");
      const data = await response.json();

      dispatch({ type: "FETCH_TEAMS_SUCCESS", payload: data.data });
    } catch (error) {
      dispatch({ type: "FETCH_TEAMS_FAILURE", payload: error.message });
    }
  };
};

export const fetchPlayers = (searchQuery = "") => {
  return async (dispatch) => {
    try {
      const apiUrl = searchQuery
        ? `https://www.balldontlie.io/api/v1/players?search=${searchQuery}`
        : "https://www.balldontlie.io/api/v1/players";

      const response = await fetch(apiUrl);
      const data = await response.json();

      dispatch({ type: "FETCH_PLAYERS_SUCCESS", payload: data.data });
    } catch (error) {
      dispatch({ type: "FETCH_PLAYERS_FAILURE", payload: error.message });
    }
  };
};

export const fetchGames = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://www.balldontlie.io/api/v1/games?per_page=60&seasons[]=2023"
      );
      const data = await response.json();

      dispatch({ type: "FETCH_GAMES_SUCCESS", payload: data.data });
    } catch (error) {
      dispatch({ type: "FETCH_GAMES_FAILURE", payload: error.message });
    }
  };
};
