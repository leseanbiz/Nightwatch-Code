//Load excel file and access the correct sheet within for the query type used.
//All FlexiQuery test pass data is housed in one file and parsed into different sheets using 'workbook.sheetNames[#]' based on query type.
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/Services tests/FlexiQuery test data.xlsx');
var first_sheet_name = workbook.SheetNames[9];
var worksheet = workbook.Sheets[first_sheet_name];

//Declare variables for input columns
var jobCodesI = [];
var binsI = [];


//Declare variables for results columns

var namesR = [];
var locationsR =[];
var phonesR = [];

//Declare variables for  array indexes 
var i = 0;
var j = 0;
var iR = 0;
var jR = 0;
var kR = 0;
var lR = 0;


//NightwatchJS browser control code block
module.exports = {
'FlexiQuery Test IP Query' : function (browser) {
    
    //Opens Browser and navigates directly to client portal, logs in and navigates to FlexiQuery.
    browser
        .url('https://secure.pacificeast.com/ClientPortal/PortalLogin.aspx?')
        .waitForElementVisible('body', 1000)
        .setValue('input[id="bodyHolder_usernameTxt"]',"test@pacificcorp.com")
        .setValue('input[id="bodyHolder_passwordTxt"]',"s1mps0n")
        .click('input[id="bodyHolder_logIn"]')
        .click('a[id="mm_hyp_main_2"]')
        .click('a[id="mm_hyp_sub_2_10"]')
        .waitForElementVisible('body', 1000)
        
        //Switches the highlighted window to FlexiQuery and verifies it with the input field and title
        browser.window_handles(function(result) {
        var handle = result.value[1];
        browser.switchWindow(handle);
        });
        browser.waitForElementVisible('input[id="firstName"]', 10000)
        browser.assert.title("PacificEast :: FlexiQuery")

 
    //Series of If..Else statements in the for loop that looks through the file and stores any non-empty cell in a array based on column letter. 
    for (z in worksheet) 
    {
        
        //skips header rows based off of row #(1 & 2).
        if (z == 'A1' ||z == 'B1' ||z == 'C1' ||z == 'D1' ||z == 'E1' ||z == 'F1' ||z == 'G1' ||z == 'H1' ||z == 'I1' ||z == 'J1' ||z == 'K1' ||z == 'L1' ||z == 'M1' ||z == 'N1' ||z == 'O1' ||z == 'P1' ||z == 'A2' ||z == 'B2' ||z == 'C2' ||z == 'D2' ||z == 'E2' ||z == 'F2' ||z == 'G2' ||z == 'H2' ||z == 'I2' ||z == 'J2' ||z == 'K2' ||z == 'L2' ||z == 'M2' ||z == 'N2' ||z == 'O2' ||z == 'P2') continue;
        
        //Parse input values from Excel Spreadsheet into arrays.
        if (z.indexOf('A') != -1) 
        {
            jobCodesI[i] = worksheet[z].v;
            console.log(jobCodesI[i] + i);
        }        

        else if (z.indexOf('B') != -1)
        {
            binsI[j] = worksheet[z].v;
            console.log(binsI[j]);
        }
        
                //Parse results from Excel Spreadsheet into arrays per value
                else if (z.indexOf('C') != -1)
                {
                        namesR[iR] = worksheet[z].v;
                        //console.log("Results first name is: " + firstNamesR[iR]);
                }
                                        
                else if (z.indexOf('D') != -1)
                {
                        locationsR[jR] = worksheet[z].v;
                        //console.log("Results business name is: " + busNamesR[kR]);
                }
                            
                else if (z.indexOf('E') != -1)
                {
                        phonesR[kR] = worksheet[z].v;
                        //console.log("Results phone is: " + phonesR[pR]);
                                                                                        
                        //Waits for the input Phone for a maximum of 10 seconds.
                        browser.waitForElementVisible('input[id="phone"]', 10000);
                                                
                        //Clears the job code field that isn't cleared by 'clear input' or 'clear results' Then enters the phone number and job code.
                        browser.clearValue('input[id="jobCode"]');
                        browser.setValue('input[id="jobCode"]',jobCodesI[i]);
                        
                        //Only enters value in field if the cell does not conatin "blank". 
                        //This method was used to avoid empty cells entering "undefined" and causing false negatives.
                        if(binsI[j] != "blank")
                        {
                            browser.setValue('input[id="bin"]',binsI[j]);
                        }
                        
                        //Query is ran and waits for Results to be present before verifying text.
                        browser.useCss();    
                        browser.click('input[id="btnBIN"]');
                        browser.waitForElementVisible('table[id="resultsGrid"]', 10000);
                       
                        //Only applies either business name or first/last based on If..Else statement.
                        //Only verifies text if cell does not contain "blank"
                        if (namesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',namesR[iR],"Name found in results for: " + jobCodesI[i]);    
                        }
                        if (locationsR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',locationsR[jR],"Age found in results for: " + jobCodesI[i]);    
                        }
                        if (phonesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',phonesR[kR],"Phone Number found in results for: " + jobCodesI[i]);
                        }
                        
                        //possibly one day remove the clear results and before browser.end(); include savings the results file somewhere for verification later.
                        //Clears input and results
                        browser.useCss();
                        browser.waitForElementVisible('body', 1000);
                        browser.click('input[id="btnClear"]');
                        browser.click('input[id="btnClearResults"]');
                        browser.waitForElementVisible('body', 1000);
                                                
                        //incrementing all array indexes. Can all arrays use the same index(i)?
                        i++;
                        j++;
                        iR++;
                        jR++;
                        kR++;
                        lR++;
                        
                }
    }
    browser.end();                                 
  }
 }
   
                                        
