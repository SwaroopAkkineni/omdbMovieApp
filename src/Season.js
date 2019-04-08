import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import Episode from './Episode';
import styles from '../StyleSheet';

export default class Season extends React.Component {
  state = {
    episodes: [],
	};

  componentDidMount() {
    this.getEpisodes();
  }

  getEpisodes = () => {
    const { navigation } = this.props;
    const showName = navigation.state.params.showName;
    const season = navigation.state.params.season;
    let fetchString = 'http://www.omdbapi.com/?t=';

    showName.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&season=' + season + '&apikey=92e3aa84'
    fetch(fetchString)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          episodes: responseJson.Episodes,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { episodes } = this.state;
    const { navigation } = this.props;
    const showName = navigation.state.params.showName;
    const season = navigation.state.params.season;
    return (
      <View style={styles.container}>
        <Text style={[styles.Title, styles.FontColor]}>{showName}: Season {season} </Text>
        <FlatList
          data={episodes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.BulletItem}
                              onPress={() => navigation.navigate('Episode', { episode: item.Episode, season: season, showName: showName})}>
              <Text style={styles.FontColor}>Episode: {item.Episode}: {item.Title} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
