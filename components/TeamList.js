import React from "react";
import { FlatList } from "react-native";
import TeamCard from "./TeamCard";

const TeamList = ({ teams, navigation }) => {
  return (
    <FlatList
      data={teams ? teams : []}
      renderItem={({ item }) =>
        item && <TeamCard key={item.id} team={item} navigation={navigation} />
      }
      keyExtractor={(item) => (item ? String(item.id) : null)}
    />
  );
};

export default TeamList;
