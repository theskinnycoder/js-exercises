/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  let res = "";
  for(let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}



/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
  for(let i = 0, j = str.length - 1; i < j; i++, j--) {
    if(str[i] != str[j]) return false;
  }
  return true;
}



/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  let neg = false;
  if(num < 0) {
    neg = true;
    num *= -1;
  }
  let res = 0;
  while(num > 0) {
    res = res * 10 + (num % 10);
    num /= 10;
    num = parseInt(num);
  }
  if(neg) res *= -1;
  return res;
}



/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  let res = "";
  if(str == "") return "";
  if(str[0] >= 'a' && str[0] <= 'z') res = str[0].toUpperCase();
  else res = str[0]; // leading space or anything
  for(let i = 1; i < str.length; i++) {
    if(str[i - 1] == ' ' && str[i] >= 'a' && str[i] <= 'z') {
      res += str[i].toUpperCase();
    }
    else {
      res += str[i];
    }
  }
  return res;
}



/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
  let freq = new Map();
  let maxCount = 0;
  for(let i = 0; i < str.length; i++) {
    if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      if(freq.has(str[i])) {
        let newCount = freq.get(str[i]) + 1;
        freq.set(str[i], newCount);
        if(newCount > maxCount) {
          maxCount = newCount;
        }
      }
      else {
        freq.set(str[i], 1);
      }
    }
  }
  let chs = [];
  freq.forEach((val, ch) => {
    if(val === maxCount) chs.push(ch);
  })
  if(chs.length === 1) return chs[0];
  return chs;
}



// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let res = "";
  for(let i = 1; i < 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      res += 'FizzBuzz\n';
    }
    else if(i % 3 == 0) {
      res += 'Fizz\n';
    }
    else if( i % 5 == 0) {
      res += 'Buzz\n';
    }
    else {
      res += i.toString();
      res += "\n";
    }
  }
  return res;
}



/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let words = sen.split(' ')
  let maxLen = 0;
  words.forEach((word) => maxLen = (maxLen < word.length) ? word.length : maxLen);
  let longestWords = []
  words.forEach((word) => {
    if(word.length === maxLen) longestWords.push(word);
  }) 
  if(longestWords.length === 1) {
    return longestWords[0]
  }
  return longestWords
}



/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  let res = [], sub = [];
  for(let i = 0; i < arr.length; i++) {
    if(sub.length == len) {
      res.push(sub);
      sub = [];
    }
    sub.push(arr[i]);
  }
  if(sub.length > 0) res.push(sub);
  return res;
}



/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {}



/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {}



/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {}



/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll() {}



/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17
 */
function sumAllPrimes() {}



/* 14. Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 * ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
 */
function seekAndDestroy() {}



/* 15. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * ex. sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) == [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight() {}



/* 16. Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
 * ex. missingLetters("abce") == "d"
 * ex. missingLetters("abcdefghjklmno") == "i"
 * ex. missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
 */
function missingLetters() {}



/* 17. Take in an array and return an array of the sums of even and odd numbers
 * ex. evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
 */
function evenOddSums() {}



/**
 * Console log
 */
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))