/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let lowestPrice = null;
    prices.forEach(price => {
        if (lowestPrice === null || (price < lowestPrice)) {
            lowestPrice = price;
        }
        let currDifference = price - lowestPrice;
        if (currDifference > maxProfit) {
            maxProfit = currDifference;
        }
    });

    return maxProfit;
};
