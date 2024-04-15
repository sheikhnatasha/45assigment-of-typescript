let Invitation = ["Akram","Ashraf","Arshad","Arif"];

let dontcome = Invitation[2];

console.log(dontcome,"nhi aa sakta")

Invitation.splice(2, 1, "aslam");

Invitation.forEach(guest => console.log(`assalamualikum ${guest}, you must come to the dinner at eid`));
