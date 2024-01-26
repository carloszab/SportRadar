import React from "react";
import { View, FlatList } from "react-native";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ players, navigation }) => {
  return (
    <View>
      <FlatList
        data={players}
        keyExtractor={(player) => player.id.toString()}
        renderItem={({ item }) => (
          <PlayerCard player={item} navigation={navigation} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default PlayerList;
