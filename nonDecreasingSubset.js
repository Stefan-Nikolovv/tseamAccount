function nonDecreasingSubset(arr){
    let firstIndex = arr[0];
    let newArray = [];
    for(let i = 0; i <arr.length;i++){
        if(firstIndex <= arr[i]){
            firstIndex = arr[i];
            newArray.push(arr[i]);
        }
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);