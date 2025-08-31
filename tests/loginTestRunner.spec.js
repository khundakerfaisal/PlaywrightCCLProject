import { test, expect } from "@playwright/test";
import LoginPage from "../Pages/login";
import { writeJSONFile } from "../utils/utils";

test("User can login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(page).toHaveURL("http://192.168.3.187:7071/web/login");
    await loginPage.login("Admin", "1234");
    await expect(page.getByText("SMS API Configuration")).toBeVisible();
    // writeJSONFile()

    //   await expect(page).toHaveURL(/.*dashboard/); 

});
