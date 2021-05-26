import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import checkoutPage from '../pages/CheckoutPage'
import {URLS,CREDENTIALS,MESSAGES, LABELS} from '../DataProvider/Constants' 

fixture ('Shopping Cart feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t=> {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(inventoryPage.productTitle.exists).ok()
    })
    
    test ('Navigate to Shopping Cart', async t=> {
        await inventoryPage.navigateToShoppingCart()
        await t.expect(shoppingCartPage.shoppingCartTitle.innerText).eql(LABELS.CART)
        
    })

    test ('Add a single item to the shopping cart', async t=> {
        await inventoryPage.addItemToCart1()
        await inventoryPage.navigateToShoppingCart()
        await t.expect(shoppingCartPage.itemAdded1.innerText).eql(LABELS.ITEM_ONE)
    })

    test ('Add multiple items to the shopping cart' , async t=> {
        await inventoryPage.addItemToCart1()
        await inventoryPage.addItemToCart2()
        await inventoryPage.navigateToShoppingCart()
        await t.expect(shoppingCartPage.itemAdded1.innerText).eql(LABELS.ITEM_ONE)
        await t.expect(shoppingCartPage.itemAdded2.innerText).eql(LABELS.ITEM_TWO)

    })



