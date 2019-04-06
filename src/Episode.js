import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from '../StyleSheet';

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
        <View style={{flex: 2}}>
          <Text style={styles.Title}>{episode.Title}</Text>
        </View>
        <View style={{flex: 4}}>
          <Text style={styles.instructions}>Directed by: {episode.Director} </Text>
          <Text style={styles.instructions}>written by: {episode.Writer} </Text>
          <Text style={styles.instructions}>Rated: {episode.Rated} </Text>
          <Text style={styles.instructions}>Plot: {episode.Plot} </Text>
        </View>
        <View style={{flex: 5}}>
        </View>
      </View>
    );
  }
}
