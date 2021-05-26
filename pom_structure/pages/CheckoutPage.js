import { Selector ,t  } from 'testcafe'

class CheckoutPage{
    constructor(){
        this.continueButton= Selector('input#continue')
        this.checkoutTitle = Selector ('span.title')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.firstNameField = Selector('input#first-name')
        this.lastNameField = Selector('input#last-name')
        this.zipCodeField = Selector('input#postal-code')
        this.itemAdded = Selector('div.inventory_item_name')
        this.finishButton = Selector ('button#finish')
        this.completeHeader = Selector ('h2.complete-header')

    }

    async clickContinue(){
        await t.click(this.continueButton)
    }
    
    async fillFirstNameField(firstName){
        await t.typeText(this.firstNameField,firstName,{paste:true})
    }

    async fillLastNameField(lastName){
        await t.typeText(this.lastNameField,lastName,{paste:true})
    }

    async fillPostalCodeField(postalCode){
        await t.typeText(this.zipCodeField,postalCode,{paste:true})
    }

    async validMailAddressRegistration(firstName,lastName,postalCode){
        await t.typeText(this.firstNameField,firstName,{paste:true})
        await t.typeText(this.lastNameField,lastName,{paste:true})
        await t.typeText(this.zipCodeField,postalCode,{paste:true})

    }

    async clickFinishOrder(){
        await t.click(this.finishButton)
    }

    
}

export default new CheckoutPage()