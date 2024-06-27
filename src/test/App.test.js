import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('displays Hello, World! when button is clicked', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  const messageElement = screen.getByText(/hello, world/i);
  expect(messageElement).toBeInTheDocument();
}); 