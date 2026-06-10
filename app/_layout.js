// app/_layout.js
// Root layout for Expo Router.
// Created by: Gabe Gross, with code from Claude AI
// Created on: 06/08/2026
// Last edited on: 06/10/2026
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/*
        headerShown: false — every game screen draws its own header
        so we hide the default one from the Stack navigator.
      */}
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
