import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import theme from "./theme";
import PickupLineGeneratorScreen from "./screens/PickupLineGeneratorScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RandomPickupLineScreen from "./screens/RandomPickupLineScreen";
import pickupLines from './pickupLines.json'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme.colors}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Generator") {
                iconName = "ios-heart";
              } else if (route.name === "Favorites") {
                iconName = "ios-star";
              } else if (route.name === "Random") {
                iconName = "ios-shuffle";
              } else if (route.name === "Settings") {
                iconName = "ios-settings";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: theme.colors.primary,
            inactiveTintColor: theme.colors.gray,
            style: {
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: theme.colors.white,
              height: 60,
            },
            labelStyle: {
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 5,
            },
            tabStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Tab.Screen
            name="Generator"
            component={() => <PickupLineGeneratorScreen lines={pickupLines} />}
          />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Random" component={RandomPickupLineScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
