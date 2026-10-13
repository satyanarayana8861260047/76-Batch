import {test} from '@playwright/test'

test('TC002 open _close browser',async({page})=>{
    //test steps
    await page.goto('https://sureshitacademy.in/hrms');
    await page.waitForTimeout(3000);
    console.log('application opened');


})