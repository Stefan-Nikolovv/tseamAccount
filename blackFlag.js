function solve(input){
    let days =Number(input[0]);
    let plunder = Number(input[1]);
    let expected =Number(input[2]);
    let day = 0;
    let allPlunder = 0;
    for(let i =0 ; i < days;i++){
        day++;
        allPlunder += plunder;
        if(day % 3 === 0){
            allPlunder += plunder / 2;
        }
        if(day % 5 ===0){
            allPlunder -= allPlunder * 0.3;
    }
}
if(allPlunder > expected){
    console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
   }else if(allPlunder < expected) {
    let percentage = (allPlunder * 100) / expected;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
   }
}
/*solve(["5",
"40",
"100"]);*/
solve(["10",
"20",
"380"]);
