function theLift(array){
    let passengers = Number(array[0]);
    let freeWagons = array[1].split(' ').map(Number);
    let isFreeSpace = false;
    for(let i = 0;i<freeWagons.length;i++){
        let currWagon = freeWagons[i];
        let freeSpace = 4 - currWagon;
        
        if(passengers >= 0){
            if(passengers <= freeSpace){
                isFreeSpace = true;
                freeSpace = passengers;
            }
            passengers -= freeSpace;
            freeWagons[i] += freeSpace;
        }
    }
    if(isFreeSpace){
        console.log(`The lift has empty spots!`);
    }else if(passengers > 0){
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
    }
    console.log(freeWagons.join(' '));
}
theLift([
    "15",
    "0 0 0 0 0"
   ]);
theLift([
    "20",
    "0 2 0"
   ]);