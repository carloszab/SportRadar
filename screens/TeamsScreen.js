import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { fetchTeams } from "../redux/actions";
import TeamList from "../components/TeamList";
import TeamDetail from "./TeamDetail";

const Stack = createNativeStackNavigator();

const TeamsScreen = ({ teams, fetchTeams, navigation }) => {
  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="TeamsList" options={{ title: "Teams" }} >
          {(props) => (
            <TeamList {...props} teams={teams} navigation={navigation} />
          )}
        </Stack.Screen>
        <Stack.Screen name="TeamDetail" component={TeamDetail} options={{ title: ""}} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingHorizontal: 16,
  },
  searchBarInputContainer: {
    backgroundColor: "#e0e0e0",
  },
});

const mapStateToProps = (state) => ({
  teams: state.teams,
});

export default connect(mapStateToProps, { fetchTeams })(TeamsScreen);
