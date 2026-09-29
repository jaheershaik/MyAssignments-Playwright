import {expect, test} from "@playwright/test"

import {parse} from "csv-parse/sync"
import path from "path"
import fs from "fs"

let LoginData:any[] = parse(fs.readFileSync(path.join(__dirname,"../../../../../Utils/LoginData.csv")),{columns:true,skip_empty_lines:true})

test.describe.serial('running in sequential mode', async()=>{

    for(let data of LoginData){
        test(`login with username : ${data.username}`, async({page}) =>{
            await page.goto("https://leaftaps.com/opentaps/control/main")
            //enter username
            await page.locator('#username').fill(data.username)
            await page.locator('#password').fill(data.password)
            await page.locator('.decorativeSubmit').click()
            
            //verifying CRM/SFA link is available to confirm the homepage
            await expect(page.locator('//a[contains(text(),"CRM/SFA")]')).toBeVisible()

        })
    }
})