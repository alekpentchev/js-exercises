const sampleData = require('./sample-data');

// solution 1
// First thing which came to my mind. Overcomplicated - nested arrays and a recursive function. But it works...at least for small datasets.
function solution(arr) {
  let countOfAllShining = 0;
  let parametrizedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    const int = arr[i];
    let intObj = {
      val: int,
      isTurned: true,
      isShining: false
    }
    
    parametrizedArray.push(intObj);
    
    const recursiveCheckPrevious = num => {
      const previousNumber = parametrizedArray.find(elem => elem.val === num - 1);
      
      if (num === 1) {
        for (let x = 1; x < intObj.val; x ++) {
          parametrizedArray.find(el => el.val === x).isShining = true;
        }
        countOfAllShining++;
      } else if (!previousNumber) {
        return false;
      } else {
        const anotherPreviousNumber = num - 1;
        return recursiveCheckPrevious(anotherPreviousNumber);
      }
    }
    recursiveCheckPrevious(int);
  }
  return countOfAllShining;
}

console.log(solution(sampleData.simpleArray));