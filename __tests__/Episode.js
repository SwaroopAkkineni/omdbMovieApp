import React from 'react';
import 'react-native';
import Episode from '../src/Episode';

import renderer from 'react-test-renderer';
const navigationMock = { state: { params: { episode: "TestEpisode", season: "TestSeason", showName: "TestShowName" } } };

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
  const tree = renderer.create(<Episode navigation={navigationMock}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
