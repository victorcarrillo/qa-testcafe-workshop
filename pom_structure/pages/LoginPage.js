import { Selector ,t  } from 'testcafe'

class LoginPage{
    constructor(){
        this.userNameField = Selector('input#user-name')
        this.passwordField = Selector('input#password')
        this.loginButton = Selector('input#login-button')
        this.invalidLoginMessage = Selector('h3[data-test="error"]')
        this.loginLogo = Selector('div.login_logo')
    }
    async submitLoginForm(username,password){
        console.log ("-- Step : Validate Credentials")
        if (username != null ){
            await t.typeText(this.userNameField
                ,username
                ,{paste:true})
        }
        
        if (password != null){
            await t.typeText(this.passwordField,
                password,
                {paste:true})
        }
        
        await t.click(this.loginButton)
        
    }

    
}

export default new LoginPage()