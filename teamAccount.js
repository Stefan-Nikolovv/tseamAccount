function teamAccount(arr){
    let account = arr[0];
    let splitAcc = account.split(' ');
    for(let i = 1; i < arr.length;i++){
        let splitArray = arr[i].split(' ');
        if(splitArray[0] === "Install"){
            if(!splitAcc.includes(splitArray[1])){
                splitAcc.push(splitArray[1]);
            }        
        }if(splitArray[0] === "Uninstall"){
            if(splitAcc.includes(splitArray[1])){
                splitAcc.splice(splitAcc.indexOf(splitArray[1]), 1);
            }
        }
        if(splitArray[0] === "Update"){
            if(splitAcc.includes(splitArray[1])){
                splitAcc.splice(splitAcc.indexOf(splitArray[1]), 1);
                splitAcc.lastIndexOf(splitAcc)
                splitAcc.push(splitArray[1]);
            }
        }
        if(splitArray[0] === "Expansion"){
            let expasion = splitArray[1].split('-');
            if(!splitAcc.includes(expasion[0])){
                //splitAcc.push(expasion.join(':'));
            }else{
                let indexOf = splitAcc.indexOf(expasion[0]);
                splitAcc.splice(indexOf + 1, 0,expasion.join(':'));
            }
        }if(splitArray[0] === "Play!"){
            console.log(splitAcc.join(' '));
        }
    }
}
teamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
teamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);