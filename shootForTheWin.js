function solve(input){
    let firstInput = input.shift().split(' ');
    
    for(let i = 0; i< input.length; i++){
        let currIndex = input[i].split(' ');
        if(currIndex !== 'End'){
            if(currIndex < firstInput.length){
               for(let j = 0; j < firstInput.length - 1;j++){
                   if(firstInput[j + 1] > firstInput[0]){
                    let replaceIndex = Number(firstInput[j + 1]) - Number(firstInput[0]);
                    let serchedIndex = firstInput.indexOf(firstInput[j + 1]);
                    firstInput.splice(serchedIndex, 1,replaceIndex);
                    console.log(firstInput);
                   }
               }
             let number = Number(currIndex);
            firstInput.splice(number,1,-1);
            }else if(currIndex >= firstInput.length){
                let lastIndex = firstInput.length - 1;
                firstInput.splice(Number(lastIndex),1,-1);
            }
            

            console.log(firstInput);
        }
    }

}
solve(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
