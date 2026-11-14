import { test, expect,request } from '@playwright/test';

test('First Playwright Test', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    const title = await page.title();
    await page.waitForTimeout(2000);
    console.log(`Title of the page is: ${title}`);
    expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
    expect(title).toContain('Fast and reliable end-to-end testing for modern web apps | Playwright');

    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    await page.reload();
});

test('Finding elements', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://gmail.com');
    //await page.getByLabel('Email or phone', { exact: true }).fill('trainer@way2automation.com'); //AreaLabel 
    await page.locator("#identifierId").fill('trainer@way2automation.com');//CSS
    await page.locator('button').filter({ hasText: 'Next' }).click();
    await page.waitForTimeout(4000);
    await page.getByLabel('Enter your password', { exact: true }).fill('Test@123');
    await page.locator('//div[@id="passwordNext"]/div/button/span').click();
    await page.waitForTimeout(2000);
    const errorMessage = await page.locator('//*[@id="c0"]/div[2]/span').textContent();
    console.log(`Error message is: ${errorMessage}`);
    expect(errorMessage).toBe('Wrong password. Try again or click Forgot password to reset it.');
    await page.waitForTimeout(2000);
});

test('Handling dropdowns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.wikipedia.org/');
    await page.selectOption('select', { label: 'Eesti' });
    await page.waitForTimeout(2000);
    await page.selectOption('select', { value: 'hi' });
    await page.waitForTimeout(2000);
    await page.selectOption('select', { index: 0 });
    await page.waitForTimeout(2000);
    const options = await page.locator('option').all();
    console.log(`Number of options in the dropdown is: ${options.length}`);
    for (const option of options) {
        const optionText = await option.innerText();
        const lang = await option.getAttribute('lang');
        console.log(`${optionText} Language is: ${lang}`);
    }

});

test('Handling links', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.wikipedia.org/');
    const block = await page.locator('//nav[@class="other-projects"]');

    const links = await block.locator('a').all();
    console.log(`Number of links on the page is: ${links.length}`);
    for (const link of links) {
        const linkText = await link.innerText();
        const url = await link.getAttribute('href');
        console.log(`${linkText} has url: ${url}`);
    }

});

test('Find all search links', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.google.com/');

    await page.getByLabel('Search', { exact: true }).fill('way2automation');
    await page.waitForTimeout(2000);
    await page.getByLabel('Google Search', { exact: true }).click();
    await page.waitForTimeout(2000);
    const block = await page.locator('#search');
    const links = await block.locator('a').all();
    console.log(`Number of links on the page is: ${links.length}`);
    for (const link of links) {
        const linkText = await link.innerText();
        const url = await link.getAttribute('href');
        console.log(`${linkText} has url: ${url}`);
    }

});

test('Handling checkboxes', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    const block = await page.locator('xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]');
    const checkboxes = await block.locator('[name="sports"]');
    const checkboxCount = await checkboxes.count();
    console.log(`Number of checkboxes is: ${checkboxCount}`);
    for (let i = 0; i < checkboxCount; i++) {
        await checkboxes.nth(i).click();
    }
    await page.waitForTimeout(2000);

});

test('Handling checkboxes2', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    const block = await page.locator('xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[7]');
    const checkboxes = await block.locator('[name="sports"]');
    const checkboxCount = await checkboxes.count();
    console.log(`Number of checkboxes is: ${checkboxCount}`);
    for (let i = 0; i < checkboxCount; i++) {
        const checkbox = checkboxes.nth(i);

        if (!(await checkbox.isChecked())) {
            await checkbox.check();
            console.log(`Checkbox ${i + 1} was unchecked, now checked.`);
        } else {
            console.log(`Checkbox ${i + 1} is already checked. Skipping.`);
        }
    }
    await page.waitForTimeout(2000);

});

test('Check random checkboxes', async ({ page }) => {
    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');
    // First block: Randomly check 2 checkboxes
    const block1 = await page.locator('xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]');
    const checkboxes1 = await block1.locator('[name="sports"]');
    const count1 = await checkboxes1.count();

    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * count1);
        await checkboxes1.nth(randomIndex).check();
    }

    // Second block: Check 2 unchecked checkboxes
    const block2 = page.locator('xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[7]');
    const checkboxes2 = await block2.locator('[name="sports"]');
    const count2 = await checkboxes2.count();

    // Randomly choose 2 checkboxes
    const first = Math.floor(Math.random() * count2);
    let second = Math.floor(Math.random() * count2);

    while (second === first) {
        second = Math.floor(Math.random() * count2);
    }

    // Check only those 2
    for (let i = 0; i < count2; i++) {
        if (i === first || i === second) {
            await checkboxes2.nth(i).check();
        } else {
            await checkboxes2.nth(i).uncheck();
        }
    }
    await page.waitForTimeout(2000);
});

