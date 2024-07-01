import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import RoundedButton from "../components/RoundedButton";
import Spacer from "../components/Spacer";
import Subtext from "../components/Subtext";
import TextField from "../components/TextField";
import Title from "../components/Title";
import TextButton from "./TextButton";
import IconButton from "../components/IconButton";

export default function SignUp({ navigation }: any) {
  function backBtnHandler() {
    navigation.pop();
  }

  function emailAddressHandler(email: string) {
    console.log(email);
  }

  function passwordHandler(password: string) {
    console.log(password);
  }

  function firsNameHandler(firstName: string) {
    console.log(firstName);
  }

  function lastNameHandler(lastName: string) {
    console.log(lastName);
  }

  function signIntoYourAccBtnHandler() {
    navigation.navigate("Login");
  }

  function signUpBtnHandler() {
    console.log("Sign Up Function");
    navigation.replace("Home");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Spacer height={45} />
        <IconButton iconName="arrow-back" onPress={backBtnHandler} />
        <Spacer height={45} />
        <Title title={`Create your\naccount`} />
        <Spacer height={45} />
        <TextField placeHolder="First Name" onChange={firsNameHandler} />
        <TextField placeHolder="Last Name" onChange={lastNameHandler} />
        <TextField placeHolder="Email Address" onChange={emailAddressHandler} />
        <TextField placeHolder="Password" onChange={passwordHandler} />
        <Spacer height={40} />
        <RoundedButton text="Next" onPress={signUpBtnHandler} />
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
