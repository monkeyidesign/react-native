/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import {Button} from './src/components/form/Button';
import {Input} from './src/components/form/Input';

export default class App extends Component {
  state = {
    email: '',
    passowrd: '',
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.header}>
          <Header>Home Screen</Header>
        </View>
        <View style={styles.container}>
          <Input placeholder="Input your name" label="Fullname" />
        </View>
        <View style={styles.container}>
          <Input
            placeholder="Input your email"
            label="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View style={styles.container}>
          <Input
            placeholder="Input your password"
            label="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.container}>
          <View style={styles.button1_bg}>
            <Button onPress={() => alert('test')}>Login</Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: '#40c4ff',
  },
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  button1_bg: {
    backgroundColor: '#40c4ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center'
  },
});
