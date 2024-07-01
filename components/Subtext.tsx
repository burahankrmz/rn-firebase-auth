import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

type SubtextProps = {
  subText: string;
  style?: TextStyle;
};

export default function Subtext({subText, style}: SubtextProps) {
  return <Text style={[styles.text, style]}>{subText}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#757575',
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: 14,
  },
});
