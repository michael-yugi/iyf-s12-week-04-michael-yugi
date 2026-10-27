function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("JavaScript"));