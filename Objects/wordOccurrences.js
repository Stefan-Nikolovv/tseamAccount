function wordOccurrences(input){
    let result = new Map();
    for(let word of input){
        if(!result.has(word)){
            result.set(word , 1)
        }else{
            let counter = result.get(word);
            result.set(word , ++counter);
        }
    }
    let array = Array.from(result).sort((a,b) => b[1]- a[1])
    for(let index of array){
        console.log(index.join(" -> ") + " times");
        
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);