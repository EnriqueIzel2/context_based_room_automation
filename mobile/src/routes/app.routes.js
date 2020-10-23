import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import About from "../screens/About";

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="About" component={About} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
