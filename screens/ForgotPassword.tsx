import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import IconButton from "../components/IconButton";
import RoundedButton from "../components/RoundedButton";
import Spacer from "../components/Spacer";
import Subtext from "../components/Subtext";
import TextField from "../components/TextField";
import Title from "../components/Title";
import TextButton from "./TextButton";
import Description from "../components/Description";

export default function ForgotPassword({ navigation }: any) {
  function signIntoYourAccBtnHandler() {
    navigation.navigate("Login");
  }

  function resetBtnHandler() {
    console.log("Reset Function");
    navigation.replace("Login");
  }

  function backBtnHandler() {
    navigation.pop();
  }

  function emailAddressHandler(email: string) {
    console.log(email);
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
        <RoundedButton text="Reset" onPress={resetBtnHandler} />
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
