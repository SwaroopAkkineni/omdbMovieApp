import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
const { height, width } = Dimensions.get('window');

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
    textAlign: 'left',
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    backgroundColor: '#89D2DC',
  },
  welcome: {
    color: '#101D42',
    marginTop: width * 0.1,
    fontSize: height * 0.03,
  },
  instructions: {
    color: '#101D42',
  },
});
