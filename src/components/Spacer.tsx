import { View, Text } from "react-native";
import React from "react";

type SpacerProps = {
  height?: number;
  width?: number;
};

export default function Spacer({ height, width }: SpacerProps) {
  return <View style={{ height: height, width: width }}></View>;
}
