class Region {
    constructor(page) {
        this.page = page;
        this.defaultRootMenu = page.getByTitle('Home Menu');
        this.salesMenuSelection = page.getByRole('menuitem', { name: 'Sales' });
        this.ConfigurationMenuSelection = page.getByRole('button', { name: 'Configuration' });
        this.regionMenuSelection = page.getByRole('menuitem', { name: 'Region' });
        this.createNewButton = page.getByRole('button', { name: 'New' });
        this.textRegionClick = page.getByRole('textbox', { name: 'Region Name' });
        this.textRegionInput = page.getByRole('textbox', { name: 'Region Name' });
        this.textRegionCodeClick = page.getByRole('textbox', { name: 'Region Code' });
        this.textRegionCodeInput = page.getByRole('textbox', { name: 'Region Code' });
        this.selectDropdown = page.getByRole('textbox', { name: 'Employee' });
        // this.selectDropdownValue = page.getByRole('link', { name: 'Abdul Karim(CCL21033)' });
        // this.selectDropdownValue = page.getByRole('link', { name: '' });
        this.clickSubmitButton = page.getByRole('button', { name: 'Save manually' });
        this.redirectPage = page.getByRole('link', { name: 'Region Configuration' });

    }

    selectDropdownValue(employeeName) {
        return this.page.getByRole('link', { name: employeeName });
    }


    async cclRegion() {
        const regionNames = [
            "Brahmanbaria",
            "Chandpur"
        ]


        await this.defaultRootMenu.click()
        await this.salesMenuSelection.click();
        await this.ConfigurationMenuSelection.click();
        await this.regionMenuSelection.click();
        // await this.createNewButton.click();
        for (let i = 0; i < regionNames.length; i++) {
            await this.createNewButton.click();
            const regionName = regionNames[i];
            const regionCode = `R00${i + 7}`;
            await this.textRegionClick.click();
            await this.textRegionInput.fill(regionName);
            await this.textRegionCodeClick.click();
            await this.textRegionCodeInput.fill(regionCode);

            const employeeDropdownValues = ["Abdul Karim(CCL21033)",
                "Amam Hasan(CCL60296)",
                "Abdul Karim(CCL21033)"];
            const employeeDropDownSelect = employeeDropdownValues[i % employeeDropdownValues.length];
            await this.selectDropdown.click();
            await this.selectDropdownValue(employeeDropDownSelect).click();
            await this.clickSubmitButton.click();
            await this.redirectPage.click();

        }

    }
}
export default Region;
