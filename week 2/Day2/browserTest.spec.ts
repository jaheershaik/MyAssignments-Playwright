import {chromium, test, expect, webkit} from "@playwright/test"

test('Launch Browser Test', async({})=>{

    //1. Redbus - edge
    const edgeBrowser = await chromium.launch({channel:"msedge", headless: false});
    const edgePage = await edgeBrowser.newPage();
    await edgePage.goto("https://www.redbus.in/");

    console.log("Title: ", await edgePage.title());
    console.log("Url: ", edgePage.url());


    //2. Flipkart - webkit

    const webkitBrowser = await webkit.launch({headless:false});
    const webkitPage = await webkitBrowser.newPage();   
    await webkitPage.goto("https://www.flipkart.com/");

    console.log("Title: ", await webkitPage.title());
    console.log("Url: ", await webkitPage.url());


})