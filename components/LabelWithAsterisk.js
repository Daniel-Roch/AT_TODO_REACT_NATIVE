import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function LabelWithAsterisk({ text, isInvalid }){
  return (
    <Text style={styles.label}>
      {text}
      {isInvalid ? <Text style={styles.asterisk}>*</Text> : <Text>*</Text>}
    </Text>
  )
}

const styles = StyleSheet.create({
  asterisk: {
    color: 'red',
  },
});
