function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich natasha arif");
Sandwich('capsicum', 'tomato', 'chicken');
Sandwich('beef', 'cheese');
Sandwich('garlic chicken', 'soya sauce');
