import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_PAGE : 'https://www.saucedemo.com/'
}

export const CREDENTIALS ={
    VALID_USER : {
        USERNAME : process.env.USERNAME,
        PASSWORD : process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME : process.env.INVALID_USERNAME,
        PASSWORD : process.env.INVALID_PASSWORD
    }
}

export const MESSAGES ={
    ERROR_MESSAGES:{
        INVALID_LOGIN : 'Epic sadface: Username and password do not match any user in this service',
        MISSING_FIRST_NAME : 'Error: First Name is required',
        MISSING_LAST_NAME : 'Error: Last Name is required',
        MISSING_POSTAL_CODE :'Error: Postal Code is required'

    }

}

export const LABELS ={
    CHECKOUT_INFORMATION :'CHECKOUT: YOUR INFORMATION',
    CHECKOUT_OVERVIEW : 'CHECKOUT: OVERVIEW',
    SUCCESSFUL_PURCHASE : 'THANK YOU FOR YOUR ORDER',
    CART: 'YOUR CART',
    ITEM_ONE : 'Sauce Labs Backpack',
    ITEM_TWO : 'Sauce Labs Bike Light'

}

export const TEST_DATA ={
    FIRST_NAME : 'Victor',
    LAST_NAME :'Carrillo',
    POSTAL_CODE : '12345'
}