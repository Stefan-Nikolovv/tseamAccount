function muOnline(array){
    let splittedInput = array.split('|');
    let health = 100;
    let roomCount = 0;
    let chestAmount = 0;
    let currHealth = 100;
    let healNeeded = 0;
    for(let i = 0; i<splittedInput.length; i++){
     let currSplit = splittedInput[i].split(' ');
     let monster = currSplit[0];
     roomCount++;
        if(currSplit[0] === "chest"){
            chestAmount += Number(currSplit[1]);
            console.log(`You found ${currSplit[1]} bitcoins.`);
        }else if(currSplit[0] === "potion"){
            let potionHeal = Number(currSplit[1]);
            healNeeded = health - currHealth;
            if(potionHeal >= healNeeded){
                console.log(`You healed for ${healNeeded} hp.`);
                console.log(`Current health: ${health} hp.`);
                currHealth = 100;
            }else{
                currHealth += potionHeal;
                console.log(`You healed for ${currSplit[1]} hp.`);
                console.log(`Current health: ${currHealth} hp.`);
            }
        }else{
            currHealth -= currSplit[1];
        }if(currHealth <= 0){
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${roomCount}`);
            break;
        }else if(currHealth >= 0 && monster !== 'chest' && monster !== 'potion'){
            console.log(`You slayed ${monster}.`);
            
        }
    }if(currHealth > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${chestAmount}`);
        console.log(`Health: ${currHealth}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log(`---------------->`);
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");