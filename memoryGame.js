function memoryGame(array){
    let firstIndex = array[0].toString().split(' ');
    let moves = 0;
    for(let i = 1;i < array.length;i++){
        let splittedInput = array[i].split(' ');
        let firstSplitted = splittedInput[0];
        let secoundSplitted = splittedInput[1];
        if(firstIndex[firstSplitted] === firstIndex[secoundSplitted] && 
            firstIndex[firstSplitted] !== undefined && firstIndex[secoundSplitted] !== undefined ){
            moves++;
            console.log(`Congrats! You have found matching elements - ${firstIndex[firstSplitted]}!`);
            firstIndex.splice(firstSplitted,1);
            if(firstSplitted < secoundSplitted){
                secoundSplitted--;
            }
            firstIndex.splice(secoundSplitted,1);
        }if((firstSplitted < 0 || secoundSplitted < 0) || firstSplitted === secoundSplitted){
            moves++;
            let devidedMidArray = firstIndex.length / 2;
            firstIndex.splice(Math.floor(devidedMidArray),0,`${-moves}a`,`${-moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }
        if(firstIndex[firstSplitted] !== firstIndex[secoundSplitted]){
            moves++;
            console.log("Try again!");
        }
        if(firstIndex.length === 0 ){
            console.log(`You have won in ${moves} turns!`)
            break;
        }
        if(firstSplitted === 'end'){
            console.log(`Sorry you lose :(
                ${firstIndex.join(' ')}`);
            break;
        }
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"]
    );
    console.log('-------------->');
memoryGame([
  "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"]);
    console.log(`----------------->`);
    memoryGame([
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ]
        );
