let username = ["hamza","zain","kamran","imran","admin"]

username = [] 

if(username.length === 0){
    console.log("your array in empty we need to find some users")
}else{
    // using foreach loop on array 
    username.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`hello${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thank you for loggin in again.`)
    }
})
}