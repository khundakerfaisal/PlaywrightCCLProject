import {test,expect,chromium} from '@playwright/test'
test('handle tab', async()=>{
    const browser=await chromium.launch()
    const contex=await browser.newContext()
    const page1=await contex.newPage()
    await page1.goto("https://demoqa.com/browser-windows")
    const [newTab]=await Promise.all([contex.waitForEvent('page'),page1.click('#tabButton')])
    await expect(newTab.getByText("This is a sample page")).toBeVisible()
    await newTab.close()
})

