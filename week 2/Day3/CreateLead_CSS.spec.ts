import {test} from "@playwright/test"

test('Create Lead with CSS', async({page})=>{
    //navigate to url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //username 
    await page.locator('#username').fill('democsr2');
    //password 
    await page.locator('#password').fill('crmsfa');
    //login btn
    await page.locator('.decorativeSubmit').click();
    //crm/sfa
    await page.locator('[for="crmsfa"] > a').click();
    //click on leads
    await page.locator('[href="/crmsfa/control/leadsMain"]').click();
    //click create lead
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
    //Enter Company Name
    await page.locator('#createLeadForm_companyName').fill("hp");
    //Enter FirstName
    await page.locator('#createLeadForm_firstName').fill("Jaheer");
    //Enter LastName
    await page.locator('#createLeadForm_lastName').fill("Basha");
    //Enter Salution
    await page.locator('[name="personalTitle"]').fill("Mr");
    //Enter Title
    await page.locator('[name="generalProfTitle"]').fill("Tester");
    //Enter Annual Revenue
    await page.locator('input.inputBox[name="annualRevenue"]').fill("1000000");
    //Enter Department
    await page.locator('#createLeadForm_departmentName').fill("Playwright");

    //locate source dropdown
    const sourceDropdown = page.locator('[name="dataSourceId"]');
    //get all options
    const options = sourceDropdown.locator("option");

    //Iterate through all options and print
    for(let i = 0; i < await options.count(); i++){
        const text = await options.nth(i).textContent();
        //print text/value
        console.log(text);
    }

    //enter phonenumber
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9848022338");

    //click on Create Lead button
    await page.locator('input.smallSubmit').click();

})