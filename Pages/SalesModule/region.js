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
    // async goto() {
    //     await this.page.goto("http://192.168.3.187:7071/web/login");
    // }

    async cclRegion() {
        const regionNames = ["Bandarban",
            "Barguna",
            "Barishal",
            "Bhola",
            "Bogura",
            "Brahmanbaria",
            "Chandpur",
            "Chapai Nawabganj",
            "Chattogram",
            "Chuadanga",
            "Cox's Bazar",
            "Cumilla",
            "Dhaka",
            "Dinajpur",
            "Faridpur",
            "Feni",
            "Gaibandha",
            "Gazipur",
            "Gopalganj",
            "Habiganj",
            "Jamalpur",
            "Jashore",
            "Jhalokati",
            "Jhenaidah",
            "Joypurhat",
            "Khagrachhari",
            "Khulna",
            "Khulna02",
            "Kishoreganj",
            "Kurigram",
            "Kushtia",
            "Lakshmipur",
            "Lalmonirhat",
            "Madaripur",
            "Magura",
            "Manikganj",
            "Meherpur",
            "Moulvibazar",
            "Munshiganj",
            "Mymensingh",
            "Naogaon",
            "Narail",
            "Narayanganj",
            "Narsingdi",
            "Natore",
            "Netrokona",
            "Nilphamari",
            "Noakhali",
            "Pabna",
            "Panchagarh",
            "Patuakhali",
            "Pirojpur",
            "Rajbari",
            "Rajshahi",
            "Rangamati",
            "Rangpur",
            "Satkhira",
            "Shariatpur",
            "Sherpur",
            "Sirajganj",
            "Sunamganj",
            "Sylhet",
            "Tangail",
            "Thakurgaon"]


        await this.defaultRootMenu.click()
        await this.salesMenuSelection.click();
        await this.ConfigurationMenuSelection.click();
        await this.regionMenuSelection.click();
        await this.createNewButton.click();
        for (let i = 0; i < regionNames.length; i++) {
            const regionName = regionNames[i];
            const regionCode = 'R00${i+2}'
            await this.textRegionClick.click();
            await this.textRegionInput.fill(regionName);
            await this.textRegionCodeClick.click();
            await this.textRegionCodeInput.fill(regionCode);
             await this.selectDropdown.click();
            const employeeDropdownValues = ["Abdul Karim(CCL21033)",
                "Amam Hasan(CCL60296)",
                "Abdul Karim(CCL21033)"];
                const employeeDropDownSelect=employeeDropdownValues[i%employeeDropdownValues.length];

                await this.selectDropdown.fill(employeeDropDownSelect);


           
            // await this.selectDropdownValue.click();
            await this.clickSubmitButton.click();
            await this.redirectPage.click();

        }

    }
}
export default Region;
