function solve(input){
    let firstArray = input.shift().split(', ');
    let lostCount = 0;
    let blackList = 0;
    for(let i = 0; i <input.length; i++){
        let splittedInput = input[i].split(' ');
        if(splittedInput[0] === 'Blacklist'){
            if(firstArray.includes(splittedInput[1])){
                console.log(`${splittedInput[1]} was blacklisted.`);
                blackList++;
                let index = firstArray.indexOf(splittedInput[1]);
            firstArray.splice(index,1,"Blacklisted");
            }else{
                console.log(`${splittedInput[1]} was not found.`);
            }
        }
        if(splittedInput[0] === "Error"){
            let index = firstArray[Number(splittedInput[1])];
            if(Number(splittedInput[1]) > firstArray.length && Number(splittedInput[1]) < firstArray.length ){
                continue;
            }else{
                if(index === "Blacklisted"){
                    continue;
                }else if(firstArray.includes(firstArray[splittedInput[1]]) && firstArray[splittedInput[1]] !=="Lost") {
                        console.log(`${index} was lost due to an error.`)
                        lostCount++;
                        let newIndex = firstArray.indexOf(index);
                        firstArray.splice(Number(newIndex),1,"Lost");
                    
                    
                }
            }
            }
            if(splittedInput[0] === "Change"){
                if(Number(splittedInput[1]) > firstArray.length || Number(splittedInput[1]) < 0 ){
                    continue;
            }else if(firstArray.includes(firstArray[splittedInput[1]])){
                console.log(`${firstArray[Number(splittedInput[1])]} changed his username to ${splittedInput[2]}.`);
                firstArray.splice(Number(splittedInput[1]),1,splittedInput[2]);
                
            }
    }
    if(splittedInput[0] === "Report"){
        console.log(`Blacklisted names: ${blackList}`);
        console.log(`Lost names: ${lostCount}`);
        console.log(`${firstArray.join(' ')}`);
        
    }
}
}
//solve(["Mike, John, Eddie","Blacklist Mike","Error 6","Report"]);
console.log(`------->`);
solve(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
console.log(`--------->`);
solve(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])
