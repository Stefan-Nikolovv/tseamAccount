function solve(Pass){
    let pass = Pass[0];
    for(let i = 1; i < Pass.length; i++){
        if(pass == Pass[i].split("").reverse().join("")){
            console.log('log in');
        }else{
            console.log('Blocked');
        }
    }
}
solve(['Acer', 'let me in', 'password', 'recA']);