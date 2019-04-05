import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const apikey = '92e3aa84'
const dataRequest = 'http://www.omdbapi.com/?apikey=' + apikey + '&';

export default class TvShowInfo extends React.Component {
  state = {
    fetchString: '',
    title: '',
		seasons: 0,
	};

  componentDidMount() {
    this.processFetchString();
  }

  processFetchString = () => {
    const { navigation } = this.props;
    const title = navigation.getParam('tvTitle');
    let fetchString = 'http://www.omdbapi.com/?t=';

    title.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&apikey=92e3aa84'

    fetch(fetchString)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson: ', responseJson);
        this.setState({
          fetchString: fetchString,
          title: title,
          seasons: responseJson.totalSeasons,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { title, seasons } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{title}</Text>
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
