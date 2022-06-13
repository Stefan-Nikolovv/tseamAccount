function hearthDelivery(array){
    let houses = array[0].split("@");
    let index = 0;
    let houseCount = 0;
    for(let i = 1; i<array.length;i++){
        let splittedIndex = array[i].split(' ');
        if(splittedIndex[0] === 'Jump'){
            index += Number(splittedIndex[1]);
            index = index % houses.length;
            if(houses[index] === 0){
              console.log(`Place ${index} already had Valentine's day.`);
              continue; 
            }
            houses[index] -= 2;
        }if(splittedIndex[0] === "Love!"){
            break;
        }
        if(houses[index] === 0){
            console.log(`Place ${index} has Valentine's day.`);
        }
        
    }
    for(let j = 0; j < houses.length;j++){
        if(houses[j]!==0){
            houseCount++;
        }
    }
    if(houseCount === 0){
        console.log("Mission was successful.");
    }else{
        console.log(`Cupid's last position was ${index}.`);
        console.log(`Cupid has failed ${houseCount} places.`)
    }

}

console.log('--------------------->');
hearthDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);

