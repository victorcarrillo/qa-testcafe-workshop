import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import checkoutPage from '../pages/CheckoutPage'
import {URLS,CREDENTIALS,MESSAGES,LABELS, TEST_DATA} from '../DataProvider/Constants' 

fixture ('Checkout feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t=> {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(inventoryPage.productTitle.exists).ok()
        await inventoryPage.addItemToCart1()
        await inventoryPage.navigateToShoppingCart()
        await t.expect(shoppingCartPage.itemAdded1.innerText).eql(LABELS.ITEM_ONE)
        await shoppingCartPage.clickCheckout()
    })

    test ('Continue with missing mail information ', async t=> {
      
        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_INFORMATION)
        await checkoutPage.clickContinue()
        await t.expect(checkoutPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.MISSING_FIRST_NAME)
        await checkoutPage.fillFirstNameField(TEST_DATA.FIRST_NAME)
        await checkoutPage.clickContinue()
        await t.expect(checkoutPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.MISSING_LAST_NAME)
        await checkoutPage.fillLastNameField(TEST_DATA.LAST_NAME)
        await checkoutPage.clickContinue()
        await t.expect(checkoutPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.MISSING_POSTAL_CODE)
    })

    test ('Fill users information ', async t=> {
        
        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_INFORMATION)
        await checkoutPage.validMailAddressRegistration(TEST_DATA.FIRST_NAME,TEST_DATA.LAST_NAME,TEST_DATA.POSTAL_CODE)
        await checkoutPage.clickContinue()
        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_OVERVIEW)
    })

    test ('Final Order Items ' , async t=> {

        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_INFORMATION)
        await checkoutPage.validMailAddressRegistration(TEST_DATA.FIRST_NAME,TEST_DATA.LAST_NAME,TEST_DATA.POSTAL_CODE)
        await checkoutPage.clickContinue()
        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_OVERVIEW)
        await t.expect(checkoutPage.itemAdded.innerText).eql(LABELS.ITEM_ONE)
    })

    test ( 'Complete a Purchase' , async t=> {
        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_INFORMATION)
        await checkoutPage.validMailAddressRegistration(TEST_DATA.FIRST_NAME,TEST_DATA.LAST_NAME,TEST_DATA.POSTAL_CODE)
        await checkoutPage.clickContinue()
        await t.expect(checkoutPage.checkoutTitle.innerText).eql(LABELS.CHECKOUT_OVERVIEW)
        await t.expect(checkoutPage.itemAdded.innerText).eql(LABELS.ITEM_ONE)
        await checkoutPage.clickFinishOrder()
        await t.expect(checkoutPage.completeHeader.innerText).eql(LABELS.SUCCESSFUL_PURCHASE)
    })