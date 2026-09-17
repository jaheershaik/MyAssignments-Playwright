import{test} from "@playwright/test"

test('Playwirght Locators', async({page})=>{
    
   
    // 1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
    await page.goto('https://leaftaps.com/opentaps/control/main')
    // 2. Enter the username as Demosalesmanager
    await page.getByLabel('Username').fill('democsr2')
    // 3. Enter the password as crmsfa
    await page.getByText('Password').fill('crmsfa')
    // 4. Click the Login button
    await page.getByRole('button',{name:"Login"}).click()
    // 5. Click CRM/SFA
     await page.getByRole('link',{name:"CRM/SFA"}).click()
    // 6. Click Leads
    await page.getByRole('link',{name:"Leads"}).click()
    // 7. Click Create Lead
    await page.getByRole('link',{name:"Create Lead"}).click()
    // 8. Fill the Company Name
    await page.locator('#createLeadForm_companyName').fill('hp')
    // 9. Fill the First Name
    await page.locator('#createLeadForm_firstName').fill("shaik")
    // 10. Fill the Last Name
    await page.locator('#createLeadForm_lastName').fill("Basha")
    // 11. Fill the Salutation
    await page.locator('#createLeadForm_personalTitle').fill("Mr.")
    // 12. Fill the Title
    await page.locator('#createLeadForm_generalProfTitle').fill("Tester")
    // 13. Fill the Annual Revenue
    await page.locator('#createLeadForm_annualRevenue').fill("1000000")
    // 14. Fill the Department 
    await page.locator('#createLeadForm_departmentName').fill("Playwright")
    // 15. Fill the Phone Number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9848022338")
    // 16. Click Create Lead button
    await page.locator('.smallSubmit').click();

})
