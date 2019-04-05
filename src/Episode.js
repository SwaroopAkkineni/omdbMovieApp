import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';

export default class Episode extends React.Component {
  state = {
    episode: '',
  };

  componentDidMount() {
    this.getEpisode();
  }


  getEpisode = () => {
    const { navigation } = this.props;
    const episode = navigation.getParam('episode');
    const showName = navigation.getParam('showName');
    const season = navigation.getParam('season');
    let fetchString = 'http://www.omdbapi.com/?t=';

    showName.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&season=' + season + '&episode=' + episode +'&apikey=92e3aa84'
    console.log('fetchString: ', fetchString);
    fetch(fetchString)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson: ', responseJson);
        this.setState({
          episode: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    const {episode} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{episode.Title}</Text>
        <Text style={styles.instructions}>Director {episode.Director} </Text>
        <Text style={styles.instructions}>written by: {episode.Writer} </Text>
        <Text style={styles.instructions}>Rating: {episode.Writer} </Text>
        <Text style={styles.instructions}>Plot: {episode.Plot} </Text>
        <Image style={{width: 100, height: 100}} source={{uri: episode.Poster}}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
