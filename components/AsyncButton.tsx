import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";

type RoundedButtonProps = {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => Promise<void>;
};

export default function AsyncButton({
  text,
  containerStyle,
  textStyle,
  onPress,
}: RoundedButtonProps) {
  const [asyncStatus, setAsyncStatus] = useState("idle");

  async function btnHandler() {
    setAsyncStatus("loading");
    await onPress();
    setAsyncStatus("idle");
  }

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={btnHandler}
    >
      {asyncStatus === "loading" ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7C53",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
