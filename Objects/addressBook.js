function addressBook(input){
    let result = {};
    for(let names of input){
        let name = names.split(":");
        result[name[0]] = name[1];   
    }
    let sorted = Object.keys(result).sort();
    for(let everyday of sorted ){
        console.log(`${everyday} -> ${result[everyday]}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);