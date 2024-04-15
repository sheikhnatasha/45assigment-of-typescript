// creating a invitation array
var invitation = ["Akram", "Ashraf", "Arshad", "Arif"];
// making variable for those guest who cant come
var dontcome = invitation[2];
// print the name of guest who cant come
console.log(dontcome, "nhi aa saktay hain");
// add or remove values from guest list array
invitation.splice(0, 1, "aslam");
// message print for bigger table
console.log("good news ! we have found a bigger table for a dinner.");
// adding a new guest at starting index of array
invitation.unshift("saima");
// adding a new guest at ending index of array
invitation.push("mubashira");
// Get a middle index of our invitation array
var middleIndex = Math.floor(invitation.length / 2);
// adding a new guest to middle index of array
invitation.splice(middleIndex, 0, "shibra");
// print meesage of updated list
console.log("updated list of our guest");
// sending a invitation message to our guests one by one with their names
invitation.forEach(function (oneguest) { return console.log("assalamualikum ".concat(oneguest, ", you must come to the dinner at eid")); });
