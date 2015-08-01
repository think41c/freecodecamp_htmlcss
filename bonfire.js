function palindrome(str) {
  str = str.replace(" ", "").toLowerCase();
  forward = str.split("");
  reverse = str.split("").reverse().join();
  console.log(reverse);
  if (forward == reverse) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
palindrome("cow");