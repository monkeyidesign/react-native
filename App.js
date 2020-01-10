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
  state = {
    msg: 'State message will be replaced by setState',
  };
  render() {
    return (
      <View style={myStyle.container}>
        <Text>Hello MONKEYiDESIGN apps</Text>
        <TextInput
          style={myStyle.inputStyle}
          onChangeText={text => this.setState({msg: text})}
        />
        <Button title="Send" color="blue" />
        <Text>{this.state.msg}</Text>
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
