import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";

const Stack = createStackNavigator();

const testNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default testNavigation;
