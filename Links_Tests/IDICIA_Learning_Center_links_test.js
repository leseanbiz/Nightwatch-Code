if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/Homepage_links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'Learning Center Link & Tree Test' : function (browser) {
    
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
            //console.log("in for loop" + Links[i]);
            //console.log("in for loop" + Links.length);
            }
            */
    
    browser.url("http://www.idicia.com/learningcenter.html");
    browser.waitForElementVisible('body',1000);
    browser.verify.visible('a[href*="index.html"]','found /quote!');
    browser.verify.visible('a[href*="solutions.html"]','found /quote!');
    browser.verify.hidden('a[href*="verification.html"]','found /quote!');
    browser.verify.hidden('a[href*="inspection.html"]','found /quote!');
    browser.verify.hidden('a[href*="comparison.html"]','found /quote!');
    browser.verify.hidden('a[href*="telecom.html"]','found /quote!');
    browser.verify.hidden('a[href*="healthcare.html"]','found /quote!');
    browser.verify.hidden('a[href*="compliance.html"]','found /quote!');
    browser.verify.visible('a[href*="resources.html"]','found /quote!');
    browser.verify.hidden('a[href*="learningcenter.html"]','found /quote!');
    browser.verify.visible('a[href*="contact-us.html"]','found /quote!');
    browser.verify.hidden('a[href*="https://plus.google.com/+IDICIABeaverton"]','found /quote!');
    browser.verify.hidden('a[href*="https://www.linkedin.com/company/idicia"]','found /quote!');
    //browser.verify.visible('a[href*="blog.idicia.com"]','found /quote!');
    browser.verify.hidden('a[href*="https://twitter.com/4IDICIA?lang=en"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-CreditApplication.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-CreditCard_MultipleUse.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-Prdct-TelifiedCollection.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-Telified-DataHosting.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-Telified-Healthcare.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-Telified-Banking.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-ReverseEmailAppend.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="http://www.pacificeast.com/images/infographics/identity-fraud.jpg"]','found /quote!');
    browser.verify.hidden('a[href*="http://www.pacificeast.com/images/infographics/internet-of-things.jpg"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-ReverseOnPhone.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-LineIdentificationAppend.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-dataPRIME.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/IDICIA-ConsentReverification.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="pdf/OIX-ARPUofIdentity.pdf"]','found /quote!');
    browser.verify.hidden('a[href*="https://www.fcc.gov/guides/truth-about-wireless-phones-and-national-do-not-call-list"]','found /quote!');
    browser.verify.visible('a[href*="pdf/IDICIA-PrivacyPolicy.pdf"]','found /quote!');
    browser.verify.visible('a[href*="phone/index.html?devicelock=phone"]','found /quote!');
    //click to expand the "Getting Started" section.
    browser.click('img[id="expand1"]');
        browser.waitForElementVisible('a[id="u4073-4"]',1000);
        browser.verify.visible('a[href*="pdf/IDICIA-CreditApplication.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/IDICIA-CreditCard_MultipleUse.pdf"]','found /quote!');
    browser.click('img[id="collapse1"]');
        //click to expand the "Verification" section.
    browser.click('img[id="expand2"]');
        browser.waitForElementVisible('a[id="u4073-4"]',1000);
        browser.verify.visible('a[href*="pdf/IDICIA-Prdct-TelifiedCollection.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/IDICIA-Telified-DataHosting.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/IDICIA-Telified-Healthcare.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/IDICIA-Telified-Banking.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/IDICIA-ReverseEmailAppend.pdf"]','found /quote!');
        browser.verify.visible('a[href*="http://www.pacificeast.com/images/infographics/identity-fraud.jpg"]','found /quote!');
        browser.verify.visible('a[href*="http://www.pacificeast.com/images/infographics/internet-of-things.jpg"]','found /quote!');
    browser.click('img[id="collapse2"]');
    //click to expand the "Inspection" section.
    browser.click('img[id="expand3"]');
        browser.waitForElementVisible('a[id="u4073-4b"]',1000);
        browser.verify.visible('a[href*="pdf/IDICIA-ReverseOnPhone.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/IDICIA-LineIdentificationAppend.pdf"]','found /quote!');
    browser.click('img[id="collapse3"]');
    //click to expand the "Comparison" section.
    browser.click('img[id="expand4"]');
        browser.waitForElementVisible('a[id="u4073-4c"]',1000);
        browser.verify.visible('a[href*="pdf/IDICIA-dataPRIME.pdf"]','found /quote!');
    browser.click('img[id="collapse4"]');
    //click to expand the "Compliance and Whitepapers" section.
    browser.click('img[id="expand5"]');
        browser.waitForElementVisible('a[id="u4073-4d"]',1000);
        browser.verify.visible('a[href*="pdf/IDICIA-ConsentReverification.pdf"]','found /quote!');
        browser.verify.visible('a[href*="pdf/OIX-ARPUofIdentity.pdf"]','found /quote!');
        browser.verify.visible('a[href*="https://www.fcc.gov/guides/truth-about-wireless-phones-and-national-do-not-call-list"]','found /quote!');
    browser.click('img[id="collapse5"]');
    browser.end();
    }
    
}


