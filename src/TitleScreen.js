import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from '../StyleSheet';

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
