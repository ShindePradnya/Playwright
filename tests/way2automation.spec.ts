import { test, expect } from '@playwright/test';

test('way2automation registration form fills correctly', async ({ page }) => {
  await page.goto('https://www.way2automation.com/way2auto_jquery/index.php');

  await expect(page.getByRole('heading', { name: 'Dummy Registration Form' })).toBeVisible();

  await page.locator('input[name="name"]').fill('Rahul Arora');
  await page.locator('input[name="phone"]').fill('9999999999');
  await page.locator('input[name="email"]').fill('trainer@way2automation.com');
  await page.selectOption('select[name="country"]', { label: 'Germany' });
  await page.locator('input[name="city"]').fill('Berlin');

  await expect(page.locator('input[name="name"]')).toHaveValue('Rahul Arora');
  await expect(page.locator('input[name="phone"]')).toHaveValue('9999999999');
  await expect(page.locator('input[name="email"]')).toHaveValue('trainer@way2automation.com');
  await expect(page.locator('select[name="country"]')).toHaveValue('Germany');
  await expect(page.locator('input[name="city"]')).toHaveValue('Berlin');
});
