import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';

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
            <Text style={styles.instructions}>Episode: {item.Episode} {item.Title} </Text>
          )}
        />
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
