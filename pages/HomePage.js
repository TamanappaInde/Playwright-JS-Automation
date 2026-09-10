const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');
console.log("BasePage:", BasePage);
class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.amazonLogo = page.locator('#nav-logo-sprites');
        // Login
        this.siginButton = page.locator("//span[@class='nav-line-2 ']");
        this.siginLink = page.locator("//span[@class='nav-action-inner']");

    }
    async openAmazon() {
        await this.navigateTo('https://www.amazon.in');
        await this.waitForPageLoad();
        await expect(this.page).toHaveTitle("/Amazon/i");
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async loginTest() {
        await this.siginButton.hover();
        await expect(this.siginLink).toBeVisible();
        await this.siginLink.click();

    }

}

module.exports = HomePage;
