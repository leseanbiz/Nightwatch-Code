if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/forms/Forms test values - Request a Document.xlsx');

var names = [];
var companies = [];
var emails = [];
var phones = [];
var docs =[];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
module.exports = {
'Request a Document Form Submission' : function (browser) {
    
    browser
        .url('http://www.pacificeast.com/resources/request.aspx?bypassval=y')
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
                emails[k] = worksheet[z].v;
                console.log(emails[k]);  
                browser.setValue('input[id="cphContent_txtEmail"]',emails[k]);
                k++;
                break;
                
            case (z.indexOf('D') != -1):
                phones[l] = worksheet[z].v;
                console.log(phones[l]);  
                browser.setValue('input[id="cphContent_txtPhone"]',phones[l]);
                l++;
                break;
                            
            case (z.indexOf('E') != -1):
                docs[m] = worksheet[z].v;
                console.log(docs[m]);
                browser.useXpath();  
                browser.setValue('//*[@id="cphContent_lstDocuments"]', docs[m]);
                browser.useCss();
                browser.click('input[id="cphContent_btnSubmit"]');
                browser.waitForElementVisible('input[id="cphContent_btnAnother"]', 10000);
                browser.click('input[id="cphContent_btnAnother"]');
                browser.waitForElementVisible('select[id="cphContent_lstDocuments"]', 10000);
                m++;
                break;
            
            default:
                console.log("switch default has been triggered");
            }    

        }
        
  }
}