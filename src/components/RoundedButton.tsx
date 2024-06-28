import {
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

type RoundedButtonProps = {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  asyncStatus?: any;
  onPress?: () => void;
};

export default function RoundedButton({
  text,
  containerStyle,
  textStyle,
  asyncStatus,
  onPress,
}: RoundedButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {asyncStatus === 'loading' ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF7C53',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
