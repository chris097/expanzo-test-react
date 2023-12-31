import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';

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
});