test('Print checkboxx names', async ({ page }) => {
    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');

    const block = page.locator(
        'xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]'
    );

    const text = await block.textContent();

    console.log(text.replace('Please select every sport that you play.', '').replace(/:/g, '').trim().split('  ').join('\n'));
});

test('Mouse hover elements', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.way2automation.com/');


    await page.locator('//*[@id="navLinks"]/div/a').hover();
    await page.locator('//*[@id="navLinks"]/div/div/a[4]').click();

    await page.waitForTimeout(2000);

});

test('Slider movement', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://jqueryui.com/resources/demos/slider/default.html');

    await page.waitForTimeout(2000);

    const slider = await page.locator('#slider');
    const box = await slider.boundingBox();
    await page.waitForTimeout(2000);
    if (box) {
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;

        await page.mouse.move(x, y);
        await page.mouse.down();
        await page.waitForTimeout(2000);
        await page.mouse.move(x + 400, y); // Move the slider to the right by 100 pixels
        await page.mouse.up();
        await page.waitForTimeout(2000);
    }

});



test('Resizable elements', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://jqueryui.com/resources/demos/resizable/default.html');

    const handle = page.locator('.ui-resizable-se');
    const box = await handle.boundingBox();
    await page.waitForTimeout(2000);
    if (box) {
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;

        await page.mouse.move(x, y);
        await page.mouse.down();
        await page.mouse.move(x + 400, y + 400);
        await page.mouse.up();
        await page.waitForTimeout(2000);
    }

});

test('Drag and drop', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    const draggable = page.locator('#draggable');
    const droppable = page.locator('#droppable');
    const draggableBox = await draggable.boundingBox();
    const droppableBox = await droppable.boundingBox();
    await page.waitForTimeout(2000);
    if (draggableBox && droppableBox) {
        const x = draggableBox.x + draggableBox.width / 2;
        const y = draggableBox.y + draggableBox.height / 2;

        const droppableX = droppableBox.x + droppableBox.width / 2;
        const droppableY = droppableBox.y + droppableBox.height / 2;

        await page.mouse.move(x, y);
        await page.mouse.down();
        await page.mouse.move(droppableX, droppableY);
        await page.mouse.up();
        await page.waitForTimeout(2000);
    }

});


test('Right Click', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://deluxe-menu.com/popup-mode-sample.html');

    await page.locator('//p[2]/img').click({button : 'right'});

    await page.locator('#dm2m1i1it').click();
    await page.waitForTimeout(1000);
    await page.locator('#dm2m2i4tdT').hover();
    await page.locator('#dm2m4i0tdT').hover();
    await page.waitForTimeout(1000);

});


test('Handling alerts', async ({ page }) => {

    page.on('dialog',async diaglog =>{
    await page.waitForTimeout(2000);
    console.log(diaglog.message());
    await diaglog.accept();
    });

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://mail.rediff.com/cgo-bin/login.cgi');
    

    await page.locator('.signin-btn').click();
    await page.waitForTimeout(1000);

});


test('Handling Iframes', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit');
    
    const frame =page.frameLocator('#iframeResult');
    await frame.locator('#fname').fill('');
    await frame.locator('#fname').fill('John');
    await frame.locator('#lname').fill('');
    await frame.locator('#lname').fill('Joe');

        await frame.locator('[type="submit"]').click();

    await page.waitForTimeout(1000);

});


test('Handling tabs and popups ', async ({ page }) => {


    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.way2automation.com/way2auto_jquery/automation-practice-site.html');
    
    const [newPage] =await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//*[@id="wrapper"]/div/div/div[3]/ul/li/a/figure').click()
    ])

    await newPage.waitForLoadState();

    const frame =newPage.frames()[1];

    const [secondTab] = await Promise.all([
        newPage.waitForEvent('popup'),
        frame.locator('text=New Browser Tab').click(),
    ])

    await secondTab.waitForLoadState();
    console.log(await secondTab.title());

    secondTab.close();
    await page.waitForTimeout(1000);
    newPage.close();

    await page.waitForTimeout(1000);

});


