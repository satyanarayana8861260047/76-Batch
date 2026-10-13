import {test} from '@playwright/test';

test('window handler',async({browser})=>{
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto('file:///C:/Users/SathyaNarayana/OneDrive/Documents/Downloads/multiplewindows.html');
    await page.waitForTimeout(3000);
    console.log('application opened');

    //newpage open
const [newPage]= await Promise.all([
    context.waitForEvent('page'),
    page.locator("//button[@id='btn1']").click()
]);
await newPage.waitForLoadState();
console.log('new page opened');




})