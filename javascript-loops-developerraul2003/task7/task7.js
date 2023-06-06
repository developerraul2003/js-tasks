let str1 = "racecar";
let str2 = "Java";

let isPalindrome1 = true;
let isPalindrome2 = true;

let length1 = str1.length;
for ( let  i = 0; i < length1 / 2; i++) {
  if (str1[i] !== str1[length1 - 1 - i]) {
    isPalindrome1 = false;
    break;
  }
}

let  length2 = str2.length;
for (let  j = 0; j < length2 / 2; j++) {
  if (str2[j] !== str2[length2 - 1 - j]) {
    isPalindrome2 = false;
    break;
  }
}

console.log("string1 palindrome?:");
console.log(isPalindrome1 ? "Yes" : "No");

console.log("string2 palindrome?:");
console.log(isPalindrome2 ? "Yes" : "No");
