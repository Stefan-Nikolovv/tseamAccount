function dishWasher(input){
    let index = 1;
    let oneBottle = 750;
    let bottleWasher = Number(input[0]);
    let washingDishes = input[index];
    index++;
    let allWasher = oneBottle * bottleWasher;
    let counterDishes = 0;
    let counterPans = 0;
    let counter = 0;
    let washerDish = 5;
    let washerPan = 15;

    while(washingDishes !== "END"){
       let dishes = Number(washingDishes);
       if(counter < 2){
           allWasher -= dishes * washerDish;
           counterDishes += dishes;
           counter++;
       }else if(counter === 2){
           allWasher -= dishes * washerPan;
           counterPans += dishes;
           counter = 0;
       }if(allWasher < 0){
           console.log(`Not enough detergent, ${Math.abs(allWasher)} ml. more necessary!`)
           break;
       }
       washingDishes = input[index];
       index++;
    }
    if(allWasher >= 0 ){
    console.log(`Detergent was enough!`);
    console.log(`${counterDishes} dishes and ${counterPans} pots were washed.`);
    console.log(`Leftover detergent ${allWasher} ml.`);
}
}
dishWasher(["2", "53","65", "55", "END"]);
//dishWasher(["1", "10","15", "10", "12", "13", "30"]);