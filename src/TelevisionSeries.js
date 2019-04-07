import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from '../StyleSheet';
import Season from './Season';

export default class TelevisionSeries extends React.Component {
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
    const showName = navigation.state.params.showName;
    let fetchString = 'http://www.omdbapi.com/?t=';

    showName.split(' ').forEach(function(str) {
      fetchString += str + '+'
    });
    fetchString += '&apikey=92e3aa84'
    console.log(fetchString);
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
        <Text style={[styles.Title, styles.FontColor]}>{showName}</Text>
        <FlatList
          data={Array.from({length: seasons}, (v, k) => k+1)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.BulletItem}
                  onPress={() => navigate('Season', { season: item, showName: showName})}>
              <Text style={styles.FontColor}>Season {item} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
