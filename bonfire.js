function factorialize(num) {
 
  console.log("The num coming in is " + num);
  console.log("*********");
  
  var count = 1;
  var hold  = 1;
  var result = 1;
  for (var i=1; i<num+1; i+=1) {
    console.log("i is " + i);
    result = result * i+1; 
    new_result = result * i;
    console.log("i+1 = " + (i+1) + " result = " + result);
    console.log(new_result);
  }

  //  1*2*3*4*5
  //  1*2=2, 2*3=6, 6*4=24, 24*5 = 120
  //  120 total 
  
  return num;
  
}

console.log(factorialize(4));