import { test, expect } from '@playwright/test';

test('Add item to TODO', async ({ page }) => {
    await page.goto('http://localhost:4173');

    const btn = page.getByText('Add task');
    const list = page.getByTestId('list');
    const input = page.getByPlaceholder('Nourrir le chat');

    await input.fill('Nourrir le chat');
    await btn.click();

    await expect(list).toHaveCount(1);
    await expect(list).toHaveText('Nourrir le chat');
});