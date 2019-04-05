import React from 'react';
import TitleScreen from './src/TitleScreen';
import TvShowInfo from './src/TvShowInfo';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    TitleScreen: TitleScreen,
    TvShowInfo: TvShowInfo,
  }, {
    initialRouteName: 'TitleScreen'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class HomeScreen extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
