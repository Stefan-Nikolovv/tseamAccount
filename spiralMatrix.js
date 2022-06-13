function spiralMatrix(x, y){
    let results = [];
    for (let i = 0; i < x; i++) {
        results.push([]);
     }
  let counter = 1; // what number we are pushing in
  let startColumn = 0; // keep track of start column
  let endColumn = x - 1; // keep track of last index
  let startRow = 0; // keep track of start row
  let endRow = x - 1; // keep track of last index

  while(startColumn <= endColumn && startRow <= endRow){
    for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
    console.log(results);
  return results;
  }
  
spiralMatrix(5, 5);