// creating variable 
function makeShirt(size: string = 'large', text: string = 'i love typescript'): void{
    console.log(`you have order a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('medium');

// different message
makeShirt('small','i need a big shirt to wear')
