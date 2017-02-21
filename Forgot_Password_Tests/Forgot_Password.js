//NightwatchJS browser control code block
module.exports = {
'Forgot Password?' : function (browser) {
    
    //Opens Browser and navigates directly to client portal, logs in and navigates to FlexiQuery.
    browser
        .url('http://www.pacificeast.com')
        .waitForElementVisible('body', 1000)
        .click('a[href="https://secure.pacificeast.com/clientportal/"]')
        
        //Switches the highlighted window to work orser submission window and verifies it with the title
        browser.window_handles(function(result) {
        var handle = result.value[1];
        browser.switchWindow(handle);
        });
        browser.waitForElementVisible('body', 10000)
        browser.assert.title("Client Portal Login - PacificEast")
	    

        //verify "invalid username/password combination"
        .setValue('input[id="bodyHolder_usernameTxt"]',"test@pacificcorp.com")
        .setValue('input[id="bodyHolder_passwordTxt"]',"1234")
        .click('input[id="bodyHolder_logIn"]')
        .verify.containsText('span[id="bodyHolder_loginResult"]', "Invalid username/password combination.")
        
        //verify asterick beside username box when it is missing @ symbol
        .clearValue('input[id="bodyHolder_usernameTxt"]')
        .setValue('input[id="bodyHolder_usernameTxt"]',"test")
        .click('input[id="bodyHolder_logIn"]')
        .verify.containsText('span[id="bodyHolder_userValidator"]', "*")
        
        //click on forgot your password
        .clearValue('input[id="bodyHolder_usernameTxt"]')
        .setValue('input[id="bodyHolder_usernameTxt"]',"test@test.com")
        .click('a[id="bodyHolder_forgotPwdLnkBtn"]')
        .waitForElementVisible('input[id="bodyHolder_fpUsernameTxt"]', 10000)
        
        
        //verify asterick beside username box when it is missing @ symbol
        .clearValue('input[id="bodyHolder_fpUsernameTxt"]')
        .setValue('input[id="bodyHolder_fpUsernameTxt"]',"test")
        .click('input[id="bodyHolder_sendPwdBtn"]')
        .verify.containsText('span[id="bodyHolder_RegularExpressionValidator1"]', "*")

        
        //verify "The specified username could not be found"
        .clearValue('input[id="bodyHolder_fpUsernameTxt"]')
        .setValue('input[id="bodyHolder_fpUsernameTxt"]',"test@test.123")
        .click('input[id="bodyHolder_sendPwdBtn"]')
        .verify.containsText('span[id="bodyHolder_forgotPwdLbl"]', "The specified username could not be found")


        //verify "Your account is currently inactive. Please contact your user administrator or technical support."
        .clearValue('input[id="bodyHolder_fpUsernameTxt"]')
        .setValue('input[id="bodyHolder_fpUsernameTxt"]',"ghalladay@pacificeast.com")
        .click('input[id="bodyHolder_sendPwdBtn"]')
        .verify.containsText('span[id="bodyHolder_forgotPwdLbl"]', "Your account is currently inactive. Please contact your user administrator or technical support.")
        
        //verify "A password reset link has been sent to the specified email address. If it does not arrive shortly, please call us and we will reset your password for you."
        .clearValue('input[id="bodyHolder_fpUsernameTxt"]')
        .setValue('input[id="bodyHolder_fpUsernameTxt"]',"ljohnson@pacificeast.com")
        .click('input[id="bodyHolder_sendPwdBtn"]')
        .verify.containsText('span[id="bodyHolder_forgotPwdLbl"]', "A password reset link has been sent to the specified email address. If it does not arrive shortly, please call us and we will reset your password for you.")
        
        //click cancel and verify that the user is returned to a login page
        .click('input[id="bodyHolder_cancelBtn"]')
        browser.assert.title("Client Portal Login - PacificEast")
        //notes: if "test" is in the username form the  forgot yourpassword button doesn't work. It works after a . and atleast 2 letters are in the username box.
        
        
        .end()
  }
 }
   
                                        
