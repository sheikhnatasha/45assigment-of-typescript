var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its original order
var countriestovisit = ["paris", "germany", "maldeep", "saudia arab", "palastine"];
console.log("original order:", countriestovisit);
// print the array in the alphabatical order without modifying the actual array list
console.log("alphabatical order,", __spreadArray([], countriestovisit, true).sort());
// show that the array is still in its original order
console.log("still in original order", countriestovisit);
// print the array in reverse otder without modifying the actual array list
console.log("reverse order:", __spreadArray([], countriestovisit, true));
// show that the array is still in its original order
console.log("still in original order", countriestovisit);
// we have changed the original array order now
console.log("original array reverse:", countriestovisit.reverse());
// print the array to show that its back to its original order
console.log("back to original order:", countriestovisit.reverse());
// print the array to show that its order has been changed in alphabatical order now
console.log("sorted in alphabatical order:", countriestovisit.sort());
// we have changed  again the original  order now in reverse order again
console.log("original array reversed again:", countriestovisit.reverse());
