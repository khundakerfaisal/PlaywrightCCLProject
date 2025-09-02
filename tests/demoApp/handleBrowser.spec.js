import { test, expect, chromium } from '@playwright/test'

test.skip('Handle one Windows', async () => {

    const browser = await chromium.launch() //launch chromium browser
    const contex = await browser.newContext()//added browser context for new session
    const page1 = await contex.newPage() //open one page  
    await page1.goto("https://demoqa.com/browser-windows")
    const [newWindow] = await Promise.all([contex.waitForEvent("page"), page1.click('#windowButton')]) //wait for new page open and clisk on browser button
    await newWindow.waitForLoadState() //wait for new window

    await expect(newWindow.getByText("This is a sample page")).toBeVisible() //assert new window heading
    await newWindow.close()//close window


});

test.skip('Handle Multiple Window assertion', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log("Number of pages", allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")
    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")
});