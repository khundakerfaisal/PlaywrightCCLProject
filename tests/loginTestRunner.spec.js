import { test, except } from "@playwright/test"
import login from "../Pages/login";

test("User can login successfully", async ({ page }) => {


    const loginUser = new login(page);
    await page.goto("http://192.168.3.187:7071/web/login");
    // await loginUser.cclLogin("admin","1234")
    const userData={ userName:"Admin", password:"1234" };



    await loginUser.cclLogin(userData);

});