test('Java Script and screenshot', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit');
    
    const frame =page.frameLocator('#iframeResult');
    await frame.locator('#fname').fill('');
    await frame.locator('#fname').fill('John');
    await frame.locator('#lname').fill('');
    await frame.locator('#lname').fill('Joe');

    await frame.locator('[type="submit"]').evaluate((element: HTMLElement)=>{
    element.style.border ='3px solid red';
 });
 await page.waitForTimeout(1000);
 await frame.locator('[type="submit"]').screenshot({path:'screenshot/submit.png'});
 await page.screenshot({path:'screenshot/screenshot.png',fullPage:true});
});


test('HTTP authentication', async ({ browser }) => {

    const context= await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }

    })
    const page =await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://tes-internet.herokuapp.com/basic_auth');

    await page.waitForTimeout(1000);
    
});



test('File Upload', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');

    await page.locator('#register_form > fieldset:nth-child(9) > input[type=file]').setInputFiles('C:\\Users\\pradnshi\\OneDrive - Capgemini\\Pictures\\Screenshots\\Node js.png')
    await page.waitForTimeout(1000);
    
});


test('Multiple File Upload', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fileupload_multiple');

    const frame =await page.frameLocator('#iframeResult')
    await frame.locator('#myFile').setInputFiles([
        'C:\\Users\\pradnshi\\OneDrive - Capgemini\\Pictures\\Screenshots\\Node js.png',
        'C:\\Users\\pradnshi\\OneDrive - Capgemini\\Pictures\\Screenshots\\Error.png'
    ]);
        await page.waitForTimeout(1000);
    });

    import path from 'path';
    import fs from 'fs';

test('File Downloading', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.selenium.dev/downloads/');
    await page.pause();
    const [download] =await Promise.all([
        page.waitForEvent('download'), //Listens for the download event
        page.locator('xpath=/html/body/div[2]/main/div[3]/div[2]/div/div/p[1]/a').click()
    ]);

    const projectDirectory =path.join(__dirname,'downloads');
    if(!fs.existsSync(projectDirectory)){
        fs.mkdirSync(projectDirectory);
    }
    const filePath =path.join(projectDirectory,'selenium.jar');
    await download.saveAs(filePath);// Saves the file to the specified path
    console.log("File Downloaded to: "+filePath);
        await page.waitForTimeout(1000);
    });    

    test('First Page Agent Test', async ({ page }) => {
   
    test.setTimeout(100000);
    await page.goto('https://www.way2automation.com/way2auto_jquery/index.php');

    const title= await page.title();
    console.log(title);
    await expect(title).toContain('Welcome');

    await page.addScriptTag({url: 'https://cdn.jsdelivr.net/npm/page-agent@1.12.4/dist/iife/page-agent.demo.js'});
    
    await page.evaluate(async ()=>{
        const PageAgentCtor =(window as any).PageAgent;
        if(!PageAgentCtor){
            throw new Error('PageAgent was not loaded on the page');
        }

        const agent =new PageAgentCtor({
            model: 'gemini-3-flash-preview',
            baseURL:'https://generativelanguage.googleapis.com/v1beta',
            apiKey: '',
            language: 'en-Us',
        })

        await agent.execute('Fill the dummy registration form with random data and submit the form')
    });
});

test('API Response Get', async () => {
    
    const requestContext = await request.newContext();
    const response =await requestContext.get('http://localhost:8080/api/users/1');
    console.log(await response.json());
    console.log(response.status());
    expect(response.status()).toBe(200);

    const jsonResponse =await response.json();
    expect(jsonResponse.firstName).toBe('Rahul');
    console.log(jsonResponse.firstName);

});

test('API Response POST', async () => {
    
    const requestContext = await request.newContext();
    const response =await requestContext.post('http://localhost:8080/api/users',{
    data:{
            "firstName": "Donal",
            "lastName": "Trump",
            "email": "trump@way2automation.com",

        },headers:{
            'Contenet-Type':'application/json',
    }
    });
    expect(response.status()).toBe(201);
    console.log(await response.status());
    console.log(await response.text());

});