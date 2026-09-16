import {test, expect} from "@playwright/test"

test('Assertions Home Assignment', async({page})=>{
    //Navigate to page
    await page.goto('https://leafground.com/input.xhtml');
    // Validate a Disabled Textbox
    const textBox= page.locator('input[placeholder="Disabled"]');
    //Assert
    await expect(textBox).toBeDisabled();

    //Validate an Enabled Textbox
    const enabledTextBox = page.locator('//input[@id="j_idt88:name"]');
    await expect(enabledTextBox).toBeEditable();
    await enabledTextBox.fill("Jaheer Basha");

    //Soft Assertion
    await expect.soft(enabledTextBox).toBeDisabled();


    //Fill Data
   const clearTextBox= page.locator('//input[@id="j_idt88:j_idt95"]');
   //clear
   await clearTextBox.fill("");
   await clearTextBox.fill("Playwright Learning",{timeout: 3000});

})