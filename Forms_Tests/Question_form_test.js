if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/forms/Forms test values - Ask a Question.xlsx');

var names = [];
var companies = [];
var phones = [];
var emails = [];
var questions = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 1;
var j = 1;
var k = 1;
var l = 1;
var m = 1;
module.exports = {
'Ask a Question Form Submission' : function (browser) {
    
    browser
        .url('http://www.pacificeast.com/resources/question.aspx?bypassval=y')
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
                browser.setValue('input[id="cphContent_txtName"]',names[i]);
                i++;
                break;
            
            case (z.indexOf('B') != -1):
                companies[j] = worksheet[z].v;
                console.log(companies[j]);  
                browser.setValue('input[id="cphContent_txtCompany"]',companies[j]);
                j++;
                break;
                
            case (z.indexOf('C') != -1):
                phones[k] = worksheet[z].v;
                console.log(phones[k]);  
                browser.setValue('input[id="cphContent_txtPhone"]',phones[k]);
                k++;
                break;
                
            case (z.indexOf('D') != -1):
                emails[l] = worksheet[z].v;
                console.log(emails[l]);  
                browser.setValue('input[id="cphContent_txtEmail"]',emails[l]);
                l++;
                break;
                
            case (z.indexOf('E') != -1):
                questions[m] = worksheet[z].v;
                console.log(questions[m]);  
                browser.setValue('textarea[id="cphContent_txtQuestion"]',questions[m]);
                browser.click('input[id="cphContent_btnSubmit"]');
                browser.waitForElementVisible('input[id="cphContent_btnAnother"]', 10000);
                //when running this test 3 assertions will fail due to these will not be available.
                browser.click('input[id="cphContent_btnAnother"]');
                browser.waitForElementVisible('input[id="cphContent_txtName"]', 10000);
                m++;
                break;
                //console.log("The title for cell " + z + " is " + Titles[j] + " is array value" + j);
                //browser.waitForElementVisible('body',10000);
                //browser.assert.title(Titles[j]);
             default:
                console.log("switch default has been triggered");
            }    

        }
        
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

