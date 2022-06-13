function computerStore(array){
    let priceWithOutTaxes = 0;
    let taxes = 0;
    let finalPrice = 0;
    let isSpecial = false;
    for(let i = 0; i < array.length;i++){
        let price = Number(array[i]);
        if(price > 0){
            priceWithOutTaxes += price;
        }
        if(price < 0){
            console.log("Invalid price!");
        }
        if(array[i] === 'special'){
             isSpecial = true;
        }
    }
    taxes += priceWithOutTaxes * 0.2;
    finalPrice = taxes + priceWithOutTaxes;
    if(isSpecial){
        finalPrice -= finalPrice * 0.1;
    }
    if(finalPrice === 0){
        console.log("Invalid order!");
    }
    if(finalPrice > 0){
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithOutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);
    console.log('--------------->');
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]);
    console.log('--------------->');
    computerStore(['regular']);
        
    