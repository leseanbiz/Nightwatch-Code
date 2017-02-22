//Load excel file and access the correct sheet within for the query type used.
//All FlexiQuery test pass data is housed in one file and parsed into different sheets using 'workbook.sheetNames[#]' based on query type.
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/Services tests/Interactive411 test data.xlsx');
var first_sheet_name = workbook.SheetNames[1];
var worksheet = workbook.Sheets[first_sheet_name];

/*
TO DO:
turn large IF-else into a function
change var to let or const
change IF-elses into a switch case?
all arrays can use the same index
*/

//Declare variables for input columns
var jobCodesI = [];
var firstNamesI = [];
var lastNamesI =[];
var busNamesI =[];
var addressesI =[];
var citiesI =[];
var statesI =[];
var zipsI =[];
var areaCodesI =[];
var trunksI =[];
var linesI =[];
var searchPilotI =[];
var initialI =[];
var suppressedI =[];

//Declare variables for results columns

var firstNamesR =[];
var lastNamesR =[];
var busNamesR =[];
var addressesR =[];
var citiesR =[];
var statesR =[];
var zipsR =[];
var phonesR =[];

//Declare variables for  array indexes 
var i = 0;
var iR = 0;
var test = "";

//define function cellParser
function cellParser(z){
        switch (z.indexOf){
            case 'A':
                jobCodesI[i] = worksheet[z].v;
            case 'B':
                firstNamesI[i] = worksheet[z].v;
            case 'C':
                lastNamesI[i] = worksheet[z].v;
            case 'D':
                busNamesI[i] = worksheet[z].v;
            case 'E':
                addressesI[i] = worksheet[z].v;
            case 'F':
                citiesI[i] = worksheet[z].v;
            case 'G':
                statesI[i] = worksheet[z].v;
            case 'H':
                zipsI[i] = worksheet[z].v;
            case 'I':
                areaCodesI[i] = worksheet[z].v;
            case 'J':
                trunksI[i] = worksheet[z].v;
            case 'K':
                linesI[i] = worksheet[z].v;
            case 'L':
                searchPilotI[i] = worksheet[z].v;
            case 'M':
                initialI[i] = worksheet[z].v;
            case 'N':
                suppressedI[i] = worksheet[z].v;
            case 'O':
                firstNamesR[iR] = worksheet[z].v;
            case 'P':
                lastNamesR[iR] = worksheet[z].v;
            case 'Q':
                busNamesR[iR] = worksheet[z].v;
            case 'R':
                addressesR[iR] = worksheet[z].v;
            case 'S':
                citiesR[iR] = worksheet[z].v;
            case 'T':
                statesR[iR] = worksheet[z].v;
            case 'U':
                zipsR[iR] = worksheet[z].v;
            case 'V':
                phonesR[iR] = worksheet[z].v;
            }
    }

