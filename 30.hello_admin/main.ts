// creating a array
let userNames = ["hamza","kamran","admin","imran","zain"];

// using foreach loop on array
userNames.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`hello${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thank you for loggin in again.`)
    }
})