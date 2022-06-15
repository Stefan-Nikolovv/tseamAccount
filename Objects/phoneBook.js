function phoneBook(input){
    let result = {};
    
    for(let person of input){
        let inputs = person.split(' ');
        result[inputs[0]] = inputs[1];
    } 
    
    for(let name of Object.keys(result)){
        console.log(`${name} -> ${result[name]}`);
    } 
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
console.log("--------->");
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);