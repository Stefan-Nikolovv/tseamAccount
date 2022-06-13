function gramophone(band, album, song){
    let bandAsString = String(band);
    let albumAsString = String(album);
    let songAsString = String(song);
    let result = 0
    result += ((bandAsString.length * albumAsString.length) * songAsString.length / 2);
    result = result / 2.5;
    console.log(`The plate was rotated ${Math.ceil(result)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');