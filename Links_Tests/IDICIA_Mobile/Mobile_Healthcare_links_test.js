if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/IDICIA_Mobile_site_Links/Mobile Home Page links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'Mobile Healthcare Link Test' : function (browser) {
    
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
    
    browser.url("http://www.idicia.com/phone/healthcare.html");
    browser.waitForElementVisible('body',1000);
    browser.click('div[id="u1872-3"]');
    browser.verify.visible('a[href*="index.html"]','found /index!');
    browser.verify.visible('a[href*="solutions.html"]', 'found resources/quote!');
    browser.verify.visible('a[href*="healthcare.html"]', 'found clientportal/!');
    browser.verify.visible('a[href*="compliance.html"]','found products.aspx!');
    browser.verify.visible('a[href*="telecom.html"]', 'products/phone_append.aspx is visible!');
    browser.verify.visible('a[href*="resources"]','found!');
    browser.verify.visible('a[href*="contact-us.html"]','found!');
    //browser.verify.visible('a[href*="http://www.idicia.com/index.html?devicelock=desktop"]','found!');
    browser.verify.visible('a[href*="tel:+1-844-443-4242"]','found!');
    browser.end();
    }
    
}

/*
index.html
solutions.html
healthcare.html
compliance.html
telecom.html
resources.html
contact-us.html
http://www.idicia.com/index.html?devicelock=desktop
tel:+1-844-443-4242
*/