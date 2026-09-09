const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');
console.log("BasePage:", BasePage);
class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.amazonLogo = page.locator('#nav-logo-sprites');
    }

    async openAmazon() {
        await this.navigateTo('/');
        await this.waitForPageLoad();
        await expect(this.page).toHaveTitle(/Amazon/i);
    }
}

module.exports = HomePage;
