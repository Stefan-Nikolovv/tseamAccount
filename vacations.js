function vacations(input){
    let index = 2;
    let moneyNeeded = Number(input[0]);
    let moneythatHave = Number(input[1]);
    let priviusValue = 0;
    let startingMoney = input[index];
    index++;
    

    while(startingMoney !== "End"){
        priviusValue = Number(input[index]);
        if(startingMoney === "spend"){
            index++;
            startingMoney = input[index];
            moneythatHave -= priviusValue;
        }
        if(moneythatHave < 0){
            console.log("no money");
            break;
        }
        if(moneyNeeded < moneythatHave){
            console.log("vacation");
        }
        if(startingMoney === "save"){
            index++;
            startingMoney = input[index];
            moneythatHave += priviusValue;
        }
    }
}
vacations(["2000", "1000", "spend", "1200", "save", "1000"]);