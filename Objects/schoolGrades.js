function schoolGrades(input){
    let result = {};
    for(let list of input){
        let split = list.split(' ');
        if(result.hasOwnProperty(split[0])){
           let currGrade = result[split[0]];
           result[split[0]] = currGrade.concat(split.slice(1));
       }else{
        result[split[0]] = split.slice(1) ;
       }
    }
    let obj = Object.keys(result);
    obj.sort();
    for(let name of obj){
      let arrLeng = result[name].length;
      let sum = 0;
      result[name].forEach(element => {sum += Number(element)})
      let finalSum = sum / arrLeng;
      console.log(`${name}: ${finalSum.toFixed(2)}`);
    }
    
      }  

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
console.log(`------->`);
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);