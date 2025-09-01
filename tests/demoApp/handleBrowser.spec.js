import { test, expect,chromium } from '@playwright/test'

test.skip('Handle Page/Windows',async()=>{
    // const browser= await chromium.launch()
    // const context=await browser.newContext()

    // const page1=await context.newPage()
    // const page2=await context.newPage()

    // const allPages=context.pages()
    // console.log("Number of pages",allPages.length)

    // await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // await expect(page1).toHaveTitle("OrangeHRM")
    //  await page2.goto("https://www.orangehrm.com/")
    // await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")
   const browser= await chromium.launch()
   const contex=await browser.newContext()

   const page1=await contex.newPage()
//    const page2=await contex.newPage()

   const allPages=contex.pages()
   await page1.goto("https://demoqa.com/browser-windows")

   await page1.locator('#tabButton').click()








})