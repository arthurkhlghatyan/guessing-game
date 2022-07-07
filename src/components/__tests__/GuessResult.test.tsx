import { render, screen } from '@testing-library/react';
import GuessResult from '../GuessResult';

test('renders status message when guess is incorrect', () => {
  render(<GuessResult checkStatus="less" />);
  const textElement = screen.getByText(/Enter smaller number/i);
  expect(textElement).toBeInTheDocument();
});
