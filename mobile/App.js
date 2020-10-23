import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes/index";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0a8754" translucent={false} style="light" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
