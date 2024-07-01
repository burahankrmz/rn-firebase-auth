import { StyleSheet, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
import React from "react";

export default function Home() {
  const firebaseAuth = auth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{firebaseAuth.currentUser?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
