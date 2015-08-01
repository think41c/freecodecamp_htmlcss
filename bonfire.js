function palindrome(str) {
  str = str.replace(" ", "").toLowerCase();
  str = str.replace(/,/,"");
  forward = str.split("").join().replace(/[,. ]/g, "");
  console.log(forward);
  reverse = str.split("").reverse().join().replace(/[,. ]/g, "");
  console.log(reverse);
  if (forward == reverse) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
palindrome("A man, a plan, a canal. Panama")