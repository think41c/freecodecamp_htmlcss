function countBs(stringy){
  var counter = 0;
  for (var i=0; i<stringy.length; i++){
    console.log(stringy.charAt(i));
    if (stringy.charAt(i) == "B")
      counter += 1;
  }
  return counter;
}
console.log(countBs("There BBBz"));