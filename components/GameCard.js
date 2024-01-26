import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Divider } from "react-native-elements";
import { getTeamLogo } from "../utils/commonFunctions";

const GameCard = ({ game }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.teamsContainer}>
        <View style={styles.team}>
          <Image
            source={{ uri: getTeamLogo(game.home_team.abbreviation) }}
            style={styles.logo}
          />
          <Text style={styles.franchiseName}>{game.home_team.city}</Text>
          <Text style={styles.teamName} numberOfLines={1} ellipsizeMode="tail">
            {game.home_team.name}
          </Text>
          <Text style={styles.teamScore}>{game.home_team_score}</Text>
        </View>
        <View style={styles.vsContainer}>
          <Text style={styles.vsText}>vs</Text>
        </View>
        <View style={styles.team}>
          <Image
            source={{ uri: getTeamLogo(game.visitor_team.abbreviation) }}
            style={styles.logo}
          />
          <Text style={styles.franchiseName}>{game.visitor_team.city}</Text>
          <Text style={styles.teamName} numberOfLines={1} ellipsizeMode="tail">
            {game.visitor_team.name}
          </Text>
          <Text style={styles.teamScore}>{game.visitor_team_score}</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{`Date: ${new Date(
          game.date
        ).toLocaleDateString()}`}</Text>
        <Text style={styles.detailsText}>{`Time: ${game.time}`}</Text>
        <Text style={styles.detailsText}>{`Period: ${game.period}`}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  divider: {
    marginVertical: 8,
    backgroundColor: "#ccc",
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  team: {
    flex: 1,
    alignItems: "center",
  },
  franchiseName: {
    fontSize: 14,
    color: "#555",
  },
  teamName: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  teamScore: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007BFF",
  },
  vsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  vsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  detailsText: {
    fontSize: 14,
    color: "#555",
  },
});

export default GameCard;
