// creating a invitation array
var Invitation = ["Akram", "Ashraf", "Arshad", "Arif"];
// making variable for those guest who cant come
var dontCome = Invitation[2];
// print the name of guest who cant come
console.log(dontCome, "nhi aa saktay hain");
// add or remove values from guest list array
Invitation.splice(0, 1, "aslam");
// message print for bigger table
console.log("good news ! we have found a bigger table for a dinner.");
// adding a new guest at starting index of array
Invitation.unshift("saima");
// adding a new guest at ending index of array
Invitation.push("mubashira");
// Get a middle index of our invitation array
var middleindex = Math.floor(Invitation.length / 2);
// adding a new guest to middle index of array
Invitation.splice(middleindex, 0, "shibra");
// print meesage of updated list
console.log("updated list of our guest");
// sending a invitation message to our guests one by one with their names
Invitation.forEach(function (oneguest) { return console.log("assalamualikum ".concat(oneguest, ", you must come to the dinner at eid")); });
// inform that only two guests can be invited for dinner
console.log("unfortunately,the new dinner table want arrive on time, so i can invite to guest to dinner with me");
// using while loop to remove guest from the array until on the only to names remain
while (Invitation.length > 2) {
    var removeguest = Invitation.pop();
    console.log("sorry,".concat(removeguest, " i cant invite you to dinner"));
}
// sending a invitation to the last 2 guest on the list
console.log("invitation to the last 2 guest");
Invitation.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// removing last to guest on the list
Invitation.pop();
Invitation.pop();
console.log("empty list", Invitation);
