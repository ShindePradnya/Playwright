import {test,expect} from '@playwright/test';

const STORAGE_STATE='playwright/.auth/user.json';

test('Login once and user localStorage session',async ({browser})=>{

    const baseURL =test.info().project.use.baseURL as string;

    const loginContext =await browser.newContext();

    const loginPage =await loginContext.newPage();

    await loginPage.goto('/MediShopWebApp/login.html');

    await expect(loginPage).toHaveURL(/MediShop/);

    await loginPage.getByLabel('Email address').fill(process.env.TEST_EMAIL);
    await loginPage.getByTestId('password_id').fill(process.env.TEST_PASSWORD);
    await loginPage.getByTestId('remember_me_checkbox').check();
    await loginPage.getByRole('button', { name: 'Sign in' }).click();

    await loginPage.waitForURL('**/home.html');

    await expect(loginPage.getByTestId('account_menu_button')).toBeVisible();

    await loginContext.storageState({path: STORAGE_STATE});

    await loginContext.close();

    const authenticatedContext =await browser.newContext({
        
        storageState: STORAGE_STATE
    });

    const page =await authenticatedContext.newPage();
    await page.goto('/MediShopWebApp/login.html');
    await page.waitForTimeout(2000);

    await expect(page.getByTestId('account_menu_button')).toBeVisible();

});