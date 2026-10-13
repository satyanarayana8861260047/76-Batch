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
//screenshot for whole page
await page.screenshot({path:'D:\\screenshot\\fullpage.png',fullPage:true})
//logout particular area screenshot
await page.getByRole('link',{name:'Logout'}).screenshot({path:'D:\\screenshot\\logout.png'});
console.log('logout successfully')
await page.waitForTimeout(3000)

await page.screenshot({path:'D:\\screenshot\\area.png', clip:{x:0,y:0,width:500,height:500}})
await page.waitForTimeout(3000);
//lpogout
await page.getByRole('link',{name:'Logout'}).click();
console.log('logout successfully')
await page.waitForTimeout(3000)


})