import { test, expect, chromium } from '@playwright/test'
test.skip('handle tab', async () => {
    const browser = await chromium.launch()
    const contex = await browser.newContext()
    const page1 = await contex.newPage()
    await page1.goto("https://demoqa.com/browser-windows")
    const [newTab] = await Promise.all([contex.waitForEvent('page'), page1.click('#tabButton')])
    await expect(newTab.getByText("This is a sample page")).toBeVisible()
    await newTab.close()
    await browser.close()
})

test.skip('handle Window', async () => {
    const browser = await chromium.launch()
    const contex = await browser.newContext()
    const page1 = await contex.newPage()
    await page1.goto("https://demoqa.com/browser-windows")
    const [newWindow] = await Promise.all([contex.waitForEvent('page'), page1.click('#windowButton')])
    await newWindow.waitForLoadState()
    await expect(newWindow.getByText("This is a sample page")).toBeVisible()
    await newWindow.close()

})

test('handle Alert', async({page})=>{
    await page.goto("https://demoqa.com/alerts")


    page.on('dialog',async dialog=>{
        dialog.accept()
    })
    await page.click('#alertButton') 
})

test('handle Alert with message', async ({ page }) => {
    await page.goto("https://demoqa.com/alerts")


    page.on('dialog', async dialog => {
        await dialog.accept("Abc")

    })
    await page.waitForTimeout(2000);
    await page.click("#promtButton");
    const result = await page.locator("#promptResult").textContent();
    console.log("Prompt Result on page:", result);
})
//npx playwright test tests/demoApp handleBrowserAndTab.spec.js


