var Invitation = ["Akram", "Ashraf", "Arshad", "Arif"];
var dontcome = Invitation[2];
console.log(dontcome, "nhi aa sakta");
Invitation.splice(2, 1, "aslam");
Invitation.forEach(function (guest) { return console.log("assalamualikum ".concat(guest, ", you must come to the dinner at eid")); });
