import React from 'react';
import 'react-native';
import TitleScreen from '../src/TitleScreen';

import renderer from 'react-test-renderer';
 const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
  const tree = renderer.create(<TitleScreen navigation={navigation}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
