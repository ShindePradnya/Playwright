import {test,expect} from '@playwright/test';



test('Login once and reuse session storage',async ({browser})=>{

    const baseURL =test.info().project.use.baseURL as string;

    const loginContext =await browser.newContext();

    const loginPage =await loginContext.newPage();

    await loginPage.goto('/MediShopWebApp/login.html');

    await expect(loginPage).toHaveURL(/MediShop/);

    await loginPage.getByLabel('Email address').fill(process.env.TEST_EMAIL);
    await loginPage.getByTestId('password_id').fill(process.env.TEST_PASSWORD);

    await loginPage.getByRole('button', { name: 'Sign in' }).click();

    await loginPage.waitForURL('**/home.html');

    //Read sessionStorage from the login context

    //Page.evaluate() runs JS directly inside the browser page.
    //We are reading all values currently stored in sessionStirae.
    const sessionStorageData =await loginPage.evaluate(()=>{
        //create an empty object.
        //Record<String,String> means: key will be a string and value will be a string
        const data:Record<string,string> ={};

        //loop through all items available in session Storage
        //sessionStorage.length tells us how maney items are stored
        for(let i=0;i<sessionStorage.length;i++){

            //Get the key at the current index in sessionStorage
            const key = sessionStorage.key(i);
            if(key){
                data[key] =sessionStorage.getItem(key)||'';
            }
        }
        return data;
    });

    console.log('Session Storage Data:');
    console.log(sessionStorageData);

    await loginContext.close();

    //create new context

    const newContext =await browser.newContext({
        baseURL: baseURL
    });

    //set sessionStorage data in the new context

    //Run this script automatically whenever a new page is created in this context, before the application JS starts running
    await newContext.addInitScript((data)=>{
        //data will receive the sessionStorageData Object from the previous context.
        //converts the object into key-value pairs and loop through every session item.
        for(const[key,value] of Object.entries(data)){
            sessionStorage.setItem(key,value);
        }
    },sessionStorageData);

    const newPage =await newContext.newPage();

    await newPage.goto('/MediShopWebApp/login.html');
    await newPage.waitForTimeout(2000);

    await expect(newPage.getByTestId('account_menu_button')).toBeVisible();

    await newContext.close();


   
});