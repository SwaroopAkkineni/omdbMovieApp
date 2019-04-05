import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import Season from './Season';

export default class TvShowInfo extends React.Component {
  state = {
    fetchString: '',
    showName: '',
		seasons: 0,
	};

  componentDidMount() {
    this.processFetchString();
  }

  processFetchString = () => {
    const { navigation } = this.props;
    const showName = navigation.getParam('showName');
    let fetchString = 'http://www.omdbapi.com/?t=';

    showName.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&apikey=92e3aa84'

    fetch(fetchString)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson: ', responseJson);
        this.setState({
          fetchString: fetchString,
          showName: showName,
          seasons: responseJson.totalSeasons,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { showName, seasons } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{showName}</Text>
        <Text style={styles.welcome}>Seasons: {seasons}</Text>
        <FlatList
          data={Array.from({length: seasons}, (v, k) => k+1)}
          renderItem={({ item }) => (
            <Text style={styles.instructions}
                  onPress={() => navigate('Season', { season: item, showName: showName})}>Season {item} </Text>
          )}
        />
      </View>
    )
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
