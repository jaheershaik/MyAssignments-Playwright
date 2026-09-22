
import{test} from "@playwright/test"

// 1 Launch the URL: https://www.leafground.com/alert.xhtml
// 2 Click on "Prompt Dialog".
// 3 Handle the JavaScript prompt dialog using Playwright.
// 4 Enter the value "Playwright" in the prompt using the accept() method.


test('Alerts Home Assignment', async({page}) =>{
    //handling prompt alert
    page.on('dialog', async alert =>{
        await alert.accept("Playwright");
    });

    await page.goto('https://www.leafground.com/alert.xhtml');
   await page.locator('//span[text()="Show"]').nth(4).click();
});