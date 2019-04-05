import React from 'react';
import Episode from './src/Episode';
import Season from './src/Season';
import TitleScreen from './src/TitleScreen';
import TvShowInfo from './src/TvShowInfo';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Episode: Episode,
    Season: Season,
    TitleScreen: TitleScreen,
    TvShowInfo: TvShowInfo,
  }, {
    initialRouteName: 'TitleScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#89D2DC',
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
