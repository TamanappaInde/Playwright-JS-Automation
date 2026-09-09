const { test } = require('@playwright/test')

const HomePage = require('../pages/HomePage')

test.describe('Amazon Laptop Purchase flow', () => {
    let homepage;

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        await test.step(
            'Launch browser and open Amazon',
            async () => {
                await homepage.openAmazon();
            }
        )
    });

    test.afterEach(
        async ({ page }, testInfo) => {
            console.log(
                `Test Completed with status : ${testInfo.status}`
            );
            if (testInfo.status !== testInfo.expectedStatus) {
                const screenshot = await page.screenshot({
                    fullPage: true,
                });
                await testInfo.attach('failure-screenshot', {
                    body: screenshot,
                    contentType: 'image/png',
                });
            }
        }
    )

    test('TC01 Launch Amazon Website ', async ({ page }) => {
            console.log("Amazon Launched Successfully...");
        }
    )

    test('TC02 Search Laptop under 40K', async ({ page }) => {
        await homepage.searchProduct('Laptops under 40k');
        console.log("Laptop search completed successfully.")
    })

    
});