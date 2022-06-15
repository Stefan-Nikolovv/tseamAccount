function meetings(input){
    let result = {};
    for(let day of input){
        let days = day.split(' ');
        if(result[days[0]]){
            console.log(`Conflict on ${days[0]}!`);
        }else{
            console.log(`Scheduled for ${days[0]}`);
            result[days[0]] = days[1];
        }
        
        
    }
    for(let everyday of Object.keys(result) ){
        console.log(`${everyday} -> ${result[everyday]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
console.log("--------->");
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);