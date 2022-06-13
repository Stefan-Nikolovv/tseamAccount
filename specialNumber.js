function specialNumber(n){
    for(let num = 1; num <= n;num++){
        let result = 0;
        let numAsSrting = String(num);
        for(let i = 0; i < numAsSrting.length; i++){
            result += Number(numAsSrting[i]);
        }
        let special =  false;
        if(result == 5 || result == 7 || result == 11){
            special = true;
        }
        if(special){
            console.log(`${result} -> ${'True'}`);
        }else{
            console.log(`${result} -> ${'False'}`);
        }
    }
}
specialNumber(15);