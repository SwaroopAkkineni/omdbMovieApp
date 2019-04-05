import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import Episode from './Episode';
const { height, width } = Dimensions.get('window');

export default class Season extends React.Component {
  state = {
    episodes: [],
	};

  componentDidMount() {
    this.getEpisodes();
  }

  getEpisodes = () => {
    const { navigation } = this.props;
    const showName = navigation.getParam('showName');
    const season = navigation.getParam('season');
    let fetchString = 'http://www.omdbapi.com/?t=';

    showName.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&season=' + season + '&apikey=92e3aa84'
    console.log('fetchString: ', fetchString);
    fetch(fetchString)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson: ', responseJson);
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
    const showName = navigation.getParam('showName');
    const season = navigation.getParam('season');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{showName}</Text>
        <Text style={styles.instructions}>Season {season} </Text>
        <FlatList
          data={episodes}
          renderItem={({ item }) => (
            <Text style={styles.instructions}
                  onPress={() => navigation.navigate('Episode', { episode: item.Episode, season: season, showName: showName})}>Episode: {item.Episode} {item.Title} </Text>
          )}
        />
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
