function palindromeIntegers(array){
    let curr = [array[0]].reverse().join("");
    let next = curr;
    let nez = [];
    console.log(next);
    
    for(let i = 0; i< curr.length; i++){
         console.log(curr[i]);
         console.log(nez);
        
    }

}
palindromeIntegers([123,323,421,121]);