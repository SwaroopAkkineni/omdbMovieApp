import React from 'react';
import TitleScreen from './src/TitleScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return <TitleScreen />;
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen
  }
);

export default createAppContainer(AppNavigator);
