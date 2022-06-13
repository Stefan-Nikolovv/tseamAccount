function guineaPig(array){
    let food = array[0];
    let hay = array[1];
    let cover = array[2];
    let weight = array[3];
    let foodInGram = food * 1000;
    let hayInGram = hay * 1000;
    let coverInGram = cover * 1000;
    let weightInGram = weight * 1000;

    for(let i = 1;i<= 30; i++){
        foodInGram -= 300;
        if(i % 2 === 0){
            hayInGram -= foodInGram * 0.05;
        }
        if(i % 3 === 0){
            coverInGram -= weightInGram / 3;
        }
    }
    if(foodInGram <= 0 || hayInGram <= 0 || coverInGram <= 0 ){
        console.log("Merry must go to the pet store!");
    }else{
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGram/ 1000).toFixed(2)}, Hay: ${(hayInGram / 1000).toFixed(2)}, Cover: ${(coverInGram / 1000).toFixed(2)}.`);
    }
}
guineaPig(["10", 
"5", 
"5.2", 
"1"]
);
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
]
);
guineaPig(["9",
"5",
"5.2",
"1"]
);