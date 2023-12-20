import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component', () => {
  render(<Footer />);

  // Verify that the component is present
  expect(screen.getByText('CONTACTS')).toBeInTheDocument();
  expect(screen.getByText('PHONES')).toBeInTheDocument();
  expect(screen.getByText('TOP SEARCH')).toBeInTheDocument();
});