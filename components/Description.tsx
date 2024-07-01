import {StyleSheet, Text, View, TextStyle} from 'react-native';
import React from 'react';

type DescriptionPros = {
  description: string;
  style?: TextStyle;
};

export default function Description({description, style}: DescriptionPros) {
  return <Text style={[styles.description, style]}>{description}</Text>;
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: '#B7BAC9',
  },
});
