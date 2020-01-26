/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Header>Home Screen</Header>
        </View>
      </View>
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
  }
});
