function solve(input){
    let firstIndex = input.shift().split(", ");
    for(let i =0;i<input.length;i++){
        let splittedInput = input[i].split('-');
        if(splittedInput[0].trim() === "Add"){
            if(!firstIndex.includes(splittedInput[1].trim())){
                firstIndex.push(splittedInput[1].trim());
            }
        }if(splittedInput[0].trim() === "Remove"){
            if(firstIndex.includes(splittedInput[1].trim())){
                let index = firstIndex.indexOf(splittedInput[1].trim())
                firstIndex.splice(Number(index),1);
            }else{
                continue;
            }
        }if(splittedInput[0].trim() === "Bonus phone"){
            let newSpliet = splittedInput[1].split(':');
            if(firstIndex.includes(newSpliet[0].trim())){
                let indexOFOld = firstIndex.indexOf(newSpliet[0].trim());
                firstIndex.splice(Number(indexOFOld) + 1,0,newSpliet[1].trim());
            }else{
                continue;
            }
        }if(splittedInput[0].trim() === "Last"){
            if(firstIndex.includes(splittedInput[1].trim())){
                let indexOFPhone = firstIndex.indexOf(splittedInput[1].trim());
                firstIndex.splice(indexOFPhone,1);
                firstIndex.push(splittedInput[1].trim());
            }
        }if(splittedInput[0] === "End"){
           console.log(firstIndex.join(', '));
        }
    }
}
solve(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]);
console.log(`---------->`);
solve(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"]);
console.log(`---------->`);
solve(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"]);


