import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import roles, { invalidAccUser, regularAccUser } from '../DataProvider/Roles'
import {URLS,CREDENTIALS,MESSAGES} from '../DataProvider/Constants' 

fixture ('Login feature test')
    .meta('fixtureID', 'f-0001')
    .page(`${URLS.LOGIN_PAGE}`)
    

test
    .meta('testID','t-001') 
    ('Login with a valid user', async t=> {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(inventoryPage.productTitle.exists).ok()
    
})

test
    .meta('testID','t-002')
    ('Login with an invalid user', async t=> {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.invalidLoginMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)
})

test 
    .meta('testID','t-003')
    ('Logout from product Page' , async t=> {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(inventoryPage.productTitle.exists).ok()
    await inventoryPage.logout()
    await t.expect(loginPage.loginLogo.exists).ok()
})

test.skip ('Login with a valid user - Using Roles', async t=> {
    //Using Roles
    await t.useRole(regularAccUser)
    await t.expect(inventoryPage.productTitle.exists).ok() 
    
})

test.skip ('Login with an invalid user - Using Roles', async t=> {
    //Using Roles
    await t.useRole(invalidAccUser) 
    await t.expect(loginPage.invalidLoginMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)
})