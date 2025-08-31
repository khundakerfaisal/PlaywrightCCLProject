import { test, expect } from '@playwright/test'

// test('Check Radio', async({page})=>{
//     await page.goto("https://qa-practice.netlify.app/checkboxes")
//     await page.locator('//input[@id="checkbox2" and @type="checkbox"]').check()
// await page.check('//input[@id="checkbox2" and @type="checkbox"]')
// expect(await page.locator('//input[@id="checkbox2" and @type="checkbox"]')).toBeChecked()
// expect(await page.locator('//input[@id="checkbox2" and @type="checkbox"]').isChecked()).toBeTruthy()
// })

// test('Check Dropdown', async ({ page }) => {
// await page.goto("https://qa-practice.netlify.app/dropdowns")
// await page.locator('#dropdown-menu').click()
// await page.locator('#dropdown-menu').selectOption('Algeria')
// })

test('Seldct Hidden dropdown value', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();

    const options = await page.$$("//div[@role='listbox']//span")
    for (let optionValue of options) {
        const jobTitle = await optionValue.toContainText();
        console.log(jobTitle)
        if (jobTitle.include('QA Engineer')) {
            await optionValue.click();
            break;
        }

    }

    await page.waitForTimeout(5000)

// npx playwright test tests/demoApp automationPractise.spec.js
})