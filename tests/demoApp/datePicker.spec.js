const {test,expect}=require('@playwright/test')
test('Handl date and time', async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")
//  await page.fill('#datepicker','03/15/2024')
//  await page.fill('#datepicker','03/15/2024')
const year="2025"
const month="March"
const date=20
await page.click('#datepicker')
while(true){
    const dates=await page.$$("//a[@class='ui-state-default']")
    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }

}

})
 