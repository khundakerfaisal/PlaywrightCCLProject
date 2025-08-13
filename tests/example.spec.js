// // @ts-check
import{test,expect} from'@playwright/test';
test('test', async ({ page }) => {
    await page.goto('http://192.168.3.187:7071/web/login');
    // await page.getByRole('form').locator('div').filter({ hasText: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('admin');
    await page.getByRole('form').locator('div').filter({ hasText: 'Password' }).first().click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('1234');
    await page.getByRole('button', { name: 'Log in' }).click();
    // await page.pause();
  });


// test('has title', async ({ page }) => {
//   await page.goto('http://192.168.3.187:7071/web/login');
//   await page.evaluate(() => document.documentElement.requestFullscreen());

// await page.waitForTimeout(3000);

//   // Expect a title "to contain" a substring.
//   // await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('http://192.168.3.187:7071/web/login');

//   // Click the get started link.
//   // await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
