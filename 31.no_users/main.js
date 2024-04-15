var username = ["hamza", "zain", "kamran", "imran", "admin"];
username = [];
if (username.length === 0) {
    console.log("your array in empty we need to find some users");
}
else {
    // using foreach loop on array 
    username.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("hello".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thank you for loggin in again."));
        }
    });
}
