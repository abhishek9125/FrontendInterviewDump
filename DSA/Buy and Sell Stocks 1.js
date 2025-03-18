class Solution {
    stockBuySell(arr, n) {
        let bought = arr[0];
        let maxProfit = 0;
        for(let i = 1; i < n; i++) {
            let diff = arr[i] - bought;
            maxProfit = Math.max(maxProfit, diff);
            bought = Math.min(bought, arr[i]);
        }
        return maxProfit;
    }
}
