import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Spacer from "../components/Spacer";
import Subtext from "../components/Subtext";
import TextField from "../components/TextField";
import Title from "../components/Title";
import TextButton from "./TextButton";
import IconButton from "../components/IconButton";
import { signUp, UserAuthResult } from "../api/UserServices";
import AsyncButton from "../components/AsyncButton";

export default function SignUp({ navigation }: any) {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function backBtnHandler() {
    navigation.pop();
  }

  function emailAddressHandler(email: string) {
    setEmail(email);
  }

  function passwordHandler(password: string) {
    setPassword(password);
  }

  function firsNameHandler(firstName: string) {
    setFirstName(firstName);
  }

  function lastNameHandler(lastName: string) {
    setLastName(lastName);
  }

  function signIntoYourAccBtnHandler() {
    navigation.navigate("Login");
  }

  async function signUpBtnHandler() {
    if (
      firstName !== undefined &&
      lastName !== undefined &&
      email !== undefined &&
      password !== undefined
    ) {
      const result: UserAuthResult = await signUp(email, password);
      console.log(result);
      if (result.status == "success") {
        navigation.replace("Home");
      } else {
        Alert.alert("Warning", result.error, [
          {
            text: "Okey",
            style: "cancel",
          },
        ]);
      }
    } else {
      Alert.alert("Warning", "You cant pass empty information", [
        {
          text: "Okey",
          style: "cancel",
        },
      ]);
    }
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
        <AsyncButton text="Next" onPress={signUpBtnHandler} />
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
