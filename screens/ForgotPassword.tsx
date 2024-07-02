import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import IconButton from "../components/IconButton";
import Spacer from "../components/Spacer";
import Subtext from "../components/Subtext";
import TextField from "../components/TextField";
import Title from "../components/Title";
import TextButton from "./TextButton";
import Description from "../components/Description";
import { forgotPassword, UserAuthResult } from "../api/UserServices";
import AsyncButton from "../components/AsyncButton";

export default function ForgotPassword({ navigation }: any) {
  const [email, setEmail] = useState<string>();
  function signIntoYourAccBtnHandler() {
    navigation.navigate("Login");
  }

  async function resetBtnHandler() {
    if (email !== undefined) {
      const result: UserAuthResult = await forgotPassword(email);
      console.log(result);
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
    } else {
      Alert.alert("Warning", "You cant pass empty email!", [
        {
          text: "Okey",
          style: "cancel",
        },
      ]);
    }
  }

  function backBtnHandler() {
    navigation.pop();
  }

  function emailAddressHandler(email: string) {
    setEmail(email);
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Spacer height={45} />
        <IconButton iconName="arrow-back" onPress={backBtnHandler} />
        <Spacer height={45} />
        <Title title={`Forgot Password`} />
        <Spacer height={30} />
        <Description description="Enter the email address linked to your account and you will receive an link via an Email" />
        <Spacer height={125} />
        <TextField placeHolder="Email Address" onChange={emailAddressHandler} />
        <Spacer height={150} />
        <AsyncButton text="Reset" onPress={resetBtnHandler} />
        <Spacer height={24} />
        <Subtext subText="Already have an account?" />
        <Spacer height={6} />
        <TextButton
          text="Sign into your account?"
          textStyle={{
            color: "#1FBEE7",
            fontWeight: "600",
            alignSelf: "center",
          }}
          onPress={signIntoYourAccBtnHandler}
        />
        <Spacer height={75} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
  },
});
