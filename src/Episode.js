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
        <Text style={[styles.Title, styles.FontColor]}>{episode.Title}</Text>
        <Text style={[styles.EpisodeInformation, styles.FontColor]}>
          <Text style={{fontWeight: 'bold'}}>Directed by: </Text>
          <Text>{episode.Director}</Text>
        </Text>
        <Text style={[styles.EpisodeInformation, styles.FontColor]}>
          <Text style={{fontWeight: 'bold'}}>Written by: </Text>
          <Text>{episode.Writer}</Text>
        </Text>
        <Text style={[styles.EpisodeInformation, styles.FontColor]}>
          <Text style={{fontWeight: 'bold'}}>Rated: </Text>
          <Text>{episode.Rated}</Text>
        </Text>
        <Text style={[styles.EpisodeInformation, styles.FontColor]}>
          <Text style={{fontWeight: 'bold'}}>Plot: </Text>
          <Text>{episode.Plot}</Text>
        </Text>
      </View>
    );
  }
}
