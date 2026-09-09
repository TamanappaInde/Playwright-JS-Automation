const { error } = require("node:console");

class PriceUtils {
    static convertPriceToNumber(priceText) {
        if (!priceText) {
            throw new error('Product price text is empty');
        }
        const normalizedPrice = priceText.replace(/[^\d.]/g, '');
        const price = Number.parseFloat(normalizedPrice);
        if (Number.isNaN(price)) {
            throw new Error(
                'Unable to convert product price into number. Price Text: ${priceText}'
            );
        }
        return price;
    }
}
module.exports = PriceUtils;
