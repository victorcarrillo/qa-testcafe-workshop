import { Selector,t} from 'testcafe'

class InventoryPage{
    constructor(){
        this.productTitle = Selector('span.title')
        this.sideMenu = Selector('button#react-burger-menu-btn')
        this.logoutButton = Selector('a#logout_sidebar_link')
        this.shoppingCartButton =Selector ('a.shopping_cart_link')
        this.addToCartItem1  = Selector('button#add-to-cart-sauce-labs-backpack')
        this.addToCartItem2  = Selector('button#add-to-cart-sauce-labs-bike-light')

    }
    async logout(){
        await t.click(this.sideMenu)
        await t.click(this.logoutButton)
    }

    async navigateToShoppingCart(){
        await t.click(this.shoppingCartButton)
    }

    async addItemToCart1(){
        await t.click(this.addToCartItem1)
    
    }

    async addItemToCart2(){
        await t.click(this.addToCartItem2)
    }
}

export default new InventoryPage()