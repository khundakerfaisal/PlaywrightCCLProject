class TransportCost{
    constructor(page){
        this.page=page;
        this.defaultRootMenu = page.getByTitle('Home Menu');
        this.salesMenuSelection = page.getByRole('menuitem', { name: 'Sales' });
        this.ConfigurationMenuSelection = page.getByRole('button', { name: 'Configuration' });
        this.transportCostMenuSelection = page.getByRole('menuitem', { name: 'Transport Cost' });
        this.createNewButton = page.getByRole('button', { name: 'New' });
        this.CreationDate=page.getByRole('textbox',{name:'Creation Date'})

    }
    async CCLTransportCost(){
        await this.defaultRootMenu.click();
        await this.salesMenuSelection.click();
        await this.ConfigurationMenuSelection.click();
        await this.transportCostMenuSelection.click();
        await this.createNewButton.click();
        await this.CreationDate.fill('25/09/2025').click();
    }

}
export default TransportCost;