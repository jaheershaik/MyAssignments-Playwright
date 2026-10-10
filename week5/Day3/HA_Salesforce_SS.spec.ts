import {test, expect} from "@playwright/test"
import { link } from "node:fs"

//Reuse session
test.use({storageState: 'Data/sf-storage.json'})

//verify homepage
//test.only will skip all the other tests
/*
test.only('salesforce - Verify homepage', async({page}) =>{
    await page.goto('https://orgfarm-f19bc558f3-dev-ed.develop.my.salesforce.com')

    await expect(page).toHaveTitle('Home | Salesforce')
    console.log('Home page is verified.');
    
}) 
    */

//Test 1: Navigate to page
test('Test 1- Navigate to Leads Page', async({page}) =>{
    test.slow();
    //Navigate to homepage
    await page.goto('https://orgfarm-f19bc558f3-dev-ed.develop.lightning.force.com/lightning/page/home')
    //click on Leads link
    await page.getByRole("link",{name: "Leads", exact:true}).click()
    //verify the leads heading in the leads page
    await expect(page.getByRole("heading", {name:"Leads", exact:true})).toBeVisible()
    console.log('Navigated to Leads page successfully.')

})
// test2: invalid session --> test.fail()
test('Test 2 expected to be failed with invalid details', async({page}) =>{
    test.fail();

    await page.context().clearCookies(); // to make the session invalid. Test will fail without the login details
    await page.goto('https://orgfarm-f19bc558f3-dev-ed.develop.lightning.force.com/lightning/home')
    await page.getByRole("link",{name: "Leads", exact:true}).click() 
    await expect(page.getByRole("heading", {name:"Leads", exact:true})).toBeVisible()
    console.log('Navigated to Leads page successfully.')
})

//LeafTaps tests.

//test 3: Login and verify homepage
test('Test 3: LeafTaps Login and Homepage', async({page}) =>{
    await page.goto('http://leaftaps.com/opentaps/')
    await page.locator('#username').fill('DemoSalesManager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
    await expect(page).toHaveTitle('My Home | opentaps CRM')
    console.log('LeafTaps Home page is verified.')
})

//test 4: Invalid login -> test.fail()
test('Test 4: Leaf Taps Login Expected to be failed - Invalid Login', async({page}) =>{
    test.fail()
    await page.goto('http://leaftaps.com/opentaps/')
    await page.locator('#username').fill('DemoSalesManager')
    await page.locator('#password').fill('crmfa')
    await page.locator('.decorativeSubmit').click()
    // assertion intended to be failed
    await expect(page.getByText('Welcome')).toBeVisible()

})

//test 5: Leaf Taps - Incomplete Login Flow
test('Test 5: LeafTaps - Incomplete Login Flow', async({page}) =>{
    test.fixme()
    await page.goto('http://leaftaps.com/opentaps/')
    await page.locator('#username').fill('DemoSalesManager')
    await page.locator('#password').fill('crmsfa')
    // Remaining steps to be implemented later
})

//Test 6: Optional Feature - test.skip()
test('Test 6: Leaf Taps - Optional Feature', async({page}) =>{
    test.skip()
    console.log("Optional Feature")
})


