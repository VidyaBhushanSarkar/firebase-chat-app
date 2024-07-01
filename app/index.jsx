import { StatusBar } from "expo-status-bar";
import { Text, View, ActivityIndicator } from "react-native";
import React from "react";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-white">
      <ActivityIndicator size="large" color="gray" />
      <StatusBar style="auto" />
    </View>
  );
}
