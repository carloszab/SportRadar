import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TeamsScreen from "./screens/TeamsScreen";
import PlayersScreen from "./screens/PlayersScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faBasketball,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Games"
          screenOptions={() => ({
            tabBarActiveTintColor: "#F88158",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Players"
            component={PlayersScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faUser} color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Games"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faBasketball}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Teams"
            component={TeamsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faCity} color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
