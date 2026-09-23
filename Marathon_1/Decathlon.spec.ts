import{chromium, expect, test} from "@playwright/test"



test('Decathlon Product Search', async() =>{

    //1. Launch the browser.
    const browser = await chromium.launch({headless: false})
    const context =  await browser.newContext()
    const page = await context.newPage()
    // 2. Navigate to https://www.decathlon.in/.
    await page.goto('https://www.decathlon.in/')
    // 3. Verify the user is navigated to the Decathlon home page.
    await expect (page.locator('//a[@data-test-id="header-desktop:logo-link"]')).toBeVisible()
    // 4. Click on the Search icon on the home page.
    const searchField = page.locator('//input[@data-test-id="search-input-desktop:container"]')
    await searchField.click();
    // 5. Verify the search input field is enabled.
    await expect(searchField).toBeEnabled()
    // 6. Enter the product name as "shoes" in the search field.
    await searchField.fill("shoes")
    // 7. Press Enter to search the product.
    await searchField.press('Enter')
    // 8. Capture and print the page title in the console.
    const pageTitle =await page.title()
    console.log(pageTitle)
    // 9. Verify the page title is displayed as "Search | shoes".
    expect(pageTitle).toBe("Search | shoes")
    // 10. Click on the "Running" category filter.
    await page.locator('//button[@aria-controls="sport_pratice_en"]').click()
    await page.locator('//span[text()="Running"]').click()
    // 11. Click on the "Men" gender filter.
    await page.locator('//button[@aria-controls="gender_id_en"]').click()
    await page.locator('//span[text()="Men"and @data-test-id="filter-sidebar:item-text"]').click()
    // 12. Click on the shoe size filter "UK 10.5".
    await page.locator('//button[@aria-controls="indian_size"]').click()
    await page.locator('//input[@data-test-id="filter-checkbox-indian_size-10.5"]').click()
    // 13. Click on the "Most relevant" sorting dropdown.
    await page.locator('//button[@data-test-id="sort-bar-desktop:dropdown-button"]').click()
    // 14. Select "Price: Low to High" from the sorting options.
    await page.getByText('Price (low → high) ',{exact:true}).click()
    // 15. Click on the first product from the displayed product list.
    await page.locator('//div[@data-test-id="product-card:container"]').first().click()
    // 16. Select the shoe size "UK 10.5 - EU 45" on the product detail page.
    await page.getByRole('button',{name:'Select size 10.5'}).click()
    // 17. Click on the "Add to Cart" button.
    await page.getByRole('button',{name:'Add to cart'}).click()
    await page.locator('div.dy-lb-close').click()
    // 18. Click on the Cart option.
    await page.locator('[data-test-id="header-desktop:cart-icon"]').click()
    // 19. Fetch the total cart value.
    const cartTotalValue = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText();
    // 20. Print the total cart amount in the console.
    console.log('Cart total amount : ',cartTotalValue)


})