import React from 'react';
import 'react-native';
import MainScreen from '../src/MainScreen';

import renderer from 'react-test-renderer';
 const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
  const tree = renderer.create(<MainScreen navigation={navigation}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
