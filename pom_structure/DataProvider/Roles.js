import { Role } from 'testcafe'
import loginPage from '../pages/LoginPage'
import {URLS,CREDENTIALS,MESSAGES} from '../DataProvider/Constants' 

export const regularAccUser = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await t
        .typeText(loginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(loginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(loginPage.loginButton);
}
,{perserveUrl:true});

export const invalidAccUser = Role( `${URLS.LOGIN_PAGE}`,async t => {
    await t
    .typeText(loginPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
    .typeText(loginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
    .click(loginPage.loginButton);
},{perserveUrl:true});
