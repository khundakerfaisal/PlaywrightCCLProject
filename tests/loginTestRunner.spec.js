import { test, expect } from "@playwright/test";
import LoginPage from "../Pages/login";
import { writeJSONFile } from "../utils/utils";

test("User can login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("Admin", "1234");
    await expect(page.getByText("SMS API Configuration")).toBeVisible();
    // writeJSONFile()

    //   await expect(page).toHaveURL(/.*dashboard/); 

});
