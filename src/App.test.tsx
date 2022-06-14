import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Life is stange/i);
  expect(linkElement).toBeInTheDocument();
});

test('render 3 list items', () => {
  render(<App />);
  //const listitems = screen.getAllByRole("listitem");
  const listITem = screen.getAllByTestId("listmemeber");
  expect(listITem).toHaveLength(3);
  //
});

test('Render to find a sum', () => {
  render(<App />);
  const sum = screen.getByTitle("sum")
  expect(sum.textContent).toBe("7");
})

