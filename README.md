Project Summary :
This project is a small demo how to test a Webapp application using Testcafe tools. 

Project Structure:
We are using a Page Object Model based framework in order to organize and execute our tests.

Overview : 

QA-Testcafe-Workshop
|-node_modules
|-pom_structure
|--DataProvider
|--pages
|--tests
|-reports


First installation requirements : 

1. Npm installation : You can go to https://www.npmjs.com/
2. Node.js installation : https://nodejs.org/
3. Testcafe Installation : npm install testcafe
4. Dotenv Installation : npm install dotenv


Instructions how to run the test:  

For execution run : 

    1. npm run test-all-chrome - To run all tests in chrome
    2. npm run test-login-chrome - To run all tests from Login section
    3. npm run test-shopping-cart-chrome - To run all tests from Shopping cart section
    4. npm run test-checkout-chrome - To run all tests from Checkout section
    5. npm run test-all-multibrowser - To run all tests in a multibrowser option (will run the tests from the installed browsers on the local machine.

Following the same pattern as mentioned above , you can run the same modules but here each one of the instructions will create a json report in the ./reports/ section.

    1. npm run test-all-chrome-report
    2. npm run test-login-chrome-report
    3. npm run test-shopping-cart-chrome-report
    4. npm run test-checkout-chrome-report
    5. npm run test-all-multibrowser-report