if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/IDICIA_Mobile_site_Links/Mobile Home Page links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'Mobile resources Link Test' : function (browser) {
    
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
    
    browser.url("http://www.idicia.com/phone/resources.html");
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
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/garth-froese/b/863/324"]','found!');
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/scott-rice/3/424/67"]','found!');
    browser.verify.hidden('a[href*="https://ca.linkedin.com/pub/tom-liebe/8/a59/83"]','found!');
    browser.verify.hidden('a[href*="https://ca.linkedin.com/pub/ken-dick/69/830/410"]','found!');
    browser.verify.hidden('a[href*="https://ca.linkedin.com/in/davemori"]','found!');
    browser.verify.hidden('a[href*="https://www.linkedin.com/pub/stacey-halligan/94/83b/a6b"]','found!');
    //browser.verify.hidden('a[href*="https://www.linkedin.com/pub/sue-duffy/11/462/35"]','found!');
    //browser.verify.visible('a[href*="blog.idicia.com/"]','found!');
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
https://www.linkedin.com/pub/garth-froese/b/863/324
https://www.linkedin.com/pub/scott-rice/3/424/67
https://ca.linkedin.com/pub/tom-liebe/8/a59/83
https://ca.linkedin.com/pub/ken-dick/69/830/410
https://ca.linkedin.com/in/davemori
https://www.linkedin.com/pub/stacey-halligan/94/83b/a6b
https://www.linkedin.com/pub/sue-duffy/11/462/35
http://blog.idicia.com/
http://www.idicia.com/index.html?devicelock=desktop
tel:+1-844-443-4242
*/