import { StyleSheet, TextInput } from "react-native";
import React from "react";

type TextFieldProps = {
  placeHolder: string;
  onChange: (text: string) => void;
};

export default function TextField({ placeHolder, onChange }: TextFieldProps) {
  return (
    <TextInput
      style={styles.textField}
      placeholder={placeHolder}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  textField: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderColor: "#F1F1F1",
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 2,
  },
});
