export const getTeamLogo = (abbreviation) => {
  if (!abbreviation) {
    return (
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/" +
      "nba" +
      ".png&h=200&w=200"
    );
  } else if (abbreviation === "NOP") {
    return (
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/" +
      "NO" +
      ".png&h=200&w=200"
    );
  } else if (abbreviation === "UTA") {
    return (
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/" +
      "UTAH" +
      ".png&h=200&w=200"
    );
  } else {
    return (
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/" +
      abbreviation +
      ".png&h=200&w=200"
    );
  }
};
