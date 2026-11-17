import {test, expect } from '@playwright/test';

test.describe('MediShop Tests', ()=>{

    test.beforeEach(async ({page})=>{

        await page.goto(
            '/MediShopWebApp/login.html'
        );

        await expect(page.getByRole('heading',{name:'Welcome back'})).toBeVisible();

        await expect(page.getByRole('button',{name:'Sign in'})).toBeVisible();

        await page.getByLabel('Email address').fill(process.env.TEST_EMAIL);

        await page.getByTestId('password_id').fill(process.env.TEST_PASSWORD);

        await page.getByRole('button',{name:'Sign in'}).click();

        await expect(page).not.toHaveURL(/login/);

    });
    

    test('User can see popular medicines', async ({page})=>{
       await expect(page.getByText('Popular Medicines')).toBeVisible();
    });

    test('User can browse medicines', async ({page})=>{
       await page.getByRole('link',{name:'Browse medicines'}).click();
       await expect(page).toHaveURL(/products/);
    });

    test.afterEach(async ({page},testInfo)=>{
       console.log(`Finished Test: ${testInfo.title}`);
       console.log(`Test status: ${testInfo.status}`);
       console.log(`Test duration: ${testInfo.duration}ms`);

       if(testInfo.status === 'failed'){
        console.log(`Test failed: ${testInfo.title}`);
        console.log(`Test error: ${testInfo.error}`);
        await page.screenshot({path: `screenshots/${testInfo.title}.png`,fullPage:true});
       }
    });

});
