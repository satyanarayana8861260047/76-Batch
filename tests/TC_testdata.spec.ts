import{test} from '@playwright/test';

test('testdata variable',async({page})=>{
let url:string = "https://sureshitacademy.in/hrms/login.php";
let userName:string="sureshit";
let passWord:string="sureshit";

await page.goto(url);
await page.waitForTimeout(3000);
await page.locator("//input[@name='txtUserName']").fill(userName);
await page.locator('//input[@name="txtPassword"]').fill(passWord);
await page.locator('//input[@value="Login"]').click();
await page.getByText('PIM').hover();
await page.getByText('Add Employee').click();
await page.getByRole('link',{name:'Logout'}).click()

})