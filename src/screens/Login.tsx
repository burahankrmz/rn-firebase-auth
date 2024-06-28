import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import TextField from "../components/TextField";
import Title from "../components/Title";
import Spacer from "../components/Spacer";
import Description from "../components/Description";
import TextButton from "./TextButton";
import RoundedButton from "../components/RoundedButton";
import Subtext from "../components/Subtext";

export default function Login({ navigation }: any) {
  function emailAddressHandler(email: string) {
    console.log(email);
  }

  function passwordHandler(password: string) {
    console.log(password);
  }

  function forgotPasswordBtnPressHandler() {
    navigation.navigate("ForgotPassword");
  }

  function createAccountBtnHandler() {
    navigation.navigate("SignUp");
  }

  function loginBtnHandler() {
    console.log("Login Function");
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
        <RoundedButton text="Login" onPress={loginBtnHandler}/>
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
