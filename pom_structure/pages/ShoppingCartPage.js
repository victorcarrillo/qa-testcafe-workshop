import { Selector ,t  } from 'testcafe'

var str1 = 'div.cart_list>div:nth-child('
var str2 = ')>div:nth-child(2)>a>div'
var item 

class ShoppingCartPage{
    

    constructor(){
        this.shoppingCartTitle = Selector('span.title')
        this.itemAdded1= Selector('div.cart_list>div:nth-child(3)>div:nth-child(2)>a>div')
        this.itemAdded2= Selector('div.cart_list>div:nth-child(4)>div:nth-child(2)>a>div')
        this.checkoutButton = Selector('button#checkout')
        this.continueButton = Selector('input#continue')

    }

    async clickCheckout(){
        await t.click(this.checkoutButton)
    }

    async clickContinue(){
        await t.click(this.continueButton)
    }
}

export default new ShoppingCartPage()