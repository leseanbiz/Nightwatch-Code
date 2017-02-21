if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/forms/Forms test values - Contact Us.xlsx');

var names = [];
var phones = [];
var emails = [];
var comments = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 1;
var j = 1;
var k = 1;
var l = 1;
module.exports = {
'Learning Center Form Submission' : function (browser) {
    
    browser
        .url('http://www.pacificeast.com/about_us/contact_us.aspx')
        .waitForElementVisible('body', 1000)
        
        //Still need to add in navigation from the home page.
        //.assert.title("Data Services, Hygiene, Enhancement & Append - PacificEast")
        //.verify.hidden('a[id="A21"]','found learning center and clicked it!')
        //.isVisible('a[id="A21"]')
        

    for (z in worksheet)  
        {
        switch(true){
            case (z.indexOf('A') != -1):
                names[i] = worksheet[z].v;
                console.log(names[i]);
                browser.setValue('input[id="cphContent_cfLearningCenter_txtName"]',names[i]);
                i++;
                break;
            
            case (z.indexOf('B') != -1):
                phones[j] = worksheet[z].v;
                console.log(phones[j]);  
                browser.setValue('input[id="cphContent_cfLearningCenter_txtPhone"]',phones[j]);
                j++;
                break;
                
            case (z.indexOf('C') != -1):
                emails[k] = worksheet[z].v;
                console.log(emails[k]);  
                browser.setValue('input[id="cphContent_cfLearningCenter_txtEmail"]',emails[k]);
                k++;
                break;
                
            case (z.indexOf('D') != -1):
                comments[l] = worksheet[z].v;
                console.log(comments[l]);  
                browser.setValue('textarea[id="cphContent_cfLearningCenter_txtComments"]',comments[l]);
                browser.click('input[id="cphContent_cfLearningCenter_btnSubmit"]');
                browser.waitForElementVisible('input[id="cphContent_cfLearningCenter_txtName"]', 10000);
                l++;
                break;
                //console.log("The title for cell " + z + " is " + Titles[j] + " is array value" + j);
                //browser.waitForElementVisible('body',10000);
                //browser.assert.title(Titles[j]);
             default:
                console.log("switch default has been triggered");
            }    

        }
        browser.end();
  }
}


/*
module.exports = {
    'Demo test Google' : function(browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=test]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};*/

