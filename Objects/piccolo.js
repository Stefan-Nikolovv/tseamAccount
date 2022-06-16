function solve(input){
    let result = new Set;
    for(list of input){
        let split = list.split(', ');
        if(split[0] === "IN"){
            result.add(split[1]);
        }else{
            result.delete(split[1]);
        } 
        }
        let empty = Array.from(result).sort();
        if(empty.length <= 0){
            console.log("Parking Lot is Empty");
        }else{
            console.log(empty.join("\n"));
        }

    }
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);