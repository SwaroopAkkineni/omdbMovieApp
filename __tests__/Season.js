import React from 'react';
import 'react-native';
import Season from '../src/Season';

import renderer from 'react-test-renderer';
const navigationMock = { state: { params: { season: "TestSeason", showName: "TestShow" } } };

const mockResponse = (status, statusText, response) => {
        return new Response(response, {
            status: status,
            statusText: statusText,
            headers: {
                'Content-type': 'application/json'
            }
        });
    };

test('renders correctly', () => {
  fetch = jest.fn(() => new Promise(resolve => resolve()));
  const tree = renderer.create(<Season navigation={navigationMock}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
