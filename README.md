# Fibonacci Calculator

A simple React + TypeScript + Vite app that computes the nth Fibonacci number using an iterative algorithm with `bigint` for arbitrary precision.

## Features
- Input field to specify `n` (non‑negative integer)
- **Calculate** button to compute `fib(n)`
- **Reset** button to clear input and result
- Displays the formula used: `fib(n) = fib(n‑1) + fib(n‑2)`
- Result shown as plain text (bigint)

## Getting Started

### Prerequisites
- Node.js ≥ 20 (tested on v20.12.0)
- npm ≥ 10

### Installation
```bash
# Using HTTPS
git clone https://github.com/guglio/fibonacci.git
# or using SSH
git clone git@github.com:guglio/fibonacci.git
cd fibonacci
npm install
```

### Development
```bash
npm run dev   # starts Vite dev server at http://localhost:5173
```

### Build
```bash
npm run build # produces optimized bundle in ./dist
```

## Testing

The project uses **Vitest** with **React Testing Library** for unit and UI tests.

### Run tests
```bash
npm test          # headless mode
npm run test:ui   # opens Vitest UI
```

### Test suite
- **Unit tests**: `src/tests/fibonacciMath.test.ts` – validates the `fibonacciValue` function for inputs 0‑10.
- **UI/behavior tests**: `src/tests/Fibonacci.test.tsx` – renders the component, interacts with input and buttons, verifies calculation, reset, and disabled state.

### Adding new tests
Create new `.test.ts` or `.test.tsx` files inside `src/tests/`. Vitest will pick them up automatically.

---

*Built with Vite, React, TypeScript, and Tailwind CSS.*