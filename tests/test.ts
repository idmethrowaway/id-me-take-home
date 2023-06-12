import { expect, test } from '@playwright/test';
import data from '../src/routes/data.json' assert { type: 'json' };

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Purchases' })).toBeVisible();
});

test('index page has expected purchases listed', async ({ page }) => {
	await page.goto('/');
	await Promise.all(
		data.map(async (purchase) => {
			await expect(page.getByText(purchase.name).first()).toBeAttached();
		})
	);
});
