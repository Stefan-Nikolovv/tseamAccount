function system(input){
    let index = 1;
    let neededMoney = Number(input[0]);
    let allMoney = input[index];
    index++;
    let paidCash = 0; // платено кеш
    let padiCard = 0; // платено с карта
    let counterCash = 0;
    let counterCard = 0;
    let counterAllmoney = 0;
    let counCard = 0;

    while(allMoney !== "End"){
        let money = Number(allMoney);
        if(money <= 10){
            counCard++;
            console.log("Error in transaction!");
        }else if (money >= 100 && counCard % 2 === 0){
            console.log("Error in transaction!");
        }
        else{
            counterAllmoney += money;
            console.log("Product sold!")
            if(money <= 100){
                paidCash += money;
                counterCash++;
            }else if(money >= 100){
                padiCard += money;
                counterCard++;
            }
        }
        if(counterAllmoney >= neededMoney){
            let averCS = paidCash / counterCash;
            let averCC = padiCard / counterCard;
            console.log(`Average CS: ${averCS.toFixed(2)}`);
            console.log(`Average CC: ${averCC.toFixed(2)}`);
            break;
        }
        
        allMoney = input[index];
        index++;
      
    }
    if(neededMoney > allMoney){
        
    }
    console.log("Failed to collect required money for charity.");
    
}
system(["500", "120","8", "63", "256", "78", "317"]);
//system(["600", "86","150", "98", "227", "End"]);