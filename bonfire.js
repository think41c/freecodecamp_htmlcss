function xxx(num){
  var holder = 1;
  for (var i=2; i<=num; i++){
    holder *= i;
  }
  return holder;
}
console.log(xxx(5));