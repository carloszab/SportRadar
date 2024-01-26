const initialState = {
  teams: [],
  games: [],
  players: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TEAMS_SUCCESS":
      return { ...state, teams: action.payload };
    case "FETCH_PLAYERS_SUCCESS":
      return { ...state, players: action.payload };
    case "FETCH_GAMES_SUCCESS":
      return { ...state, games: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
