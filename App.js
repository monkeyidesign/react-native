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
    msgValue: '',
    changeMsg: [],
  };
  onChangeMsg = () => {
    //this.setState({changeMsg: this.state.msgValue});
    var newChangeMsg = this.state.msgValue;
    var arr = this.state.changeMsg;

    //Add a new item to an array:
    arr.push(newChangeMsg);

    this.setState({changeMsg: arr, msgValue: ''});
  };
  renderNewMsgArrayValue = () => {
    //creates a new array using map()
    return this.state.changeMsg.map(k => {
      return <Text key={k}>{k}</Text>;
    });
  };
  render() {
    return (
      <View style={myStyle.container}>
        <Text>Hello MONKEYiDESIGN apps</Text>
        <TextInput
          style={myStyle.inputStyle}
          onChangeText={text => this.setState({msgValue: text})}
          value={this.state.msgValue}
        />
        <Button title="Send" color="blue" onPress={this.onChangeMsg} />
        {this.renderNewMsgArrayValue()}
        {/*<Text>MSG: {this.state.msgValue}</Text>*/}
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
