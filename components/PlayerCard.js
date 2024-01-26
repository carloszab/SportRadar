import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const PlayerCard = ({ player, navigation }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.avatarContainer}>
        <FontAwesomeIcon icon={faUser} size={50} />
      </View>
      <Text
        style={styles.name}
      >{`${player.first_name} ${player.last_name}`}</Text>
      <Text style={styles.position}>{player.position}</Text>
      <Text style={styles.team}>{`Team: ${player.team.full_name}`}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "45%",
    margin: 5,
    borderRadius: 10,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  position: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  team: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 8,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlayerCard;
