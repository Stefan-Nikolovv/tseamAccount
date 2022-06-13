function softUniReception(input){
    let firstEmp = Number(input[0]);
    let secondEmp = Number(input[1]);
    let thirdEmp = Number(input[2]);
    let askedQue = Number(input[3]);
    let allEmpPower = firstEmp + secondEmp + thirdEmp;
    let counter = 0;
    let currDay = 0;
    while(true){
        askedQue -= allEmpPower;
            counter++;
        if(counter === 3 && askedQue > 0){
            counter++;
            currDay += counter;
            counter = 0;
        }
        if(askedQue <= 0){
            counter += currDay;
            break;
        }
    }
    console.log(`Time needed: ${counter}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);
