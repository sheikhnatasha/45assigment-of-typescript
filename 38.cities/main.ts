function describe_city(city: string, country: string = 'pakistan'): void {
    console.log(`${city} is in ${country}`)
}

describe_city('karachi')   // defult sentence
describe_city('france','europe')
describe_city('lahore' , 'punjab')