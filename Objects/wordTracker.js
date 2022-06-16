function wordTracker(input){
    let result = new Map();
    let index = input.shift();
    let split = index.split(' ');
    for(word of split){
        result.set(word, 0);
    }
    for(currWord of input){
        if(result.has(currWord)){
            let counter = result.get(currWord) + 1;
            result.set(currWord,counter);
        }
    }
    let entries = Array.from(result).sort((a,b)=> b[1] - a[1])
    for(entry of entries){
        console.log(entry.join(" - "));
    }

}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
    console.log(`---------->`);
    wordTracker([
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);