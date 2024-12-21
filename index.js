function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Split the input string into an array of characters.
  2. Reverse the array.
  3. Join the reversed array back into a string.
  4. Compare the original string with the reversed string.
  5. If they are the same, return true (the word is a palindrome).
  6. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  A palindrome is a word that reads the same forwards and backwards. 
  To determine if a word is a palindrome, reverse the word and compare it 
  to the original. If they are identical, it's a palindrome; otherwise, it isn't.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
