function sredno(input){
let index = 0;
let num = Number(input[index]);
index++;
let counter = 0;
    for(let i = 1;i <= num;i++){
        let devidedNum = Number(input[index]);
        index++;
        counter += devidedNum;
    }
    let sum = counter / num;
    console.log(sum.toFixed(2));
}
sredno(["4", "3", "2", "4", "2"]);