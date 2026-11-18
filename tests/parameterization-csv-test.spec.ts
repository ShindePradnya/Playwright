import {test,expect} from '@playwright/test';
import {readCSVData} from '../utils/readCSV';

const testData = readCSVData('data/testData.csv');
test('test', async ({page})=>{
    for(const data of testData){
    await page.goto('https://way2automation.com/way2auto_jquery/index.php');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Rahul');
    await page.locator('input[name="name"]').press('Tab');
    await page.locator('input[name="phone"]').fill(data.mobile);
    await page.locator('input[name="phone"]').press('Tab');
    await page.locator('input[name="email"]').fill(data.username);
    await page.getByRole('combobox').selectOption('Germany');
    await page.locator('input[name="city"]').click();
    await page.locator('input[name="city"]').fill('Berlin');
    await page.locator('input[name="city"]').press('Tab');
    await page.locator('#load_box input[name="username"]').fill('assdf');
    await page.locator('#load_box input[name="username"]').press('Tab');
    await page.locator('#load_box input[name="password"]').fill('sdfsf');
    await page.getByRole('button',{name:'Submit'}).click();
    }
});