import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Fibonacci from '../components/Fibonacci';

// Mock the fibonacciValue function to return predictable values for testing
vi.mock('../utils/fibonacciMath', () => ({
  fibonacciValue: vi.fn((num) => {
    // Simple mock: return num * 10 for testing
    return num * 10;
  }),
}));

describe('Fibonacci component', () => {
  it('renders input with placeholder', () => {
    render(<Fibonacci />);
    const input = screen.getByTestId('fibonacci-input');
    expect(input).toHaveAttribute('placeholder', '2');
  });

  it('calculates and displays result when valid number entered', () => {
    render(<Fibonacci />);
    const input = screen.getByTestId('fibonacci-input');
    const calculateBtn = screen.getByTestId('calculate-button');
    const formula = screen.getByTestId('formula-text');

    // Enter a valid number (e.g., 5)
    fireEvent.change(input, { target: { value: '5' } });
    // Input should be cleared? Actually our component clears result on input change but keeps fibonacciN.
    // Wait, our component sets result to '' on input change, but keeps fibonacciN.
    // So after change, input value is 5, result is '', formula shows F(5) = y.
    expect(input).toHaveValue('5');
    expect(formula).toHaveTextContent('F(5) = y');

    // Click calculate
    fireEvent.click(calculateBtn);
    // Now result should be updated (mocked: 5 * 10 = 50)
    expect(formula).toHaveTextContent('F(5) = 50');
  });

  it('clears result on input change', () => {
    render(<Fibonacci />);
    const input = screen.getByTestId('fibonacci-input');
    const calculateBtn = screen.getByTestId('calculate-button');
    const formula = screen.getByTestId('formula-text');

    // Enter a number and calculate
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(calculateBtn);
    expect(formula).toHaveTextContent('F(3) = 30'); // mocked

    // Change input to another number
    fireEvent.change(input, { target: { value: '4' } });
    // Result should be cleared
    expect(formula).toHaveTextContent('F(4) = y');
  });

  it('resets form and clears result', () => {
    render(<Fibonacci />);
    const input = screen.getByTestId('fibonacci-input');
    const calculateBtn = screen.getByTestId('calculate-button');
    const resetBtn = screen.getByTestId('reset-button');
    const formula = screen.getByTestId('formula-text');

    // Enter number and calculate
    fireEvent.change(input, { target: { value: '6' } });
    fireEvent.click(calculateBtn);
    expect(formula).toHaveTextContent('F(6) = 60');

    // Click reset
    fireEvent.click(resetBtn);
    // Input should be empty
    expect(input).toHaveValue('');
    // Formula should show F(x) = y
    expect(formula).toHaveTextContent('F(x) = y');
  });

  it('disables calculate button for invalid inputs (less than 2)', () => {
    render(<Fibonacci />);
    const input = screen.getByTestId('fibonacci-input');
    const calculateBtn = screen.getByTestId('calculate-button');

    // Empty input
    expect(calculateBtn).toBeDisabled();

    // Enter 0
    fireEvent.change(input, { target: { value: '0' } });
    expect(calculateBtn).toBeDisabled();

    // Enter 1
    fireEvent.change(input, { target: { value: '1' } });
    expect(calculateBtn).toBeDisabled();

    // Enter 2 (should be enabled)
    fireEvent.change(input, { target: { value: '2' } });
    expect(calculateBtn).not.toBeDisabled();
  });
});