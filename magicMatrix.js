function magicMatrix(arr){
    let firstArrar = 0;
    let magicNumber = 0;
    let boolean = true;
    for(let i = 0; i<arr.length;i++){
        let innerArray = arr[i];
        for(let j =0;j <innerArray.length;j++){
            firstArrar += Number(innerArray[j]);
        }
        if(i === 0){
            magicNumber = firstArrar;
        }
        if(magicNumber !== firstArrar){
            boolean = false;
        }
        firstArrar = 0;
    }
    for(let j = 0; j<arr.length;j++){
        for(let i = 0; i <arr.length;i++){
            let newArray= arr[i];
            firstArrar += newArray[j];


        }if(magicNumber !== firstArrar){
            boolean = false;
        }
        firstArrar = 0;

    }
    
    console.log(boolean);
}
magicMatrix([[4, 5, 6]
            ,[6, 5, 4]
            ,[5, 5, 5]]);
magicMatrix([[11, 32, 45],[21, 0, 1],[21, 1, 1]]);
magicMatrix([[1, 0, 0],[0, 0, 1],[0, 1, 0]]);