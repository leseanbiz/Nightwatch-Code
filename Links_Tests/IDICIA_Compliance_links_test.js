if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/IDICIA Home page links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'IDICIA compliance Link Test' : function (browser) {

            /*If I can figure out how to feed .visible command an array value this should work.
            for (z in worksheet)  
            {
                if(z.indexOf('A') >-1 && z.indexOf('B') == -1 )
                {
                Links[i] = worksheet[z].v;
                i++;
                browser.verify.visible('a[href*=Links[i]]', 'here goes nothing');
                //This may need syntactical work to get the array to feed the .visible/hidden functions.
                }
            console.log("in for loop" + Links[i]);
            console.log("in for loop" + Links.length);
            }*/
            
    
    browser.url("http://www.idicia.com/compliance.html");
    browser.waitForElementVisible('body',1000);
    browser.verify.visible('a[href*="index.html"]','found index');
    browser.verify.visible('a[href*="solutions.html"]', 'found solutions');
    browser.verify.visible('a[href*="resources.html"]', 'found resources');
    browser.verify.visible('a[href*="contact-us.html"]','found contact us');
    browser.verify.hidden('a[href*="verification.html"]', 'found verification');
    browser.verify.hidden('a[href*="inspection.html"]','found inspection');
    browser.verify.hidden('a[href*="comparison.html"]','found comparison');
    browser.verify.hidden('a[href*="telecom.html"]','found telecom');
    browser.verify.hidden('a[href*="healthcare.html"]','found healthcare');
    browser.verify.hidden('a[href*="compliance.html"]','found compliance');
    browser.verify.hidden('a[href*="https://plus.google.com/+IDICIABeaverton"]','found G+');
    browser.verify.hidden('a[href*="https://www.linkedin.com/company/idicia"]','found LinkedIn');
    browser.verify.hidden('a[href*="blog.idicia.com"]','found blog');
    browser.verify.hidden('a[href*="https://twitter.com/4IDICIA?lang=en"]','found Twitter');
    browser.verify.visible('a[href*="pdf/IDICIA-PrivacyPolicy.pdf"]','found privacy policy');
    browser.verify.visible('a[href*="phone/index.html?devicelock=phone"]','found mobile site link');
    browser.end();
    }
    
}


/*
index.html
solutions.html
resources.html
contact-us.html
verification.html
inspection.html
https://plus.google.com/+IDICIABeaverton
https://www.linkedin.com/company/idicia
http://blog.idicia.com/
https://twitter.com/4IDICIA?lang=en
telified.html
comparison.html
pdf/IDICIA-PrivacyPolicy.pdf
phone/index.html?devicelock=phone
telecom.html
healthcare.html
compliance.html
*/