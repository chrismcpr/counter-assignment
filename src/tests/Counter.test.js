import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterValue = screen.getByText('0');
  expect(counterValue).toBeInTheDocument();
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
  const increment = screen.getByRole('button', { name: '+' });
  expect(increment).toBeInTheDocument();
  await userEvent.click(increment);
  const updatedCounterValue = screen.getByTestId('count');
  expect(updatedCounterValue).toHaveTextContent('1');

});

test('clicking - decrements the count', async () => {
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
  await userEvent.click(screen.getByRole('button', { name: '-' }));
  const updatedCounterValue = screen.getByTestId('count');
  expect(updatedCounterValue).toHaveTextContent('-1');
});
