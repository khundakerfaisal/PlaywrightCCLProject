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
    // await page.getByText('SMS API Configuration').click();
    // await expect(page.locator('body')).toContainText('SMS API Configuration');

    // await page.pause();
  });