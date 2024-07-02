import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import TextField from "../components/TextField";
import Title from "../components/Title";
import Spacer from "../components/Spacer";
import Description from "../components/Description";
import TextButton from "./TextButton";
import Subtext from "../components/Subtext";
import { login, UserAuthResult } from "../api/UserServices";
import AsyncButton from "../components/AsyncButton";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  function emailAddressHandler(email: string) {
    setEmail(email);
  }

  function passwordHandler(password: string) {
    setPassword(password);
  }

  function forgotPasswordBtnPressHandler() {
    navigation.navigate("ForgotPassword");
  }

  function createAccountBtnHandler() {
    navigation.navigate("SignUp");
  }

  async function loginBtnHandler() {
    if (
      email !== undefined &&
      password !== undefined &&
      email !== "" &&
      password !== ""
    ) {
      const result: UserAuthResult = await login(email, password);
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
        <Spacer height={100} />
        <Title title="Hey there!" />
        <Spacer height={16} />
        <Description description="Welcome back, please use your phone number and password to log in." />
        <Spacer height={90} />
        <TextField placeHolder="Email Address" onChange={emailAddressHandler} />
        <TextField placeHolder="Password" onChange={passwordHandler} />
        <Spacer height={12} />
        <TextButton
          onPress={forgotPasswordBtnPressHandler}
          text="Forgot Password?"
          textStyle={{ alignSelf: "flex-end" }}
        />
        <Spacer height={90} />
        <AsyncButton text="Login" onPress={loginBtnHandler} />
        <Spacer height={24} />
        <Subtext subText="Don't have an account yet?" />
        <Spacer height={6} />
        <TextButton
          text="Create an account?"
          textStyle={{
            color: "#1FBEE7",
            fontWeight: "600",
            alignSelf: "center",
          }}
          onPress={createAccountBtnHandler}
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
