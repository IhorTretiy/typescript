var iceCreamPrices = {
    small: 10,
    large: 25,
    toppings: {
        chocolate: 5,
        caramel: 6,
        berries: 10
    },
    marshmallow: 5
};
function iceCreamCoast() {
    var size = prompt('What size do you want? (small/large)').toLowerCase();
    if (size !== 'small' && size !== 'large') {
        alert("Please enter the correct ice cream size.");
        return 0;
    }
    var toppings = prompt('What kind of topping you want?(chocolate/caramel/berries)').toLowerCase().split(',');
    var sprinkle = prompt('Do you want to add?(yes/no)').toLowerCase();
    var marshmallow = false;
    if (sprinkle === 'yes') {
        marshmallow = true;
    }
    var coast;
    if (size === 'small') {
        coast = iceCreamPrices.small;
    }
    else if (size === 'large') {
        coast = iceCreamPrices.large;
    }
    toppings.forEach(function (topping) {
        if (topping === 'chocolate' || topping === 'caramel' || topping === 'berries') {
            coast += iceCreamPrices.toppings[topping];
        }
    });
    if (marshmallow) {
        coast += iceCreamPrices.marshmallow;
    }
    return coast;
}
var iceCreamCost = iceCreamCoast();
if (iceCreamCost > 0) {
    alert("Total cost is ".concat(iceCreamCost, " UAH"));
}
