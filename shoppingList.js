function shoppingList(array){
    let shoppingList = array[0].split("!");
    
    for(let i = 1; i< array.length;i++){
        let splittedInput = array[i].split(' ');
        function index(element){
           return element === splittedInput[1];
        }
        if(splittedInput[0] === "Urgent"){
           if(!shoppingList.includes(splittedInput[1])){
               shoppingList.unshift(splittedInput[1]);
           }

        }
        if(splittedInput[0] === "Unnecessary"){
            if(shoppingList.includes(splittedInput[1])){
              let indexOfElement =  shoppingList.findIndex(index);
              shoppingList.splice(indexOfElement, 1);
            }
        }
        if(splittedInput[0] === "Correct"){
            if(shoppingList.includes(splittedInput[1])){
                let indexOfElement =  shoppingList.findIndex(index);
                shoppingList.splice(indexOfElement, 1,splittedInput[2]);
            }
        }
        if(splittedInput[0] === "Rearrange"){
            if(shoppingList.includes(splittedInput[1])){
                let indexOfElement =  shoppingList.findIndex(index);
                shoppingList.splice(indexOfElement,1,)
                shoppingList.push(splittedInput[1]);
            }
        }
        if(array[i] === "Go Shopping!"){
            break;
        }
    }
    console.log(shoppingList.join(", "));
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
console.log('--------------->');
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);
