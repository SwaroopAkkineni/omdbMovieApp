import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Season extends React.Component {
  render() {
    const { navigation } = this.props;
    const showName = navigation.getParam('showName');
    const season = navigation.getParam('season');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{showName}</Text>
        <Text style={styles.instructions}>Season {season} </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
