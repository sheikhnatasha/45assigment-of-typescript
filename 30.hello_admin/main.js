// creating a array
var usernames = ["hamza", "kamran", "admin", "imran", "zain"];
// using foreach loop on array
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for loggin in again."));
    }
});
