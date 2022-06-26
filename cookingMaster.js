function solve(input){
    let buged = Number(input[0]).toFixed(2);
    let student = Number(input[1]);
    let floar = Number(input[2]).toFixed(2);
    let egg = Number(input[3]).toFixed(2);
    let apron = Number(input[4]).toFixed(2);
    let procentige = student * 0.2;
    let allStudents = student + procentige;
    let finalRess= 0;
    let numbeOfStudeds = student / 5;
    if(student < 5){
        finalRess += (apron * Math.ceil(allStudents)) + (egg * 10 * student) + (floar * (student));
    }else if(student >= 5){
        finalRess += (apron * Math.ceil(allStudents)) + (egg * 10 * student) + floar * (student - numbeOfStudeds);
    }
    if(finalRess <= buged){
        console.log(`Items purchased for ${finalRess.toFixed(2)}$.`);
    }
    else{
        let needed = finalRess - buged;
        console.log(`${needed.toFixed(2)}$ more needed.`);
    }
}
solve([50,2,1.0,0.10,10.0]);
console.log(`--------->`);
solve([100,
    25,
    4.0,
    1.0,
    6.0]);
console.log(`----------->`);    
solve([946,20,12.05,0.42,27.89])
