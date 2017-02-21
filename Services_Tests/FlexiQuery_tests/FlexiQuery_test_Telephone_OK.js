//Load excel file and access the correct sheet within for the query type used.
//All FlexiQuery test pass data is housed in one file and parsed into different sheets using 'workbook.sheetNames[#]' based on query type.
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/Services tests/FlexiQuery test data.xlsx');
var first_sheet_name = workbook.SheetNames[3];
var worksheet = workbook.Sheets[first_sheet_name];

//Declare variables for input columns
var jobCodesI = [];
var phonesI = [];

//Declare variables for results columns
var firstNamesR = [];
var lastNamesR =[];
var busNamesR =[];
var addressesR =[];
var citiesR =[];
var statesR =[];
var zipsR =[];


//Declare variables for  array indexes 
var i = 1;
var j = 1;
var k = 1;
var l = 1;
var m = 1;
var n = 1;
var o = 1;
var p = 1;
var q = 1;

//Enter NightwatchJS browser control code
module.exports = {
'FlexiQuery Test Telephone Query' : function (browser) {
    
    //Opens Browser and navigates directly to client portal, logs in and navigates FlexiQuery.
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
        if (z.indexOf('1') >= 0 || z.indexOf('2') >= 0) continue;  
    
        if (z.indexOf('A') != -1) 
        {
            jobCodesI[i] = worksheet[z].v;
            console.log(jobCodesI[i]);
            //i++;
        }        
            else if (z.indexOf('B') != -1)
            {
                    phonesI[j] = worksheet[z].v;
                    console.log(phonesI[j]);
                    //j++;
            }       
                    else if (z.indexOf('C') != -1)
                    {
                        firstNamesR[k] = worksheet[z].v;
                        console.log(firstNamesR[k]);
                        //k++;
                    }
                        else if (z.indexOf('D') != -1)
                        {
                            lastNamesR[l] = worksheet[z].v;
                            console.log(lastNamesR[l]);
                            //l++;
                        }    
                            else if (z.indexOf('E') != -1)
                            {
                                busNamesR[m] = worksheet[z].v;
                                console.log(busNamesR[m]);
                                //m++;
                            }
                                
                                else if (z.indexOf('F') != -1)
                                {
                                    addressesR[n] = worksheet[z].v;
                                    console.log(addressesR[n]);
                                    //n++;
                                }    
                                    else if (z.indexOf('G') != -1)
                                    {
                                        citiesR[o] = worksheet[z].v;
                                        console.log(citiesR[o]);
                                        //o++;
                                    }                                    
                                        else if(z.indexOf ('H') != -1)
                                        {
                                            statesR[p] = worksheet[z].v;
                                            console.log(statesR[p]);
                                            //h++;
                                        }
                                            else if (z.indexOf('I') != -1)
                                            {
                                                zipsR[q] = worksheet[z].v;
                                                console.log(zipsR[q]);
                                                
                                                //Waits for the input Phone for a maximum of 10 seconds.
                                                browser.waitForElementVisible('input[id="phone"]', 10000);
                                                
                                                //Clears the job code field that isn't cleared by 'clear input' or 'clear results' Then enters the phone number and job code.
                                                browser.clearValue('input[id="jobCode"]');
                                                browser.setValue('input[id="jobCode"]',jobCodesI[i]);
                                                browser.setValue('input[id="phone"]',phonesI[j]);
                                                browser.click('input[id="btnTelephone"]');
                                                browser.waitForElementVisible('table[id="resultsGrid"]', 10000);
                                                
                                                //Only applies either business name or first/last based on If..Else statement.
                                                if(busNamesR[k] == null)
                                                {
                                                    browser.verify.containsText('table[id="resultsGrid"]',firstNamesR[k],"First Name found in results for: " + jobCodesI[i]);
                                                    browser.verify.containsText('table[id="resultsGrid"]',lastNamesR[l],"Last Name found in results for: " + jobCodesI[i]);
                                                }
                                                else
                                                {
                                                    browser.verify.containsText('table[id="resultsGrid"]',busNamesR[m],"Business Name found in results for: " + jobCodesI[i]);    
                                                }
                                                browser.verify.containsText('table[id="resultsGrid"]',addressesR[n],"Address found in results for: " + jobCodesI[i]);
                                                browser.verify.containsText('table[id="resultsGrid"]',citiesR[o],"City Name found in results for: " + jobCodesI[i]);
                                                browser.verify.containsText('table[id="resultsGrid"]',statesR[p],"State Name found in results for: " + jobCodesI[i]);
                                                
                                                //Has to use Xpath to check the phone number and zip without formatting causing it to fail incorrectly.
                                                browser.useXpath();
                                                browser.verify.attributeContains('//*[@id="resultsGrid"]/tbody/tr[2]/td[7]/a','onclick',zipsR[q],"Zip Code found in results for: " + jobCodesI[i]);
                                                browser.verify.attributeContains('//*[@id="resultsGrid"]/tbody/tr[2]/td[8]/a','onclick',phonesI[j],"Phone Number found in results for: " + jobCodesI[i]);
                                                browser.useCss();
                                                
                                                //Clears input and results
                                                browser.waitForElementVisible('body', 1000);
                                                browser.click('input[id="btnClear"]');
                                                browser.click('input[id="btnClearResults"]');
                                                browser.waitForElementVisible('body', 1000);
                                                
                                                //possibly one day remove the clear results and before browser.end(); include savings the results file somewhere for verification later.
                                                //incrementing all array indexes. Can all arrays use the same index(i)?
                                                i++;
                                                j++;
                                                k++;
                                                l++;
                                                m++;
                                                n++;
                                                o++;
                                                p++;
                                                q++;
                                            }
    }
    browser.end();                                 
  }
 }
   
                                        
