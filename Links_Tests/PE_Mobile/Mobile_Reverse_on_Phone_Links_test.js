if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/PE Mobile site Links/Mobile Home Page links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'Mobile Reverse On Phone Link Test' : function (browser) {
    
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
    
    browser.url("http://www.pacificeast.com/phone/phone-append.html");
    browser.waitForElementVisible('body',1000);
    browser.click('div[id="u5722-3"]');
    browser.verify.visible('a[href*="index.html"]','found /index!');
    browser.verify.visible('a[href*="featured-products.html"]', 'found resources/quote!');
    browser.verify.visible('a[href*="industries.html"]', 'found clientportal/!');
    browser.verify.visible('a[href*="resources.html"]','found products.aspx!');
    browser.verify.visible('a[href*="contact.html"]', 'contact is visible!');
    browser.verify.visible('a[href*="get-a-quote.aspx"]','found!');
    browser.verify.visible('a[href*="http://www.linkedin.com/company/pacificeast"]','found!');
    browser.verify.visible('a[href*="https://plus.google.com/+PacificeastResearch"]','found!');
    browser.verify.visible('a[href*="https://twitter.com/pacificeast"]','found!');
    browser.verify.visible('a[href*="http://www.pacificeast.com?devicelock=desktop"]','found!');
    browser.verify.visible('a[href*="http://www.pacificeast.com/privacy_policy.aspx"]','found!');
    browser.end();
    }
    
}

/*
http://www.pacificeast.com/phone/index.html
http://www.pacificeast.com/phone/featured-products.html
http://www.pacificeast.com/phone/industries.html
http://www.pacificeast.com/phone/resources.html
http://www.pacificeast.com/phone/contact.html
http://www.pacificeast.com/phone/get-a-quote.aspx

http://www.linkedin.com/company/pacificeast
https://plus.google.com/+PacificeastResearch
https://twitter.com/pacificeast
http://www.pacificeast.com/?devicelock=desktop
http://www.pacificeast.com/privacy_policy.aspx




*/