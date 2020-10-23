import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import RoomDetails from "../screens/RoomDetails";

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="RoomDetails"
        component={RoomDetails}
        options={{ headerStyle: { backgroundColor: "#3C896D" } }}
      />
    </AppStack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="HomeNavigator" component={HomeNavigator} />
      <AppDrawer.Screen name="About" component={About} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
