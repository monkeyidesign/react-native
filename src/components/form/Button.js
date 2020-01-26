import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonBody}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBody: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export {Button};
