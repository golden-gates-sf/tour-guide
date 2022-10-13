import React from 'react';
import SearchBar from './SearchBar';
import getLocalStorageMock from './localStorageMock';
import { render, screen, fireEvent } from '@testing-library/react';

const localStorageMock = getLocalStorageMock();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

test('get request data from local storage', async () => {
  const testData = 'Ibiza';
  localStorageMock.setItem('request', testData);
  render(<SearchBar />);
  const input = await screen.findByTestId<HTMLInputElement>('searchbar-input');
  expect(input.value).toEqual(testData);
});

test('set request data to local storage', async () => {
  const testData = 'Ibiza';
  const { unmount } = render(<SearchBar />);
  const input = await screen.findByTestId<HTMLInputElement>('searchbar-input');
  fireEvent.change(input, { target: { value: testData } });
  unmount();
  const localStorageData = localStorageMock.getItem('request');
  expect(localStorageData).toEqual(testData);
});
