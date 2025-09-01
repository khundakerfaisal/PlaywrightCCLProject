import { test, expect, chromium } from '@playwright/test'

test('handle tab', async () => {
    const browser = await chromium.launch(); //First config the chormium browser
    const contex = await browser.newContext()//Create a contex browser
    const page = await contex.newPage()//Added pages in new context
    await page.goto("https://demoqa.com/browser-windows")
    const [newTab]=await Promise.all([contex.waitForEvent('page'),page.click('#tabButton')]) //Handle multiple browser tab with click event
    const assertPage = await expect(newTab.getByText("This is a sample page")).toBeVisible() //assert new tab heading
    console.log(assertPage)
    await newTab.close();//Close the new tab
})

//npx playwright test tests/demoApp handleTab.spec.js