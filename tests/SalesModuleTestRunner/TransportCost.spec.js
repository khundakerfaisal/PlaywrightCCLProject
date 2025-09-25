import { test, expect } from "@playwright/test";
import LoginPage from "../../Pages/login";
import TransportCost from "../../Pages/SalesModule/transport";

test.describe("Login With valid creds", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("Admin", "1234");

    })
    test("Create Transportcost", async ({ page }) => {
        const transport = new TransportCost(page);
        await transport.CCLTransportCost();

    });
})