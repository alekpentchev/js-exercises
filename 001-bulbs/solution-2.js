const sampleData = require('./sample-data');

// A better option than the 1st one. Got rid of recursive function and multiple access of the dataset array.
// 

function solution(arr) {
  let countOfShines = 0;
  const switchedOnBulbs = [];
  switchedOnBulbs.length = arr.length
  
  for (let i = 0; i < arr.length; i++) {
    const bulbIndexToAdd = arr[i] - 1
    switchedOnBulbs[bulbIndexToAdd] = arr[i];    
        
    if (arr[i] === 1) {
      countOfShines++;
      continue;      
    }
    
    for (let x = bulbIndexToAdd; x >= 0; x--) {
      if (switchedOnBulbs[x] === undefined) {
        break;
      } else if (switchedOnBulbs[x] === 1) {
        countOfShines++;
        break;
      }
    }
  }
  return countOfShines;
}


  console.log(solution(sampleData.simpleArray))