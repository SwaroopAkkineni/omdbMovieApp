import React from 'react';
import Episode from './src/Episode';
import Season from './src/Season';
import MainScreen from './src/MainScreen';
import TelevisionSeries from './src/TelevisionSeries';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Episode: Episode,
    Season: Season,
    MainScreen: MainScreen,
    TelevisionSeries: TelevisionSeries,
  }, {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#89D2DC',
        borderBottomWidth: 0,
      },
      headerTintColor: '#101D42',
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class HomeScreen extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
