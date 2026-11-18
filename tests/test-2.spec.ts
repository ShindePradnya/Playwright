import {test,expect} from '@playwright/test';

test('test1', async ({page})=>{
    await page.goto('https://way2automation.com/way2auto_jquery/index.php');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Rahul');
    await page.locator('input[name="name"]').press('Tab');
    await page.locator('input[name="phone"]').fill('9111111111');
    await page.locator('input[name="phone"]').press('Tab');
    await page.locator('input[name="email"]').fill('trainer@way2automation.com');
    await page.getByRole('combobox').selectOption('Germany');
    await page.locator('input[name="city"]').click();
    await page.locator('input[name="city"]').fill('Berlin');
    await page.locator('input[name="city"]').press('Tab');
    await page.locator('#load_box input[name="username"]').fill('assdf');
    await page.locator('#load_box input[name="username"]').fill('Tab');
    await page.locator('#load_box input[name="password"]').fill('sdfsf');
    await page.getByRole('button',{name:'Submit'}).click();


});

test('test2', async ({page})=>{
    await page.goto('https://way2automation.com/way2auto_jquery/index.php');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Rahul');
    await page.locator('input[name="name"]').press('Tab');
    await page.locator('input[name="phone"]').fill('9111111211');
    await page.locator('input[name="phone"]').press('Tab');
    await page.locator('input[name="email"]').fill('info@way2automation.com');
    await page.getByRole('combobox').selectOption('Germany');
    await page.locator('input[name="city"]').click();
    await page.locator('input[name="city"]').fill('Berlin');
    await page.locator('input[name="city"]').press('Tab');
    await page.locator('#load_box input[name="username"]').fill('assdf');
    await page.locator('#load_box input[name="username"]').fill('Tab');
    await page.locator('#load_box input[name="password"]').fill('sdfsf');
    await page.getByRole('button',{name:'Submit'}).click();


});