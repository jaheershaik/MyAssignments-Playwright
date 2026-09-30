import {test} from "@playwright/test"

import dotenv from "dotenv"

// importing mandatory details from json file
import leadDetails from "../../../../../utils/HA_DP/lpCreateLeadReqData.json"

import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

//reading data from lpLogin_DP.env file
dotenv.config({path:'utils/HA_DP/lpLogin_DP.env'})

//parsing csv data into the javascript objects
let dropDownValue:any[] = parse(fs.readFileSync(path.join(__dirname,"../../../../../utils/HA_DP/lpCreateLeadDropDownValue.csv")),{columns:true,skip_empty_lines:true})


test('Home Assignment - Create Lead with Data Parameterization', async({page}) =>{

    //login using .env data
    await page.goto(process.env.LP_URL as string)
    await page.locator('#username').fill(process.env.LP_UserName as string)
    await page.locator('#password').fill(process.env.LP_Password as string)
    await page.locator('.decorativeSubmit').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()

    //click on Leads
    await page.locator('//a[text()="Leads"]').click()
    //click on Create Lead
    await page.locator('//a[contains(text(),"Create Lead")]').click()

    //Filling mandatory details using .json file parameterization
    await page.locator('#createLeadForm_companyName').fill(leadDetails.CompanyName)
    await page.locator('#createLeadForm_firstName').fill(leadDetails.FirstName)
    await page.locator('#createLeadForm_lastName').fill(leadDetails.LastName)

    // 8. Select Direct Mail from the Source dropdown using label
    await page.locator('#createLeadForm_dataSourceId').selectOption({label:dropDownValue[0].source})
    // 9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
    await page.locator('#createLeadForm_marketingCampaignId').selectOption({label:dropDownValue[0].marketingCampaign})
    // 10. Get the count and print all the values in the Marketing Campaign dropdown
    const options = page.locator('select#createLeadForm_marketingCampaignId option')
    const values = await options.allTextContents()
    console.log("count of Marketing Campaign dropdown values: ",values.length)
    for(const value of values){
        console.log(value)
    }
    // 11. Select General Services from the Industry dropdown using index
    const optionsIndustry = page.locator('#createLeadForm_industryEnumId option')
    const IndustryValues = await optionsIndustry.allTextContents()
    
    const indexValue = IndustryValues.findIndex(value => value ===dropDownValue[0].industry)
    await page.locator('#createLeadForm_industryEnumId').selectOption({index: indexValue})

    // 12. Select INR from the Preferred Currency dropdown
    await page.locator('#createLeadForm_currencyUomId').selectOption(dropDownValue[0].currency)
    // 13. Select India from the Country dropdown
    await page.locator('#createLeadForm_generalCountryGeoId').selectOption(dropDownValue[0].country)
    // 14. Select any state from the State dropdown
    // await page.waitForLoadState("domcontentloaded")
    await page.waitForTimeout(3000)
    await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({index:6})
    // 15. Get the count of all states and print the values in the console
    const stateOptions =page.locator('#createLeadForm_generalStateProvinceGeoId option')
    const states = await stateOptions.allTextContents()
    console.log('count of states: ',states.length)
    for(const state of states){
        console.log(state)
    }

    // 16. Click Create Lead
    await page.locator('.smallSubmit').click()

})