function solve(input){
    let maxHealth = input.shift();
    let currHealth = maxHealth;
    let counter = 0;
    let countWins = 0;
    for(let i= 0; i<input.length;i++){
        let currInput = String(input[i].split(','));
        counter++;
        if(currInput === "End of battle"){
            console.log(`Won battles: ${countWins}. Energy left: ${currHealth}`);
            break;
        }
        
        if(currHealth > 0){
            countWins++;
            currHealth -= Number(currInput);
            if(currHealth > maxHealth){
                break;
            }
            if(counter % 3 === 0){
                currHealth += counter;
            }
        }else if(currHealth <= 0){
            console.log(`Not enough energy! Game ends with ${countWins} won battles and ${currHealth} energy`);
            break;
        }
       
    }
}
/*solve((["200",
"54",
"14",
"28",
"13",
"End of battle"])
);*/
console.log(`--------->`);
solve(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);
