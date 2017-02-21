if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test data repository/links/Homepage_links.xlsx');

var Links = [];
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var i = 0;

module.exports = {
'Solutions Link Test' : function (browser) {
    
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
    
    browser.url("http://www.pacificeast.com/solutions.aspx");
    browser.waitForElementVisible('body',1000);
    browser.verify.visible('a[href*="/quote"]','found /quote!');
    browser.verify.visible('a[href*="resources/quote.aspx"]', 'found resources/quote!');
    browser.verify.visible('a[href*="clientportal/"]', 'found clientportal/!');
    browser.verify.visible('a[href*="products.aspx"]','found products.aspx!');
    browser.verify.hidden('a[href*="products/phone_append.aspx"]', 'products/phone_append.aspx is hidden!');
    browser.verify.hidden('a[href*="products/reverse_phone.aspx"]','found!');
    browser.verify.hidden('a[href*="products/telified.aspx"]','found!');
    browser.verify.hidden('a[href*="products/line_identification_append.aspx"]','found!');
    browser.verify.hidden('a[href*="products/flexiQuery.aspx"]','found!');
    browser.verify.hidden('a[href*="products/address_cleaning.aspx"]','found!');
    browser.verify.hidden('a[href*="products/change_of_address.aspx"]','found!');
    browser.verify.hidden('a[href*="products/dataprime.aspx"]','found!');
    browser.verify.hidden('a[href*="products/demographics.aspx"]','found!');
    browser.verify.hidden('a[href*="products/do_not_call.aspx"]','found!');
    browser.verify.hidden('a[href*="products/email_append.aspx"]','found!');
    browser.verify.hidden('a[href*="products/integrated.aspx"]','found!');
    browser.verify.hidden('a[href*="products/interactive.aspx"]','found!');
    browser.verify.hidden('a[href*="products/reverse_address.aspx"]','found!');
    browser.verify.hidden('a[href*="products/special_services.aspx"]','found!');
    browser.verify.hidden('a[href*="products/ss7_lookups.aspx"]','found!');
    browser.verify.visible('a[href*="industry.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/healthcare.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/fraud_prevention.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/nonprofits.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/call_centers.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/business.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/media.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/consumer.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/technology.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/education.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/financial.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/government.aspx"]','found!');
    browser.verify.hidden('a[href*="industry/utilities.aspx"]','found!');
    browser.verify.visible('a[href*="solutions.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/address.aspx"]','found!');
    browser.verify.hidden('a[href*="resources/perl.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/data_appending.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/scrubbing.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/email.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/interactive.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/phone_number.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/realtime.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/validation_research.aspx"]','found!');
    browser.verify.hidden('a[href*="technology.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/batch.aspx"]','found!');
    browser.verify.hidden('a[href*="solutions/web_services.aspx"]','found!');
    browser.verify.visible('a[href*="learning-center.aspx"]','found!');
    browser.verify.hidden('a[href*="blog/"]','found!');
    browser.verify.hidden('a[href*="resources/question.aspx"]','found!');
    browser.verify.hidden('a[href*="resources/request.aspx"]','found!');
    browser.verify.hidden('a[href*="resources/infographics.aspx"]','found!');
    browser.verify.hidden('a[href*="site_map.aspx"]','found!');
    browser.verify.visible('a[href*="about_us.aspx"]','found!');
    browser.verify.hidden('a[href*="about_us/contact_us.aspx"]','found!');
    browser.verify.hidden('a[href*="about_us/team.aspx"]','found!');
    browser.verify.hidden('a[href*="about_us/news.aspx"]','found!');
    //browser.verify.visible('a[href*="https://safeharbor.export.gov/list.aspx"]','found!');
    //browser.verify.visible('a[href*="http://www.export.gov/safeharbor"]','found!');
    browser.verify.visible('a[href*="http://www.twitter.com/pacificeast"]','found!');
    browser.verify.visible('a[href*="https://plus.google.com/+PacificeastResearch/"]','found!');
    browser.verify.visible('a[href*="http://www.linkedin.com/companies/pacificeast/"]','found!');
    browser.verify.visible('a[href*="resources.aspx"]','found!');
    browser.verify.visible('a[href*="privacy_policy.aspx"]','found!');
    browser.verify.visible('a[href*="phone/index.html?devicelock=phone"]','found!');
    browser.end();
    }
    
}


