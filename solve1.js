function solve1(Pass){
    let pass = Pass[0];
    for(let i = 0 ; i < Pass.length; i++ ){
        let loginPwd = '';
        let currPwd = Pass[i];
        for(let j = currPwd.length - 1; j >= 0; j--){
            loginPwd += currPwd[j];
        }
        if(pass == loginPwd){
            console.log('Log In');
        }else{
            console.log('Blocked');
        }
    }
}
solve1(['Acer', 'let me in', 'password', 'recA']);