//NightwatchJS browser control code block
module.exports = {
'Interactive 411 Residential Test' : function (browser) {
    
    //Opens Browser and navigates directly to client portal, logs in and navigates to FlexiQuery.
    browser
        .url('https://secure.pacificeast.com/ClientPortal/PortalLogin.aspx?')
        .waitForElementVisible('body', 1000)
        .setValue('input[id="bodyHolder_usernameTxt"]',"test@pacificcorp.com")
        .setValue('input[id="bodyHolder_passwordTxt"]',"s1mps0n")
        .click('input[id="bodyHolder_logIn"]')
        .click('a[id="mm_hyp_main_2"]')
        .click('a[id="mm_hyp_sub_2_01"]')
        .waitForElementVisible('body', 1000)
        
        //Switches the highlighted window to FlexiQuery and verifies it with the input field and title
        browser.window_handles(function(result) {
        var handle = result.value[1];
        browser.switchWindow(handle);
        });
        browser.waitForElementVisible('input[id="firstName"]', 10000)
        browser.assert.title("Interactive411 - PacificEast")
        //browser.click('input[id="useRouting"]');
        //browser.click('input[id="showNonPublished"]');
        //browser.click('input[id="useFirstInitial"]');
 
    //Series of If..Else statements in the for loop that looks through the file and stores any non-empty cell in a array based on column letter. 
    for (z in worksheet) 
    {
        
        //skips header rows based off of row #(1 & 2).
        //MAKE A FUNCTION

        if (z.includes('1' || '2')) continue;
        /*
        if (z == 'A1' ||z == 'B1' ||z == 'C1' ||z == 'D1' ||z == 'E1' ||z == 'F1' ||z == 'G1' ||z == 'H1' 
        ||z == 'I1' ||z == 'J1' ||z == 'K1' ||z == 'L1' ||z == 'M1' ||z == 'N1' ||z == 'O1' ||z == 'P1' 
        ||z == 'Q1'||z == 'R1'||z == 'S1'||z == 'T1' ||z == 'U1' ||z == 'V1' ||z == 'A2' ||z == 'B2' ||z == 'C2' ||z == 'D2' 
        ||z == 'E2' ||z == 'F2' ||z == 'G2' ||z == 'H2' ||z == 'I2' ||z == 'J2' ||z == 'K2' 
        ||z == 'L2' ||z == 'M2' ||z == 'N2' ||z == 'O2' ||z == 'P2'||z == 'Q2'||z == 'R2'
        ||z == 'S2'||z == 'T2' ||z == 'U2' ||z == 'V2') continue;
        */
                                                            
                        //Waits for the input Phone for a maximum of 10 seconds.
                        browser.waitForElementVisible('input[id="firstName"]', 10000);
                                                
                        //Clears the job code field that isn't cleared by 'clear input' or 'clear results' Then enters the phone number and job code.
                        browser.clearValue('input[id="jobCode"]');
                        browser.setValue('input[id="jobCode"]',jobCodesI[i]);
                        
                        //Only enters value in field if the cell does not conatin "blank". 
                        //This method was used to avoid empty cells entering "undefined" and causing false negatives.
                        if(firstNamesI[i] != "blank")
                        {
                            browser.setValue('input[id="firstName"]',firstNamesI[i]);
                        }
                        
                        if(lastNamesI[i] != "blank" )
                        {
                            browser.setValue('input[id="lastName"]',lastNamesI[i]);
                        }
                        
                        if(busNamesI[i] != "blank")
                        {
                            browser.setValue('input[id="businessName"]',busNamesI[i]);
                        }
                        
                        if(addressesI[i] != "blank")
                        {
                            browser.setValue('input[id="address"]',addressesI[i]);
                        }    
                        
                        if(citiesI[i] != "blank")
                        {
                            browser.setValue('input[id="city"]',citiesI[i]);
                        }    
                        
                        if(statesI[i] != "blank")
                        {
                        browser.useXpath();
                        browser.setValue('//*[@id="state"]',statesI[i]);
                        }    
                        
                        if(zipsI[i] != "blank")
                        {
                        browser.useCss();
                        browser.setValue('input[id="postalCode"]',zipsI[i]); 
                        }
                        
                        if(areaCodesI[i] != "blank")
                        {
                        browser.useCss();
                        browser.setValue('input[id="phoneNpa"]',areaCodesI[i]); 
                        }
                        
                        if(trunksI[i] != "blank")
                        {
                        browser.useCss();
                        browser.setValue('input[id="phoneNxx"]',trunksI[i]); 
                        }
                        
                        if(linesI[i] != "blank")
                        {
                        browser.useCss();
                        browser.setValue('input[id="phoneLine"]',linesI[i]); 
                        }
                        
                        //Need to find a way to verify if 'checked' element is present in the button html OR if the text 'checked' is present and then click only if it isn't against the column value.
                        //leaving this alone for a little while. will come back to it. 6-2-16
                        /*
                        if(searchPilotI[t] != "blank" && searchPilotI[t] != "Off")
                        {
                        browser.useCss();
                        browser.click('input[id="useRouting"]');
                        }
                        
                        if(z.indexOf ('M') != -1)
                        {
                            initialI[u] = worksheet[z].v;
                            console.log(initialI[u]);
                        }
                        
                        if(z.indexOf ('N') != -1)
                        {
                            suppressedI[v] = worksheet[z].v;
                            console.log(suppressedI[v]);
                        }
                        */
                        
                        //Query is ran and waits for Results to be present before verifying text.
                        browser.useXpath();
                        browser.click('/html/body/form/table/tbody/tr[1]/td/table[4]/tbody/tr[1]/td[2]/table[3]/tbody/tr[1]/td[4]/img[1]');
                        browser.useCss();
                        browser.waitForElementVisible('table[id="resultsGrid"]', 10000);
                       
                        
                        
                        
                        
                        //Only applies either business name or first/last based on If..Else statement.
                        //Only verifies text if cell does not contain "blank"
                        //if(busNamesI[kR] == "blank")
                        
                        if (firstNamesR != "blank")
                        {
                            {
                                browser.verify.containsText('table[id="resultsGrid"]',firstNamesR[iR],"First Name found in results for: " + jobCodesI[i]);    
                            }
                            if(lastNamesR != "blank")
                            {
                                browser.verify.containsText('table[id="resultsGrid"]',lastNamesR[iR],"Last Name found in results for: " + jobCodesI[i]);
                            }
                        }       
                        else
                        {
                            if (busNamesR != "blank") 
                            {
                                browser.verify.containsText('table[id="resultsGrid"]',busNamesR[iR],"Business Name found in results for: " + jobCodesI[i]);    
                            }
                                
                        }
                        
                        if (addressesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',addressesR[iR],"Address found in results for: " + jobCodesI[i]);    
                        }
                        if (citiesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',citiesR[iR],"City Name found in results for: " + jobCodesI[i]);    
                        }
                        if (statesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',statesR[iR],"State Name found in results for: " + jobCodesI[i]);    
                        }
                        
                        
                        //Has to use Xpath to check the phone number and zip without formatting causing it to fail incorrectly.
                        //currently these 2 fail on JobCode #7. Need to dig in and find the reason the xpath element can't be found.
                        if (zipsR != "blank") 
                        {
                            if (zipsR[iR] == "Postal") 
                            {
                                browser.useCss();
                                browser.verify.containsText('table[id="resultsGrid"]',zipsR[iR],"Empty Cell containing " + zipsR[iR] + " found in results for: " + jobCodesI[i]);        
                            }
                            
                            else
                            {
                                //browser.useXpath();
                                //browser.verify.attributeContains('//*[@id="resultsGrid"]/tbody/tr[2]/td[7]/a','onclick',zipsR[oR],"Zip Code found in results for: " + jobCodesI[i]);
                                browser.useCss();
                                browser.verify.containsText('table[id="resultsGrid"]',zipsR[iR],"Zip Code found in results for: " + jobCodesI[i]);
                            }    
                        }
                        
                        //checks to see if cell conatins "blank" or filler value to determine to use Css selector or Xpath. 
                        if (phonesR != "blank") 
                        {
                            if(phonesR[pR] == "Phone")
                            {
                                browser.useCss();
                                browser.verify.containsText('table[id="resultsGrid"]',phonesR[iR],"Empty Cell containing " + phonesR[iR] + " found in results for: " + jobCodesI[i]);
                            }
                            else
                            {
                                //browser.useXpath();
                                //browser.verify.attributeContains('//*[@id="resultsGrid"]/tbody/tr[2]/td[8]/a','onclick',phonesR[pR],"Phone Number found in results for: " + jobCodesI[i]);
                                browser.useCss();
                                browser.verify.containsText('table[id="resultsGrid"]',phonesR[iR],"Phone Number found in results for: " + jobCodesI[i]);
                            }    
                        }
                        
                        //possibly one day remove the clear results and before browser.end(); include savings the results file somewhere for verification later.
                        //Clears input and results
                        browser.useCss();
                        browser.waitForElementVisible('body', 1000);
                        browser.useXpath();
                        browser.click('/html/body/form/table/tbody/tr[1]/td/table[4]/tbody/tr[1]/td[2]/table[3]/tbody/tr[1]/td[4]/img[2]');
                        browser.useCss();
                        
                        //used in attempt to reset the check boxes
                        //browser.refresh();
                        //browser.keys("Space");
                      
                        //browser.click('input[id="btnClearResults"]');
                        browser.waitForElementVisible('body', 1000);
                                                
                        //incrementing all array indexes. Can all arrays use the same index(i)?
                        i++;
                        iR++;
                
    }
    browser.end();                                 
  }
 }
   
                                        
