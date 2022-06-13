function invertory(array){
    let firstIndex = array.shift().split(', ');
    for(let i = 0; i < array.length;i++){
        let splittedInput = array[i].split(' - ');
        
        if(splittedInput[0] === 'Collect'){
           if (!firstIndex.includes(splittedInput[1])){
               firstIndex.push(splittedInput[1]);
           }
        }
        if(splittedInput[0] === 'Drop'){
            if(firstIndex.includes(splittedInput[1])){
                function matchItem(Item){
                    return Item === splittedInput[1];
                }
                let indexOfItem = firstIndex.findIndex(matchItem);
                firstIndex.splice(indexOfItem, 1);
            }
        }
        if(splittedInput[0] === 'Combine Items'){
            let newItem = splittedInput[1].split(':')
            
            if (firstIndex.includes(newItem[0])){
                function matchNewItem(element){
                    return element === newItem[0];
                }
                let indexOfNewItem = firstIndex.findIndex(matchNewItem);
                firstIndex.splice(indexOfNewItem + 1, 0, newItem[1]);
            }
        }if(splittedInput[0] === 'Renew'){
            if(firstIndex.includes(splittedInput[1])){
                function matchNewItem(element){
                    return element === splittedInput[1];
                }
                let indexOfNewItem = firstIndex.findIndex(matchNewItem);
                firstIndex.splice(indexOfNewItem,1);
                firstIndex.push(splittedInput[1]);
                
            }
        }if(splittedInput[0] === 'Craft!'){
            break;
        }
    }
    console.log(firstIndex.join(", "));
}
invertory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!']);
invertory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);