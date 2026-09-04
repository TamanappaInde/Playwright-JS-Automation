const { expect } = require('@playwright/test')

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url = '/') {
        await this.page.goto(url, {
            WaitUntil: 'domcontentloaded',
        });
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }




}