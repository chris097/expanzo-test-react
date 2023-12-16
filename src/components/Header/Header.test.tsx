import { render, screen } from '@testing-library/react';
import Header from '.';

test('renders Header component', () => {
  render(<Header />);

  // Verify that the navigation links are present
  expect(screen.getByText('DASHBOARD')).toBeInTheDocument();
  expect(screen.getByText('CONTACT')).toBeInTheDocument();

  // Verify that login and registration links are present
  expect(screen.getByText('LOGIN')).toBeInTheDocument();
  expect(screen.getByText('REGISTRATION')).toBeInTheDocument();
});

test('renders Header component with logo when hasLogo is true', () => {
  render(<Header hasLogo={true} />);

  // Verify that the logo is present
  expect(screen.getByAltText('expanzo logo')).toBeInTheDocument();
});