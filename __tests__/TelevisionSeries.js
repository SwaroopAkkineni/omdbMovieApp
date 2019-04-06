import React from 'react';
import 'react-native';
import TelevisionSeries from '../src/TelevisionSeries';

import renderer from 'react-test-renderer';
const navigationMock = { state: { params: { showName: "The Office" } } };

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
  const tree = renderer.create(<TelevisionSeries navigation={navigationMock}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
