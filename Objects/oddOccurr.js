function solve(input){
    let result = new Map();
    let split = input.toLowerCase().split(' ');
    for(word of split){
        let insesitive =word.toLowerCase();
        if(result.has(insesitive)){
            let counter = result.get(insesitive) + 1;
            result.set(insesitive,counter)
        }
        else{
            result.set(insesitive,1)
        }
    }
    let entry = Array.from(result);
    let finalResult = [];
    for([entries,entries1] of entry){
        if(entries1 % 2 === 1){
            finalResult.push(entries);
        }
    }
    console.log(finalResult.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('-------->');
solve('Cake IS SWEET is Soft CAKE sweet Food');