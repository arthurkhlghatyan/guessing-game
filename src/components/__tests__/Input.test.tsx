import { render, screen } from '@testing-library/react';
import Input from '../Input';

test('renders proper label', () => {
  render(<Input value="hello" onChange={() => {}} withLabel="This is label" />);

  const textElement = screen.getByText(/This is label/i);
  expect(textElement).toBeInTheDocument();
});
