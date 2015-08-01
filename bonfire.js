function findLongestWord(str) {
  var longest = 0;
  str = str.split(" ");
  console.log(str[0]);
  console.log(str);
  console.log(str[0].length);
  for (var i=0; i<str.length; i++){
    if (str[i].length > longest) {
      longest = str[i].length;
    } 
  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
