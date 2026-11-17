import { test, expect } from './fixtures/auth.fixture';

test('User can see popular medicines', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText('Popular Medicines')).toBeVisible();
});

test('User can browse medicines', async ({ loggedInPage }) => {
  await loggedInPage.getByRole('link', { name: 'Browse Medicines' }).click();
  await expect(loggedInPage).toHaveURL(/products/);
});  