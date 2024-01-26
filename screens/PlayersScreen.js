import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchPlayers } from "../redux/actions";
import PlayerList from "../components/PlayerList";
import { SearchBar } from "react-native-elements";

const PlayersScreen = ({ players, fetchPlayers, navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    fetchPlayers(searchQuery);
  };

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search players..."
        onChangeText={(query) => setSearchQuery(query)}
        onSubmitEditing={handleSearch}
        value={searchQuery}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        searchIcon={{ size: 24 }}
        clearIcon={{ size: 24 }}
        platform="android"
      />

      <PlayerList players={players} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchContainer: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  input: {
    color: "#000",
  },
});

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps, { fetchPlayers })(PlayersScreen);
