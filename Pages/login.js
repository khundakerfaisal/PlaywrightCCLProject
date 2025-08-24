class login{
    constructor(page){
        this.page=page;
        this.userNameInput=page.getByLabel("Email")
        this.passwordInput=page.getByLabel("Password")
    }
    // async goto(){
    //     await this.page.goto("http://192.168.3.187:7071/web/login");
    // }
    async cclLogin(userName,password){
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
    }
}
export default login;