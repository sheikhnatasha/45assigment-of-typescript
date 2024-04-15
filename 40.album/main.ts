function makeAlbum(artist: string , title: string): {artist: string , title: string}{
    const dictionaries ={
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = makeAlbum("ali","light")
console.log(album)

 album = makeAlbum("raza","yellow wave")
console.log(album)

 album = makeAlbum("hamdan","sunrise")
console.log(album)

 album = makeAlbum("murtasim","beach")
console.log(album)
