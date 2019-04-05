import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class TitleScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}
              onPress={() => navigate('TvShowInfo', {showName: 'The Office'})}>The Office</Text>
        <Text style={styles.instructions}
              onPress={() => navigate('TvShowInfo', {showName: 'Parks and Recreation'})}>Parks and Recreation</Text>
        <Text style={styles.instructions}
              onPress={() => navigate('TvShowInfo', {showName: 'The Good Place'})}>The Good PLace</Text>
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
