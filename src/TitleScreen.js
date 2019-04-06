import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const { height, width } = Dimensions.get('window');

export default class TitleScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity style={styles.todoItem}
                          onPress={() => navigate('TelevisionSeries', {showName: 'Parks and Recreation'})}>
          <Text style={styles.instructions}>Parks and Recreation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.todoItem}
                          onPress={() => navigate('TelevisionSeries', {showName: 'The Good Place'})}>
          <Text style={styles.instructions}>The Good PLace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.todoItem}
                          onPress={() => navigate('TelevisionSeries', {showName: 'The Office'})}>
          <Text style={styles.instructions}>The Office</Text>
        </TouchableOpacity>
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
