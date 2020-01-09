/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={myStyle.container}>
        <Text>Hello MONKEYiDESIGN apps</Text>
        <TextInput style={myStyle.inputStyle} />
        <Button title="Send" color="blue" />
      </View>
    );
  }
}

const myStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
  },
};
export default App;
