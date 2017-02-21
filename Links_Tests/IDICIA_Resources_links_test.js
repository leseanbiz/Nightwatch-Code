if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/IDICIA Home page links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'IDICIA Resources Link Test' : function (browser) {

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
            
    
    browser.url("http://www.idicia.com/resources.html");
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
    browser.verify.visible('a[href*="www.pacificeast.com/images/infographics/identity-fraud.jpg"]', 'found ID Fraud Infographic');
    browser.verify.visible('a[href*="www.pacificeast.com/images/infographics/internet-of-things.jpg"]', 'found ioT Infographic');
    browser.verify.visible('a[href*="www.pacificeast.com/resources/pdfs/OIX-ARPUofIdentity.pdf"]', 'found ARPU Infographic');
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/garth-froese/b/863/324"]', 'found Garth');
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/scott-rice/3/424/67"]', 'found Scott');
    browser.verify.hidden('a[href*="https://twitter.com/sgrrice"]', 'found Scott Twitter');
    browser.verify.hidden('a[href*="https://ca.linkedin.com/pub/tom-liebe/8/a59/83"]', 'found Tom');
    browser.verify.hidden('a[href*="https://ca.linkedin.com/pub/ken-dick/69/830/410"]', 'found Ken');
    browser.verify.hidden('a[href*="https://ca.linkedin.com/in/davemori"]', 'found Dave');
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/stacey-halligan/94/83b/a6b"]', 'found Stacy');
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/sue-duffy/11/462/35"]', 'found Sue');
    browser.verify.visible('a[href*="resources.html"]', 'found resources');
    browser.verify.visible('a[href*="contact-us.html"]','found contact us');
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
comparison.html
telecom.html
healthcare.html
compliance.html
https://plus.google.com/+IDICIABeaverton
https://www.linkedin.com/company/idicia
http://blog.idicia.com/
https://twitter.com/4IDICIA?lang=en
pdf/IDICIA-PrivacyPolicy.pdf
phone/index.html?devicelock=phone
http://www.pacificeast.com/images/infographics/identity-fraud.jpg
http://www.pacificeast.com/images/infographics/internet-of-things.jpg
http://openidentityexchange.org/
http://www.pacificeast.com/resources/pdfs/OIX-ARPUofIdentity.pdf
https://www.linkedin.com/pub/garth-froese/b/863/324
https://www.linkedin.com/pub/scott-rice/3/424/67
https://twitter.com/sgrrice
https://ca.linkedin.com/pub/tom-liebe/8/a59/83
https://ca.linkedin.com/pub/ken-dick/69/830/410
https://ca.linkedin.com/in/davemori
https://www.linkedin.com/pub/stacey-halligan/94/83b/a6b
https://www.linkedin.com/pub/sue-duffy/11/462/35
pdf/IDICIA-PrivacyPolicy.pdf
phone/index.html?devicelock=phone


*/