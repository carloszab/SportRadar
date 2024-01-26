import { FlatList } from "react-native";
import React from "react";
import GameCard from "./GameCard";

const GameList = ({ games }) => {
  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <GameCard game={item} />}
    />
  );
};

export default GameList;
