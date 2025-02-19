const payment = {
    currency: '$',
    amount: 0,
    addAmount: function(val) {
        this.amount += val;
        return this;
    },
    addCurrency: function(val) {
        this.currency = val;
        return this;
    },
    pay: function() {
        console.log(`${this.currency} ${this.amount}`);
    }
}

payment.addAmount(200).addAmount(300).pay();
payment.addAmount(200).addCurrency('*').pay();