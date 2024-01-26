import { Dimensions, Platform } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Spacer from "../components/Spacer";
import { connect } from "react-redux";
import { fetchGames } from "../redux/actions";
import GameList from "../components/GameList";

const HomeScreen = ({ games, fetchGames, navigation }) => {
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <SafeAreaView className="bg-white py-5 mb-5 p-3">
      <GameList games={games} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  games: state.games,
});

export default connect(mapStateToProps, { fetchGames })(HomeScreen);
