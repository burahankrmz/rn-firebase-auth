import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

type TitleProps = {
  title: string;
  style?: TextStyle;
};

export default function Title({title, style}: TitleProps) {
  return <Text style={[styles.title, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
  },
});
