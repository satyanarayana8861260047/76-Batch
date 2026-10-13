import{test} from '@playwright/test';

test('login_logout',async({page})=>{
await page.goto('https://sureshitacademy.in/hrms/login.php');
await page.waitForTimeout(3000)  //wait for 3 second
//username  and password
await page.locator('//input[@name="txtUserName"]').fill('sureshit');
await page.locator('//input[@name="txtPassword"]').fill('sureshit');
console.log('entered username and password')
//login 


await page.locator('//input[@name="Submit"]').click();
console.log('login successfully')
await page.waitForTimeout(3000)
//logout
await page.getByRole('link',{name:'Logout'}).click();
console.log('logout successfully')
await page.waitForTimeout(3000)


})