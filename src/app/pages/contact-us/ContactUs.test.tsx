import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUS from './page';

test('renders ContactUS component with correct information', () => {
  render(<ContactUS />);

  // Check if the contact information is rendered correctly
  expect(screen.getByText('Headquater')).toBeInTheDocument();
  expect(screen.getByText('DHO s.r.o')).toBeInTheDocument();
  expect(screen.getByText('Bor̃ivojova 878/35')).toBeInTheDocument();
    expect(screen.getByText('130 00 Praha 3')).toBeInTheDocument();
    
    // expect(screen.getByAltText('expanzo logo')).toBeInTheDocument();

  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('info@expanzo.com')).toBeInTheDocument();
});

test('renders ContactUS component with header and footer', () => {
  render(<ContactUS />);


  // Check if the footer is present
  expect(screen.getByText('CONTACTS')).toBeInTheDocument();
  expect(screen.getByText('PHONES')).toBeInTheDocument();
  expect(screen.getByText('TOP SEARCH')).toBeInTheDocument();
});