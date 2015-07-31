function reverseString(str) {
  str = str.split("");
  console.log(str);
  str = str.reverse();
  console.log(str);
  str = str.join('');
  console.log(str);
  return str;
}

reverseString('hello');