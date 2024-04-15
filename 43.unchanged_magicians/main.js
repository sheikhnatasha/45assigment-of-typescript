function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician: string[] = ["jasmeen","joker","json"];
//show_magicians(magician)
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["jasmeen", "joker", "json"];
make_great(magicians2);
show_magicians(magicians2);
function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' the great');
    }
    return greatmagicians;
}
var magicians3 = ["jasmeen", "joker", "json"];
//////////////////////////////////////////////////////////////////////////////
var greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(magicians2);
