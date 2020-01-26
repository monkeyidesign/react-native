import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botton: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    padding: 20,
  },
});

export {Button};
