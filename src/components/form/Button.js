import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, children, bgcolor}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, {backgroundColor: bgcolor}]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    borderRadius: 8,
    padding: 16,
  },
});

export {Button};
