function Sandwich(...items: string[]): void {
    console.log("sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich natasha arif")


Sandwich('capsicum' , 'tomato' , 'chicken')
Sandwich('beef' , 'cheese')
Sandwich('garlic chicken' , 'soya sauce')