function clock(){
    for(let h = 0; h <= 23;h++){
        for(let m = 0; m <= 59;m++){
            for(sec = 0; sec <= 59; sec++){
                console.log(`${h} : ${m} : ${sec}`);
            }
        }
    }
}
clock([]);