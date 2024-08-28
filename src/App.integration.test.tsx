import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';
import userEvent from '@testing-library/user-event'

test('Add item to TODO', async () => {
    render(<App />);
    const user = userEvent.setup();
    const btn = screen.getByText('Add task');
    const list = screen.getByTestId('list');
    const input = screen.getByPlaceholderText('Nourrir le chat');

    await user.type(input, 'Nourrir le chat');

    await user.click(btn);

    expect(list.children.length).toBe(1);

    expect(list.children[0].textContent).toBe('Nourrir le chat');
})