import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Season from './Season';
const { height, width } = Dimensions.get('window');

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
        <Text style={styles.welcome}>{showName}</Text>
        <Text style={styles.welcome}>Season: {seasons}</Text>
        <FlatList
          data={Array.from({length: seasons}, (v, k) => k+1)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.todoItem}
                  onPress={() => navigate('Season', { season: item, showName: showName})}>
              <Text style={styles.instructions}>Season {item} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
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
  todoItem: {
    alignItems: 'center',
    height: height * 0.075,
    borderBottomWidth: 1.5,
    borderColor: '#101D42',
    backgroundColor: '#89D2DC',
    flexDirection: 'row',
  },
  welcome: {
    color: '#101D42',
    fontWeight: 'bold',
    marginTop: width * 0.1,
    fontSize: height * 0.03,
  },
  instructions: {
    color: '#101D42',
  },
});
