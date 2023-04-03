/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  let revtext = "";
  for (let i = str.length-1; i>=0; i--){
    revtext += str[i];
  }
  return revtext;
}



/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
  let revtext = "";
  for (let i = str.length-1; i>=0; i--){
    revtext += str[i];
  }
  return (str===revtext) ? true : false; 
// return (str===reverseString(str) ? true : false);
}



/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  let revNum = 0;
  let remainder;
  while (num>0) {
  remainder = num%10;
  revNum = revNum*10 + remainder;
  num = parseInt(num/10);
  }
  return revNum;
}



/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  let arr = str.split(" ");
  for (let i = 0; i<arr.length; i++){
  arr[i]=arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
  }
  let Capstr = arr.join(" ");
  return Capstr;
}



/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
  let max = 0, i = 0;
  let maxletter;
  let lettersArray = Array.from(str); // str.split("")
  lettersArray.sort();
  let currentletter = lettersArray[0];
  while (i<lettersArray.length){
    let x = lettersArray.indexOf(currentletter), y = lettersArray.lastIndexOf(currentletter);
    if (max <= (y-x+1)){
      max = (y-x+1);
      maxletter = currentletter;
    }
    i = y+1;
    currentletter = lettersArray[i];
  }
  return maxletter;
  /*
  let lettersobject = {};
  let max = 0;
  let maxletter;
  let lettersArray = Array.from(str);
  for ( let x of lettersArray){
    if (typeof lettersobject[x] == "undefined"){
      lettersobject[x] = 1;
    }else {
      lettersobject[x]+=1;
    }
    if (max <= lettersobject[x]){
      max = lettersobject[x];
      maxletter = x;
    }
  }
  return maxletter;
  */
}



// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i<= 100; i++){
    if ( i%3 == 0 && i%5 == 0){
      console.log("FizzBuzz");
    } else if(i%3 ==0){
      console.log("Fizz");
    } else if (i%5 ==0){
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}



/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  let wordsarray = sen.split(" ");
  let maxwordlength = 0;
  wordsarray.forEach((word)=> { maxwordlength = (maxwordlength < word.length) ? word.length : maxwordlength;});
  let maxword = [];
  wordsarray.forEach((word) => { 
    if (maxwordlength === word.length) {
      maxword.push(word);
    };
  });
  let result = (maxword.length === 1)? maxword[0]:maxword;
  return result;
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}



/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  let result = [];
  for (let i = 0; i<arr.length; i+=len){
    let subarray = (i+ len <= arr.length)? arr.slice(i,i+len):arr.slice(i,arr.length); 
    result.push(subarray);
  }
  return result;
}



/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
  return arrays.flat();
}



/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
  let str1arr = str1.split("").sort();
  let str2arr = str2.split("").sort();
  return (str1arr.join("") === str2arr.join(""))? true : false; // return (str1arr.localeCompare(str2arr) == 0)? true : false;
}



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


