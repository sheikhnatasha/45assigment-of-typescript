// define variables
var apple = "apple";
var Uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "mango", "banana"];
// test for equality and unequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
// test using lowercase function
console.log("\nis apple is equal to apple after converting to lowercase?");
console.log(Uppercaseapple.toLowerCase() == "apple");
console.log("\nis apple is not equal to apple after converting to lowercase?");
console.log(Uppercaseapple.toLowerCase() != "apple");
// numerical tests
console.log("\nis ten is equal to 20?");
console.log(10 == twenty);
// not equal to
console.log("\nis ten is not equal to 20?");
console.log(10 != twenty);
// greater than
console.log("\nis ten is greater than 0?");
console.log(10 > 0);
// less than
console.log("\nis twenty is less than 10?");
console.log(twenty < 10);
// greater than and equal to 
console.log("\nis ten is greater than and equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("\ntwenty is less than or equal to 10?");
console.log(twenty <= 10);
// tests using "and" & "or" operators
// using && (and)
console.log("\ntwenty is not equals to ten and 20 is greater than 10");
console.log(twenty != 10 && 20 > ten);
console.log("\ntwenty is not equals to ten and 20 is greater than 30");
console.log(twenty != 10 && 20 > 30);
// using || (or)
console.log("\ntwenty is greater than 50 or 20 is equals to twenty");
console.log(20 > 50 || 20 == 20);
console.log("\ntwenty is greater than 50 or 20 is not equals to twenty");
console.log(20 > 50 || 20 != 20);
// test whether in item is include in array
console.log("\nis mango is include in my fruits array");
console.log(fruits.includes("mango"));
// not incluide
console.log("\nis mango is not include in my fruitsarray");
console.log(!fruits.includes("mango"));
