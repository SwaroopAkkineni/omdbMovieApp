import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const apikey = '92e3aa84'
const dataRequest = 'http://www.omdbapi.com/?apikey=' + apikey + '&';

export default class TitleScreen extends React.Component {

  getMoviesFromApiAsync = () => {
    fetch('http://www.omdbapi.com/?t=The+Office&apikey=92e3aa84')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson: ', responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    this.getMoviesFromApiAsync();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>The Office</Text>
        <Text style={styles.instructions}>Parks and Recreation</Text>
        <Text style={styles.instructions}>The Good PLace</Text>
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
