import { test, expect } from "@playwright/test";
import LoginPage from "../../Pages/login";
import Region from "../../Pages/SalesModule/region";

test.describe("Generate Region", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("Admin", "1234");

    });

    test("Create Region", async ({ page }) => {
        const regionPage = new Region(page);
        await regionPage.cclRegion();

    });
});