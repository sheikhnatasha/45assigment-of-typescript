function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

//const magician: string[] = ["jasmeen","joker","json"];
//show_magicians(magician)



function make_great(magicians: string[]): void{
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i]   + ' the great'
                 
}                
}

const magicians2: string[] = ["jasmeen","joker","json"];
make_great(magicians2)
show_magicians(magicians2)



function make_great2(magicians: string[]): string[] {
    const greatmagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' the great');
    }
    return greatmagicians;
}

const magicians3: string[] = ["jasmeen","joker","json"];

//////////////////////////////////////////////////////////////////////////////

const greatmagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(magicians2);