import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.3.187:7071/web/login');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('form').locator('div').filter({ hasText: 'Password' }).first().click();
  await page.getByRole('form').locator('div').filter({ hasText: 'Password' }).first().click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('form').locator('div').filter({ hasText: 'Password' }).first().click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Email' }).click();
  await expect(page.getByRole('form')).toMatchAriaSnapshot(`
    - form:
      - text: Email
      - textbox "Email"
      - text: Password
      - textbox "Password"
      - text: 
      - button "Log in"
      - link "Forget Password":
        - /url: /web/reset_password?
    `);
});