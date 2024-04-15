// array of current users
var current_users = ["Manaf", 'maaz', "Ahnaf", "Aswad", "Umer"];
// array of new users
var new_users = ["Muavia", "Tasmia", "Maaz", "Sumama", 'Manaf'];
// loop through new-users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    //creating a condition for username already exit and save in our_condition available
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages use if-else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
