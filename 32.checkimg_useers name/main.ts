// array of current users
let current_users = ["Manaf",'maaz',"Ahnaf","Aswad","Umer"]


// array of new users
let new_users = ["Muavia","Tasmia","Maaz","Sumama",'Manaf']

// loop through new-users to check for usernames avaibility
new_users.forEach(new_one_user =>{
   
    //creating a condition for username already exit and save in our_condition available
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print different messages use if-else statements
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }
})