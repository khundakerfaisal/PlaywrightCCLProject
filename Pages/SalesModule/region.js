class Region {
    constructor(page) {
        this.page = page;
        this.defaultRootMenu = page.getByTitle('Home Menu');
        this.salesMenuSelection= page.getByRole('menuitem', { name: 'Sales' });
        this.ConfigurationMenuSelection= page.getByRole('button', { name: 'Configuration' });
        this.regionMenuSelection= page.getByRole('menuitem', { name: 'Region' });
        this.createNewButton= page.getByRole('button', { name: 'New' });
        // this.textRegionClick= page.getByRole('textbox', { name: 'Region Name' }).click();
        this.textRegionInput= page.getByRole('textbox', { name: 'Region Name' }).fill('Region 6');
        // this.= page.getByRole('textbox', { name: 'Region Code' }).click();
        this.textRegionCodeInput= page.getByRole('textbox', { name: 'Region Code' }).fill('rg 06');
        this.selectDropdown= page.getByRole('textbox', { name: 'Employee' });
        this.selectDropdownValue= page.getByRole('link', { name: 'Abdul Karim(CCL21033)' });
        this.clickSubmitButton= page.getByRole('button', { name: 'Save manually' });
        this.redirectPage= page.getByRole('link', { name: 'Region Configuration' });

    }
    // async goto() {
    //     await this.page.goto("http://192.168.3.187:7071/web/login");
    // }

    async cclRegion() {
        await this.defaultRootMenu.click()
        await this.salesMenuSelection.click();
        await this.ConfigurationMenuSelection.click();
        await this.regionMenuSelection.click();
        await this.createNewButton.click();
        await this.textRegionInput.fill('Region 6');
        await this.textRegionCodeInput.fill('rg 06');
        await this.selectDropdown.click();
        await this.selectDropdownValue.click();
        await this.clickSubmitButton.click();
        await this.redirectPage.click();
    }
}
export default Region;
