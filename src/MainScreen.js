import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from '../StyleSheet';

export default class MainScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={[styles.Title, styles.FontColor]}>Click a Show!</Text>
        <TouchableOpacity style={styles.BulletIte}
                          onPress={() => navigate('TelevisionSeries', {showName: 'Parks and Recreation'})}>
          <Text style={styles.FontColor}>Parks and Recreation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BulletIte}
                          onPress={() => navigate('TelevisionSeries', {showName: 'The Good Place'})}>
          <Text style={styles.FontColor}>The Good PLace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BulletIte}
                          onPress={() => navigate('TelevisionSeries', {showName: 'The Office'})}>
          <Text style={styles.FontColor}>The Office</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
