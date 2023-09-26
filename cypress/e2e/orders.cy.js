const loginPage = require('../page-objects/login-page');
describe('Validate that an order can be checkout', () => {
  it('test1', () => {
    //1. Open browser to https://www.youngliving.com/us/en
    cy.visit('https://www.youngliving.com/us/en');

    //2. Login (using the credentials you create manual)
    loginPage.login();

    //4. Click to view shopping cart
    //5. Click checkout
    //6. Click on Continue
    //7. Click on Continue Without Sponsor
    //8. Fill out all the fields under Shipping Address section (all the required fields)
    //9. Click Continue
    //10. If Verify Address pop up is present Select any(Original or Suggestions).
    //11. Click on close button for Verify Address pop up if it is present
    //12. Select a shipping Method (you can select address check box
    //13. Select and fill out Payment Method (Credit Card)
    //14. Click on Check Box “By checking this box I agree to the Terms and Conditions found here.”
    //13. DO NOT SUBMIT ORDER. This test is done.
  });
});
