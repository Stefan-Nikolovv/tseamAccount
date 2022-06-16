function solve(input){
    /*function sorting(reserve, reserve1){
        let reserveIsVip = reserve.charAt(0);
        reserveIsVip = !isNaN(reserveIsVip);
        let reserve1IsVip = reserve1.charAt(0);
        reserve1IsVip = !isNaN(reserve1IsVip);
        if(reserveIsVip && reserve1IsVip){
            return 0;
        }else if(reserveIsVip && !reserve1IsVip){
            return -1;
        }else if(reserve1IsVip && !reserveIsVip){
            return 1;
        }
        return 0;
    }*/
    let listVip = [];//new Set;
    let listReg = [];//new Set;
    let IsParty = false;
    for(let gast of input){
        if(gast === "PARTY"){
            IsParty = true;
        }
        if(IsParty === false){
            let reserveIsVip = gast.charAt(0);
        reserveIsVip = !isNaN(reserveIsVip);
            if(reserveIsVip == true){
                listVip.push(gast);
            }else{
                listReg.push(gast);
            }
            
        }
        if(IsParty === true){
            let indexOf = listReg.indexOf(gast);
            if(indexOf>=0){
                listReg.splice(indexOf,1);
            }
            indexOf = listVip.indexOf(gast)
            if(indexOf>= 0)
            {
                listVip.splice(indexOf,1);
            }
            //listReg.delete(gast);
               // listVip.delete(gast);
        }
    }
    let sortVip = Array.from(listVip);
    let sortReg = Array.from(listReg);
    let lengthOfResult = sortVip.length + sortReg.length;
    console.log(`${lengthOfResult}`);
    if(sortVip.length != 0){
        console.log(`${sortVip.join("\n")}`);
    }
    if(sortReg != 0){
        console.log(`${sortReg.join("\n")}`);
    }
    
}


/*solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);*/
console.log(`---------->`)//
solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ']);