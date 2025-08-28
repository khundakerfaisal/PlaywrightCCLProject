import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.3.187:7071/web#action=1624&model=sms.api.config&view_type=list&cids=1&menu_id=726');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('menuitem', { name: 'Sales' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Region' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: 'Region Name' }).click();
  await page.getByRole('textbox', { name: 'Region Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Region Name' }).fill('R');
  await page.getByRole('textbox', { name: 'Region Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Region Name' }).fill('Region 6');
  await page.getByRole('textbox', { name: 'Region Code' }).click();
  await page.getByRole('textbox', { name: 'Region Code' }).fill('rg 06');
  await page.getByRole('textbox', { name: 'Region Code' }).click();
  await page.getByRole('textbox', { name: 'Employee' }).click();
  await page.getByRole('link', { name: 'Abdul Karim(CCL21033)' }).click();
  await page.getByRole('button', { name: 'Save manually' }).click();
  await page.getByRole('link', { name: 'Region Configuration' }).click();
});