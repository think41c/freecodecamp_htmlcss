function largestOfFour(arr) {
  for (var block=0; block<arr.length; block++){
    for (var i=0; i<arr.length; i++) {
    if (arr[block][i] > arr[block][i+1]){
      console.log("It's larger " + arr[i][i]);
      }
    }
  }
  return arr;
}