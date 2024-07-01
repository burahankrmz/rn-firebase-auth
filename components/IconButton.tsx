import { StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

type IconButtonProps = {
  iconName: any;
  onPress: () => void;
};

export default function IconButton({ iconName, onPress }: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={iconName} size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
