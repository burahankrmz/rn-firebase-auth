import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type TextButtonProps = {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
};

export default function TextButton({
  text,
  containerStyle,
  textStyle,
  onPress,
}: TextButtonProps) {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FF7D54',
    fontWeight: '600',
  },
});
