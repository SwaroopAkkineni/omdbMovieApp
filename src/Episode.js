import React, {Component} from 'react';
import {Dimensions, FlatList, Image, Platform, Text, TouchableOpacity, View} from 'react-native';
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
    const episode = navigation.state.params.episode;
    const showName = navigation.state.params.showName;
    const season = navigation.state.params.season;
    let fetchString = 'http://www.omdbapi.com/?t=';

    showName.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&season=' + season + '&episode=' + episode +'&apikey=92e3aa84'
    fetch(fetchString)
      .then((response) => response.json())
      .then((responseJson) => {
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
        <Image style={styles.PosterStyle} source={{uri: episode.Poster}}/>
      </View>
    );
  }
}
