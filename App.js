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

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.header}>
          <Header>Home Screen</Header>
        </View>
        <View style={styles.container}>
          <View style={styles.button2_bg}>
            <Button onPress={() => console.log('button pressed!')}>
              New Text
            </Button>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.button1_bg}>
            <Button onPress={() => alert('test')}>New Text 2</Button>
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
    backgroundColor: '#8bc34a',
  },
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  button1_bg: {
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button2_bg: {
    backgroundColor: '#40c4ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
