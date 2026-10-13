import {test} from '@playwright/test';

test('web table', async ({ page }) => {
  await page.goto('file:///C:/Users/SathyaNarayana/OneDrive/Documents/Downloads/WebTable.html');
  await page.waitForTimeout(3000);
  console.log('Application opened');
//--Count
let rowCount = await page.locator("//*[@id='idCourse']/tbody/tr").count();
let colCount = await page.locator("//*[@id='idCourse']/tbody/tr[1]/td").count();
let row_colCount = await page.locator("//*[@id='idCourse']/tbody/tr/td").count();
await page.waitForTimeout(3000);
console.log('Number of rows:', rowCount);
await page.waitForTimeout(3000);
console.log('Number of columns:', colCount);
await page.waitForTimeout(3000);
console.log('Number of rows and columns:', row_colCount);
await page.waitForTimeout(3000);
//--Data from particular cell
let cellData = await page.locator("//*[@id='idCourse']/tbody/tr[2]/td[2]").textContent();
console.log('Data from particular cell:', cellData);
await page.waitForTimeout(3000);
//--Data from whole table
//     var
for(let i = 1; i<=rowCount; i++) {
let data = await page.locator("//*[@id='idCourse']/tbody/tr["+i+"]").innerText();
console.log(data);
}

});