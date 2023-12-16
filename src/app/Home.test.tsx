import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

test('renders Home component with default state', () => {
  render(<Home />);

  // Check if the default active tab is 'All'
  expect(screen.getByText('All')).toHaveClass('text-main-1');
  expect(screen.getByText('Companies')).toHaveClass('text-main-10');
  expect(screen.getByText('Phones')).toHaveClass('text-main-10');

  // Check if the logo is present
//   expect(screen.getByAltText('expanzo logo')).toBeInTheDocument();
});

test('changes active tab on click', () => {
  render(<Home />);

  // Click on the 'Companies' tab
  fireEvent.click(screen.getByText('Companies'));

  // Check if the active tab is now 'Companies'
  expect(screen.getByText('All')).toHaveClass('text-main-10');
  expect(screen.getByText('Companies')).toHaveClass('text-main-1');
  expect(screen.getByText('Phones')).toHaveClass('text-main-10');
});