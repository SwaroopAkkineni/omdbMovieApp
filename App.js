import React from 'react';
import Episode from './src/Episode';
import Season from './src/Season';
import TitleScreen from './src/TitleScreen';
import TelevisionSeries from './src/TelevisionSeries';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Episode: Episode,
    Season: Season,
    TitleScreen: TitleScreen,
    TelevisionSeries: TelevisionSeries,
  }, {
    initialRouteName: 'TitleScreen',
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
