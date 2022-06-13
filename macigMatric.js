function magicMatrices(arr){
    let arr1 = arr[0];
    let arr2 = arr[1];
    let arr3 = arr[2];
    let newArray1 = 0;
    let newArray2 = 0;
    let newArray3 = 0;
    let boolean = false;
      for(let i = 0 ; i < arr1.length; i++){
        newArray1 += Number(arr1[i]);
      }for(let i = 0 ; i < arr1.length; i++){
        newArray2 += Number(arr2[i]);
      }for(let i = 0 ; i < arr1.length; i++){
        newArray3 += Number(arr3[i]);
      }
      
      if(newArray1 === newArray2 && newArray2 === newArray3){
        boolean = true;
        console.log(boolean);
      }else{
        console.log(boolean);
      }
}
magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);
magicMatrices([[11, 32, 45],[21, 0, 1],[21, 1, 1]]);
magicMatrices([[1, 0, 0],[0, 0, 1],[0, 1, 0]]);