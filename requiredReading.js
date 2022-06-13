function requiredReading(pages, pagesPerHour, days){
    let totalHours = pages / pagesPerHour;
    let requierdHours = totalHours / days;
    console.log(requierdHours);
}
requiredReading(212, 20 ,2);
requiredReading(432, 15, 4);