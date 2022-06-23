function solve(input){
    let firstInput = input.shift().split('|');
   
    for(let i = 0; i < input.length; i++){
        let currInput = input[i].split(" ");
        if(currInput[0] === "Loot"){
            for(let i = 1; i < currInput.length;i++){
                if(!firstInput.includes(currInput[i]))
                firstInput.splice(0,0,currInput[i]);
               
            }
            }
            if(currInput[0] === "Drop"){
                if(currInput[1] >= firstInput.length || currInput[1] < 0){
                    continue;
                }
                let dropItem = firstInput.splice(currInput[1],1)
                firstInput.push(dropItem[0]);
            }
            if(currInput[0] === "Steal"){
                firstInput.reverse();
                let stealItems = firstInput.splice(0,currInput[1]);
                console.log(stealItems.reverse().join(", "));
                firstInput.reverse();
            }
    }
    let resultOfJ = 0;
    for(let j = 0; j < firstInput.length; j++){
        resultOfJ += firstInput[j].length;
    }
    if(resultOfJ > 0){
        let averageGain = resultOfJ / firstInput.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
    }else{
        console.log("Failed treasure hunt.")
    }
    
}
/*solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);*/
solve(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);

