function sortNumbers(arr){
    let lastEle = Number(arr[arr.length - 1]);
    let step = ' ';
    for(let i = 0 ; i <arr.length - 1;i+=lastEle){
        step += arr[i] + ' ';
    }
    console.log(step);
    
}
sortNumbers(['5', '20', '31', '4', '20', '2']);
sortNumbers(['dsa', 'asd', 'test', 'test', '2']);
sortNumbers(['1', '2', '3', '4', '5', '6']);