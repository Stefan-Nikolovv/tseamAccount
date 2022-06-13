function arrayModifay(array){
    let firstArray = array[0].toString().split(' ').map(Number);
    for(let i = 1;i < array.length;i++){
        let splittedArray = array[i].split(' ');
        if(splittedArray[0] === 'swap'){
            let temp = firstArray[splittedArray[1]];
            firstArray[splittedArray[1]] = firstArray[splittedArray[2]];
            firstArray[splittedArray[2]] = temp;
        }
        if(splittedArray[0] === "multiply"){
            firstArray[splittedArray[1]] *= firstArray[splittedArray[2]];
        }
        if(splittedArray[0] === 'decrease'){
            for(let j = 0; j < firstArray.length;j++){
                firstArray[j]--;
            }
        }
        if(splittedArray[0] === 'end'){
            console.log(firstArray.join(', '));
            break;
        }
    }
}
arrayModifay([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
    console.log('--------------->');
arrayModifay([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);
