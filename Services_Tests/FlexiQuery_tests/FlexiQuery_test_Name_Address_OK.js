//Load excel file and access the correct sheet within for the query type used.
//All FlexiQuery test pass data is housed in one file and parsed into different sheets using 'workbook.sheetNames[#]' based on query type.
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/Services tests/FlexiQuery test data.xlsx');
var first_sheet_name = workbook.SheetNames[1];
var worksheet = workbook.Sheets[first_sheet_name];

//Declare variables for input columns
var jobCodesI = [];
var firstNamesI = [];
var lastNamesI =[];
var busNamesI =[];
var addressesI =[];
var citiesI =[];
var statesI =[];
var zipsI =[];


//Declare variables for results columns

var firstNamesR = [];
var lastNamesR =[];
var busNamesR =[];
var addressesR =[];
var citiesR =[];
var statesR =[];
var zipsR =[];
var phonesR = [];

//Declare variables for  array indexes 
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var iR = 0;
var jR = 0;
var kR = 0;
var lR = 0;
var mR = 0;
var nR = 0;
var oR = 0;
var pR = 0;


//NightwatchJS browser control code block
module.exports = {
'FlexiQuery Test Name & Address Query' : function (browser) {
    
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
            //console.log(jobCodesI[i] + i);
        }        

        else if (z.indexOf('B') != -1)
        {
            firstNamesI[j] = worksheet[z].v;
            //console.log(firstNamesI[j]);
        }
        
        else if (z.indexOf('C') != -1)
        {
            lastNamesI[k] = worksheet[z].v;
            //console.log(lastNamesI[k] + k);
        }    
        
        else if (z.indexOf('D') != -1)
        {
            busNamesI[l] = worksheet[z].v;
            //console.log(busNamesI[l] + l);
        }
                        
        else if (z.indexOf('E') != -1)
        {
            addressesI[m] = worksheet[z].v;
            //console.log(addressesI[m]);
        }    
        
        else if (z.indexOf('F') != -1)
        {
            citiesI[n] = worksheet[z].v;
            //console.log(citiesI[n]);
        }                                    
                                
        else if(z.indexOf ('G') != -1)
        {
            statesI[o] = worksheet[z].v;
            //console.log(statesI[o]);
        }
                                
        else if(z.indexOf ('H') != -1)
        {
            zipsI[p] = worksheet[z].v;
            //console.log(zipsI[p]);
        }
                //Parse results from Excel Spreadsheet into arrays per value
                else if (z.indexOf('I') != -1)
                {
                        firstNamesR[iR] = worksheet[z].v;
                        //console.log("Results first name is: " + firstNamesR[iR]);
                }
                    
                else if (z.indexOf('J') != -1)
                {
                        lastNamesR[jR] = worksheet[z].v;
                        //console.log("Results last name is: " + lastNamesR[jR]);
                }
                        
                else if (z.indexOf('K') != -1)
                {
                        busNamesR[kR] = worksheet[z].v;
                        //console.log("Results business name is: " + busNamesR[kR]);
                }
                            
                else if (z.indexOf('L') != -1)
                {
                        addressesR[lR] = worksheet[z].v;
                        //console.log("Results address is: " + addressesR[lR]);
                }
                                
                else if (z.indexOf('M') != -1)
                {
                        citiesR[mR] = worksheet[z].v;
                        //console.log("Results city is: " + citiesR[mR]);
                }
                                    
                else if (z.indexOf('N') != -1)
                {
                        statesR[nR] = worksheet[z].v;
                        //console.log("Results state is: " + statesR[nR]);
                }
                                        
                else if (z.indexOf('O') != -1)
                {
                        zipsR[oR] = worksheet[z].v;
                        //console.log("Results zip is: " + zipsR[oR]);
                }
                
                else if (z.indexOf('P') != -1)
                {
                        phonesR[pR] = worksheet[z].v;
                        //console.log("Results phone is: " + phonesR[pR]);
                                                                                        
                        //Waits for the input Phone for a maximum of 10 seconds.
                        browser.waitForElementVisible('input[id="phone"]', 10000);
                                                
                        //Clears the job code field that isn't cleared by 'clear input' or 'clear results' Then enters the phone number and job code.
                        browser.clearValue('input[id="jobCode"]');
                        browser.setValue('input[id="jobCode"]',jobCodesI[i]);
                        
                        //Only enters value in field if the cell does not conatin "blank". 
                        //This method was used to avoid empty cells entering "undefined" and causing false negatives.
                        if(firstNamesI[j] != "blank")
                        {
                            browser.setValue('input[id="firstName"]',firstNamesI[j]);
                        }
                        
                        if(lastNamesI[k] != "blank" )
                        {
                            browser.setValue('input[id="lastName"]',lastNamesI[k]);
                        }
                        
                        if(busNamesI[l] != "blank")
                        {
                            browser.setValue('input[id="businessName"]',busNamesI[l]);
                        }
                        
                        if(addressesI[m] != "blank")
                        {
                            browser.setValue('input[id="address"]',addressesI[m]);
                        }    
                        
                        if(citiesI[n] != "blank")
                        {
                            browser.setValue('input[id="city"]',citiesI[n]);
                        }    
                        
                        if(statesI[o] != "blank")
                        {
                        browser.useXpath();
                        browser.setValue('//*[@id="state"]',statesI[o]);
                        }    
                        
                        if(zipsI[p] != "blank")
                        {
                        browser.useCss();
                        browser.setValue('input[id="postalCode"]',zipsI[p]); 
                        }
                        
                        //Query is ran and waits for Results to be present before verifying text.
                        browser.useCss();    
                        
                       
                        browser.click('input[id="btnNameAddress"]');
                        browser.waitForElementVisible('table[id="resultsGrid"]', 10000);
                       
                        
                        
                        
                        
                        //Only applies either business name or first/last based on If..Else statement.
                        //Only verifies text if cell does not contain "blank"
                        if(busNamesI[kR] == "blank")
                        {
                            if (firstNamesR != "blank") 
                            {
                                browser.verify.containsText('table[id="resultsGrid"]',firstNamesR[iR],"First Name found in results for: " + jobCodesI[i]);    
                            }
                            if(lastNamesR != "blank")
                            {
                                browser.verify.containsText('table[id="resultsGrid"]',lastNamesR[jR],"Last Name found in results for: " + jobCodesI[i]);
                            }
                        }
                        else
                        {
                            if (busNamesR != "blank") 
                            {
                                browser.verify.containsText('table[id="resultsGrid"]',busNamesR[kR],"Business Name found in results for: " + jobCodesI[i]);    
                            }
                                
                        }
                        
                        if (addressesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',addressesR[lR],"Address found in results for: " + jobCodesI[i]);    
                        }
                        if (citiesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',citiesR[mR],"City Name found in results for: " + jobCodesI[i]);    
                        }
                        if (statesR != "blank") 
                        {
                            browser.verify.containsText('table[id="resultsGrid"]',statesR[nR],"State Name found in results for: " + jobCodesI[i]);    
                        }
                        
                        
                        //Has to use Xpath to check the phone number and zip without formatting causing it to fail incorrectly.
                        //currently these 2 fail on JobCode #7. Need to dig in and find the reason the xpath element can't be found.
                        if (zipsR != "blank") 
                        {
                            if (zipsR[oR] == "Postal") 
                            {
                                browser.useCss();
                                browser.verify.containsText('table[id="resultsGrid"]',zipsR[oR],"Empty Cell containing " + zipsR[oR] + " found in results for: " + jobCodesI[i]);        
                            }
                            
                            else
                            {
                            browser.useXpath();
                            browser.verify.attributeContains('//*[@id="resultsGrid"]/tbody/tr[2]/td[7]/a','onclick',zipsR[oR],"Zip Code found in results for: " + jobCodesI[i]);
                            }    
                        }
                        
                        //checks to see if cell conatins "blank" or filler value to determine to use Css selector or Xpath. 
                        if (phonesR != "blank") 
                        {
                            if(phonesR[pR] == "Phone")
                            {
                                browser.useCss();
                                browser.verify.containsText('table[id="resultsGrid"]',phonesR[pR],"Empty Cell containing " + phonesR[pR] + " found in results for: " + jobCodesI[i]);
                            }
                            else
                            {
                                browser.useXpath();
                                browser.verify.attributeContains('//*[@id="resultsGrid"]/tbody/tr[2]/td[8]/a','onclick',phonesR[pR],"Phone Number found in results for: " + jobCodesI[i]);
                            }    
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
                        k++;
                        l++;
                        m++;
                        n++;
                        o++;
                        p++;
                        iR++;
                        jR++;
                        kR++;
                        lR++;
                        mR++;
                        nR++;
                        oR++;
                        pR++;
                }
    }
    browser.end();                                 
  }
 }
   
                                        
