function rotate(arr){
    let lastEle = arr.pop();
    let currArray = [];
    for(let i = 0; i<lastEle; i++){
        let lastEle1 = arr.pop();
        arr.unshift(lastEle1);
    }
    console.log(arr.join(" "));
}
rotate(['1', '2', '3', '4', '2']);
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);