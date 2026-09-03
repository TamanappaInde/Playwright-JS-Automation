const { test, expect } = require('@playwright/test');

// Runs before every test
test.beforeEach(async ({ page }) => {
    console.log("Launching Amazon Website...")
    // Open Amazon
    await page.goto('https://www.amazon.com');


})
// Runs after every test
test.afterEach(async ({ page }) => {
    console.log("Test Execution Completed")
    // wait for 2 secs before closing
    await page.waitForTimeout(2000)
})
// Test Case 1
test('TC-01 Launch Amazon Website', async ({ page }) => {
    // Validate title
    await expect(page).toHaveTitle(/Amazon/);
    console.log("Amazon Website launched successfully.");
});
``
// Test Case 2
test('TC-02 Search laptops under 40K on amazon', async ({ page }) => {
    const searchBox = page.locator('#twotabsearchtextbox')
    await searchBox.fill('Laptops under 40K')
    await searchBox.press('Enter');
    const products = page.locator("//h2[@class='a-size-base a-spacing-small a-spacing-top-small a-text-normal']")
    await expect(products.first()).toBeVisible();
    console.log(products);
})

// Test Case 3 , Validate the Laptop title and select
test('TC-03 Validate the Laptop title', async ({ page }) => {
    const searchBox = page.locator('#twotabsearchtextbox')
    await searchBox.fill('Laptops under 40K')
    await searchBox.press('Enter');
    const firstProduct = page.locator('//*[@id="3c5bb2e7-341a-44ba-a495-46161b04ce59"]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]/a/h2')
    await expect(firstProduct).toBeVisible();
    const productTitle = await firstProduct.textContent();
    console.log("First Product Title: ", productTitle)
    expect(productTitle).not.toBeNull();
    expect(productTitle.trim().length).toBeGreaterThan(0);
    await firstProduct.click();
    console.log("Clicked on Product");
})

// Test Case 4 - Search a laptop, select a product and add it to cart
test('TC-04 Search laptop, select product and add to cart', async ({ page }) => {
    const searchBox = page.locator('#twotabsearchtextbox')
    await searchBox.fill('Laptop')
    await searchBox.press('Enter');

    const firstProduct = page.locator('//*[@id="3c5bb2e7-341a-44ba-a495-46161b04ce59"]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]/a/h2')
    await expect(firstProduct).toBeVisible();
    await firstProduct.click();
    console.log("Selected Laptop product");

    // Product page opens in the same tab, wait for Add to Cart button
    const addToCartBtn = page.locator('#add-to-cart-button')
    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();
    console.log("Clicked Add to Cart");

    // Validate item added to cart confirmation
    const cartConfirmation = page.locator('#huc-v2-order-row-confirm-text, #attachDisplayAddBaseAlert')
    await expect(cartConfirmation.first()).toBeVisible();
    console.log("Product added to cart successfully");
})

