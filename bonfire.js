function largestOfFour(arr) {
  
  var result = [];
  
  for (var block=0; block<arr.length; block++){
    larger_temp = 0;
    for (var i=0; i<arr.length; i++) {
      if (arr[block][i] > larger_temp) {
        larger_temp = arr[block][i];
        } 
      }
    result.push(larger_temp);
  }
  console.log("Result ->" + result);
  return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));