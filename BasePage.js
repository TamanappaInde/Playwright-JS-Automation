class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigateTo(url = '/') {
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }

}

module.exports = BasePage;