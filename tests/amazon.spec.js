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


});