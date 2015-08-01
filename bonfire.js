function largestOfFour(arr) {
  for (var i=0; i<arr.length; i++)
    if (arr[i][i] > arr[i][i+1]){
      console.log("It's larger " + arr[i][i]);
    }
  return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
