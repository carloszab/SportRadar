import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Bullets } from "react-native-easy-content-loader";
import Spacer from "../components/Spacer";
import { ScrollView } from "react-native";
import { getTeamLogo } from "../utils/commonFunctions";
import { connect } from "react-redux";
import { fetchGames } from "../redux/actions";
import GameCard from "../components/GameCard";

const TeamDetail = ({ route, games, fetchGames }) => {
  const { team } = route.params;

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const filteredGames = games.filter(
    (game) => game.home_team.id === team.id || game.visitor_team.id === team.id
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: getTeamLogo(team.abbreviation) }}
          style={styles.logo}
        />
        <Text style={styles.teamName}>{team.full_name}</Text>
        <Text style={styles.conference}>{team.conference} Conference</Text>
        <Text style={styles.conference}>{team.division} Division</Text>
        <Spacer size={10} />
        <Text style={styles.teamName}>Games this Season</Text>
        {games.length > 0 ? (
          filteredGames.map((game) => <GameCard game={game} key={game.id} />)
        ) : (
          <Bullets active listSize={15} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  conference: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  games: state.games,
});

export default connect(mapStateToProps, { fetchGames })(TeamDetail);
