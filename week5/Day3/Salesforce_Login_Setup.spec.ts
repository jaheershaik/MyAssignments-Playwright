import {expect, test} from "@playwright/test"

test('salesforce login setup', async({page}) =>{


    await page.goto('https://login.salesforce.com/')

    await page.locator('#username').fill("jaheer121.2ed2c9c83b13@agentforce.com")
    await page.locator('#Login').click()
    await page.locator('#password').fill("salesf@121")
    await page.locator('#Login').click()

    //Save storage state as sf-storage.json
    await page.context().storageState({path:'Data/sf-storage.json'})
    //Ensure login is successful
    await expect(page).toHaveTitle("Home | Salesforce", {timeout:60000})
    
    


})