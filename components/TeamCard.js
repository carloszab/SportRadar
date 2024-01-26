import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getTeamLogo } from "../utils/commonFunctions";

const TeamCard = ({ team, navigation }) => {
  const handlePress = () => {
    navigation.navigate("TeamDetail", { team: team });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: getTeamLogo(team.abbreviation) }}
            style={styles.logo}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.teamName}>{team.full_name}</Text>
          <Text style={styles.conference}>{team.conference}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftContainer: {
    marginRight: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  conference: {
    fontSize: 14,
    color: "#666",
  },
});

export default TeamCard;
