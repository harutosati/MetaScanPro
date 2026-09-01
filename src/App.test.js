// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaScanPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaScanPro/i);
    expect(titleElement).toBeInTheDocument();
});
