import { Alert, StyleSheet, View } from "react-native";
import auth from "@react-native-firebase/auth";
import React from "react";
import Title from "../components/Title";
import Spacer from "../components/Spacer";
import { signOut } from "../api/UserServices";
import AsyncButton from "../components/AsyncButton";

export default function Home({ navigation }: any) {
  const firebaseAuth = auth();

  async function signOutBtnHandler() {
    const result = await signOut();
    if (result.status == "success") {
      navigation.replace("Login");
    } else {
      Alert.alert("Warning", result.error, [
        {
          text: "Okey",
          style: "cancel",
        },
      ]);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title title={firebaseAuth.currentUser?.email ?? ""} />
      <Spacer height={12} />
      <AsyncButton text="Sign Out" onPress={signOutBtnHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
