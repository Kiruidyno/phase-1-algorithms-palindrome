function isPalindrome(word) {
    const cleanWord = word.replace(/[^0-9a-z]/gi, '').toLowerCase();   // Remove all non-alphanumeric characters and convert to lowercase
    return cleanWord === cleanWord.split('').reverse().join('');  // Compare the reversed string to the original string
  
}

/* 
  Add your pseudocode here
create a function named isPalindrome, and give it one argument, which is a string. 
    remove alphanumerics, and change the characters into lowercase
    compare the the characters in a word, from the front, and backwards. 
    based on this, write a condition to either return true or false if the characters in a word match. 
  
*/

/*
  Add written explanation of your solution here

  Our code first starts by defining a a parameter that takes a single argument, called 'word'. 
  The function starts by cleaning the word by removing all non-alphanumeric characters and converting it to a lowercase. It does this by using the replace() method with a regular expression /[^0-9a-z]/gi that matches any character that is not a digit or a letter and the toLowerCase() method.

  Then, the function uses the split() method to convert the cleaned word into an array of individual characters, and the reverse() method to reverse the order of the characters in the array.

  Finally, the join() method is used to convert the reversed array back into a string.

  The function then compares the original cleaned word with the reversed cleaned word to determine whether the input word is a palindrome or not. If the two strings are equal, then the input word is a palindrome and the function returns true. Otherwise, the input word is not a palindrome, and the function returns false.

  Based on the outcome, if a word is a Palindrome, the output given is true, if not, it prints out false.*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"))

  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
