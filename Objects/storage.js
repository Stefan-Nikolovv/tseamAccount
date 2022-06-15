function storage(input){
    let result  = new Map();
    for(let product of input){
        let splittedInput = product.split(' ');
        let name = splittedInput[0];
        let quantity = Number(splittedInput[1]);
        if(result.has(name)){
            let currQuantity = result.get(name);
            result.set(name,quantity + currQuantity);
        }else{
            result.set(name,quantity);
        }
    }
    for(let product of result ){
        console.log(`${product[0]} -> ${product[1]}`);
    }
    
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
console.log('-------->');
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);