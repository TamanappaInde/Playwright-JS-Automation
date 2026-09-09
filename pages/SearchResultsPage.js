import BasePage from './BasePage';
import { expect } from require('@playwright/test')

class SearchResultsPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.firstProduct = page.locator("//div[@data-component-type='s-impression-counter']").first();
        this.searchResults = page.locator("//div[@data-component-type='s-impression-counter']");

    }

    async validateSearchResults() {
        await expect(this.searchResults.first()).toBeVisible();
        const count = await this.searchResults.count();
        console.log(`Total Products Found: ${count}`);
        expect(count).toBeGraterThan(0);
    }

    async clickFirstProduct() {
        const pagePromise = this.page.context().waitForEvent('page');
        await this.firstProduct.click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        return newPage;
    }

}

export default SearchResultsPage;
