import { expect, test as base, type Page } from '@playwright/test';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    if (!email || !password) {
      throw new Error('Set TEST_EMAIL and TEST_PASSWORD in the project root .env file.');
    }

    await page.goto(
      'https://www.way2automation.com/MediShopWebApp/login.html'
    );

    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();

    await page.getByLabel('Email address').fill(email);
    await page.getByTestId('password_id').fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).not.toHaveURL(/login/);
    await use(page);
  },
});

export { expect };

