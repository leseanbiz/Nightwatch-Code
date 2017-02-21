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
    
    browser.url("http://www.pacificeast.com/learning-center.aspx");
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
    browser.verify.visible('a[href*="resources.aspx"]','found!');
    browser.verify.visible('a[href*="privacy_policy.aspx"]','found!');
    browser.verify.visible('a[href*="phone/index.html?devicelock=phone"]','found!');
    //click to expand the "Getting Started" section.
    browser.click('a[id="cphContent_lbGettingStarted"]');
    browser.waitForElementVisible('div[id="cphContent_UpdatePanel1"]',1000);
            browser.verify.visible('a[href*="resources/pdfs/credit_application.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/credit_card_authorization_multiple_use.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/credit_card_authorization_one-time_use.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/getting_you_started.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/DoNotCall_agreement_for_non-profits.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/DoNotCall_agreement_for_sellers.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/DoNotCall_agreement_for_telemarketers.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="resources/pdfs/GuideTo-UsingDNC.pdf"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="https://telemarketing.donotcall.gov/"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="https://www.youtube.com/watch?v=NRU7N8IXQxc&enablejsapi=1"]','found document in Getting Started tree!');
            browser.verify.visible('a[href*="https://www.youtube.com/watch?v=Sl6lux3hr8w&enablejsapi=1"]','found document in Getting Started tree!');
    //click to close the "Getting Started" section.
    browser.click('a[id="cphContent_lbGettingStarted"]');
    //click to expand the "ID & Verification" section.
    browser.click('a[id="cphContent_lbVerification"]');
    browser.waitForElementVisible('div[id="cphContent_UpdatePanel1"]',1000);
            browser.verify.visible('a[href*="resources/pdfs/OIX-ARPUofIdentity.pdf"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-Telified-3D.pdf"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-TelifiedCollection.pdf"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-LineIdentificationAppend.pdf"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-ReverseEmailAppend.pdf"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/infographics/identity-fraud.aspx"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/infographics/protect-yourself-facebook.aspx"]','found document in ID & Verification tree!');
            browser.verify.visible('a[href*="resources/infographics/internet-of-things.aspx"]','found document in ID & Verification tree!');
    //click to close the "ID & Verification" section.            
    browser.click('a[id="cphContent_lbGettingStarted"]');
    //click to expand the "Fraud Prevention" section.
    browser.click('a[id="cphContent_lbFraudPrevention"]');
    browser.waitForElementVisible('div[id="cphContent_UpdatePanel1"]',1000);
            browser.verify.visible('a[href*="resources/pdfs/Prdct-ReversePhoneAppendRestricted.pdf"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-FlexiQuery.pdf"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="resources/pdfs/FlexiQueryUserGuide.pdf"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="resources/pdfs/FlexiQuery-API-Guide.pdf"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="https://www.youtube.com/watch?v=Sl6lux3hr8w&enablejsapi=1"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-EmailAppend.pdf"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="resources/infographics/identity-fraud.aspx"]','found document in Fraud Prevention tree!');
            browser.verify.visible('a[href*="resources/infographics/fraud-prevention-flexiquery.aspx"]','found document in Fraud Prevention tree!');
    //click to close the "ID & Verification" section.            
    browser.click('a[id="cphContent_lbFraudPrevention"]');
    //click to expand the "Data Enhancement & Hygiene" section.
    browser.click('a[id="cphContent_lbHygiene"]');
    browser.waitForElementVisible('div[id="cphContent_UpdatePanel1"]',1000);
            browser.verify.visible('a[href*="resources/pdfs/Prdct-PhoneAppend.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/ABuyersGuideToPhoneAppendServices_v2.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/infographics/phone-append.aspx"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/GuideTo-UsingDNC.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-NCOALink.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-dataPRIME.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-EmailAppend.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-LineIdentificationAppend.pdf"]','found document in Data Enhancement & Hygiene tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-EmailAppend.pdf"]','found document in Data Enhancement & Hygiene tree!');
    //click to close the "Data Enhancement & Hygiene" section.            
    browser.click('a[id="cphContent_lbHygiene"]');
    //click to expand the "Compliance" section.
    browser.click('a[id="cphContent_lbCompliance"]');
    browser.waitForElementVisible('div[id="cphContent_UpdatePanel1"]',1000);
            browser.verify.visible('a[href*="https://telemarketing.donotcall.gov/"]','found document in Compliance tree!');
            browser.verify.visible('a[href*="https://www.fcc.gov/guides/truth-about-wireless-phones-and-national-do-not-call-list"]','found document in Compliance tree!');
            browser.verify.visible('a[href*="resources/pdfs/bus61-can-spam-act-compliance-guide-business.pdf"]','found document in Compliance tree!');
            browser.verify.visible('a[href*="resources/pdfs/GuideTo-UsingDNC.pdf"]','found document in Compliance tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-NCOALink.pdf"]','found document in Compliance tree!');
            browser.verify.visible('a[href*="resources/pdfs/ConsentReverification.pdf"]','found document in Compliance tree!');
    //click to close the "Compliance" section.            
    browser.click('a[id="cphContent_lbCompliance"]');
    //click to expand the "Product Information" section.
    browser.click('a[id="cphContent_lbProductInformation"]');
    browser.waitForElementVisible('div[id="cphContent_UpdatePanel1"]',1000);
            browser.verify.visible('a[href*="resources/pdfs/Prdct-dataPRIME.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/GuideTo-UsingDNC.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-EmailAppend.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-FlexiQuery.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-LineIdentificationAppend.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-NCOALink.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-PhoneAppend.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-EmailAppend.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-ReversePhoneAppendRestricted.pdf"]','found document in Product Information tree!');
            browser.verify.visible('a[href*="resources/pdfs/Prdct-Telified-3D.pdf"]','found document in Product Information tree!');
    //click to close the "Product Information" section.            
    browser.click('a[id="cphContent_lbProductInformation"]');
    browser.end();
    }
    
}


