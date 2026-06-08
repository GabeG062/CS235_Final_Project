// app/_layout.js
// Root layout for Expo Router.
// Wraps the whole app in SafeAreaProvider (required by expo-router v4)
// and sets up the Stack navigator.
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
