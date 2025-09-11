import { test, expect } from '@playwright/test'

test('Handle alert New', async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");

    page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await page.locator('#alertButton').click();

});



test.skip('Handle alert', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('I am an alert box!')
        dialog.accept()

    })

    await page.locator('#alertBtn').click()
    await page.waitForTimeout(7000)
})

test.skip('Handle alert 2', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#alertBtn').click()
})

