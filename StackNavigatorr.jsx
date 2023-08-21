import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import WorkOutScreen from "./screens/WorkOutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";

const StackNavigatorr = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Workout" component={WorkOutScreen} options={{headerShown:false}} />
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}} />
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatorr;

const styles = StyleSheet.create({});
