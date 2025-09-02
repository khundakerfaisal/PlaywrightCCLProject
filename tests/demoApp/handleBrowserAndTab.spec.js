import {test,expect,chromium} from '@playwright/test'
test('handle tab', async()=>{
    const browser=await chromium.launch()
    const contex=await browser.newContext()
    const page1=await contex.newPage()
    await page1.goto("https://demoqa.com/browser-windows")
    const [newTab]=await Promise.all([contex.waitForEvent('page'),page1.click('#tabButton')])
    await expect(newTab.getByText("This is a sample page")).toBeVisible()
    await newTab.close()
    await browser.close()
})

test('handle Window', async()=>{
    const browser=await chromium.launch()
    const contex=await browser.newContext()
    const page1=await contex.newPage()
    await page1.goto("https://demoqa.com/browser-windows")
    const [newWindow]=await Promise.all([contex.waitForEvent('page'),page1.click('#windowButton')])
    await newWindow.waitForLoadState()
    await expect(newWindow.getByText("This is a sample page")).toBeVisible()
    await newWindow.close()

})

test('handle Alert', async({page})=>{
    await page.goto("https://demoqa.com/alerts")
    page.on('dialog',async dialog=>{
        dialog.click('#alertButton')
        dialog.accept()

    })

})


