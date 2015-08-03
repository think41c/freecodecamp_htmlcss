function sum(array){
  var total = 0;
  for (var i=0; i<array.length; i++) {
    total += array[i];
  }
  return total;
}

function range(start, end, step) {
  if (step == null) step = 1;
  
  var array = [];
  
  if (step > 0) {
    for (var i=start; i<=end; i+=step) {
      console.log("i>= end?");
      array.push(i);
      } 
  } else {
    for (var i=start; i>=end; i+=step) {
      console.log("here?");
      array.push(i);  
    }
  }
  
  return array;
}

console.log(sum(range(1,10)));
console.log(sum(range(1, 10)));
console.log(range(1,10));
console.log(range(2, 9, 1));