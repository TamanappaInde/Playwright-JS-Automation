const { error } = require("node:console");

class PriceUtils {
    static convertPriceToNumber(priceText) {
        if (!priceText) {
            throw new error('Product price text is empty');


        }
    }
}