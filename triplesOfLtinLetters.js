function addOrRem(string){
    let counterAdd = [];
    for (let i = 0; i<string.length; i++){
        if(string[i] === "add"){
            counterAdd.push((i + 1));
        }else if(string[i] === 'remove'){
            counterAdd.pop();
        }
    }
    if(counterAdd.length > 0){
        console.log(counterAdd.join(' '));
    }else{
        console.log(`Empty`);
    }
    
}
addOrRem(['add', 'add', 'add', 'add']);
console.log("--->");
addOrRem(['add', 'add', 'remove', 'add', 'add']);
console.log("--->");
addOrRem(['remove', 'remove', 'remove']);