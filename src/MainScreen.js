import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from '../StyleSheet';

export default class MainScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const tvShows = ['Parks and Recreation', 'The Good Place', 'The Office'];
    return (
      <View style={styles.container}>
        <Text style={[styles.Title, styles.FontColor]}>Click a Show!</Text>
        <FlatList
          data={tvShows}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.BulletItem} onPress={() => navigate('TelevisionSeries', {showName: item})}>
              <Text style={styles.FontColor}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
