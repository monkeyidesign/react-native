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
import ListData from './src/components/api-request/ListData';

export default class App extends Component {
  state = {
    email: '',
    passowrd: '',
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.header}>
          <Header>HTTP REQUEST</Header>
        </View>
        <View style={styles.container}>
          <ListData/>
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
});
