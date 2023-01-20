/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {

  let reversedString = ""

  for (let i = str.length - 1; i >= 0 ; i--) {
    reversedString += str[i];
  }
  return reversedString
}



/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {

  let i = 0
  let j = str.length - 1

  while (i <= j) {
    if (str[i] != str[j]){
      return false
    }
    i += 1
    j -= 1
  }
  return true
}



/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  let s = num.toString()
  return reverseString(s)
}



/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  const wordsArr = str.split(" ")

  for (let i = 0; i < wordsArr.length; i++){
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1)
  }
  return wordsArr.join(" ")
}
/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */

function maxCharacter(str) {
  var maxChar = ""
  var counter = {}
  counter[""] = -1

  for (let i = 0; i < str.length; i ++) {
    var chr = str[i].toLowerCase()
    if (!counter[chr]){
      counter[chr] = 0
    }
    counter[chr]++
    if (chr != " " && counter[chr] > counter[maxChar]) {
      maxChar = chr
    } 
  }

  return maxChar
}



// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  var x = 3
  var y = 5
  function checkDiv(num, div) {
    return num % div == 0
  }
  for (let i = 1; i <= 100; i++) {
    switch(true) {
      case checkDiv(i, x) && checkDiv(i, y):
        console.log("fizzBuzz")
        break
      case checkDiv(i, x):
        console.log("fizz")
        break
      case checkDiv(i, y):
        console.log("buzz")
        break
      default:
        console.log(i)
    }
    

    // switch(true) {
    //   case i % 3 == 0:
    //     if (i % 5 == 0){
    //       console.log("fizzBuzz")
    //     }
    //     else {
    //       console.log("fizz")
    //     }
    //     break
    //   case i % 5 == 0:
    //     console.log("buzz")
    //     break
    //   default:
    //     console.log(i)
    // }
    
  }
}



/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
 
  const wordsArr = sen.split(" ")
  
  // Solution 1 =>
  function solutionOne(wordsArr, maxWord) {
    for (i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].length > maxWord.length) {
        maxWord = wordsArr[i]
      }
    }
    return maxWord
  }
  var maxWord = solutionOne(wordsArr, "")
  console.log(`Solution 1 : ${maxWord}`)

  // Solution 2 =>
  
  const ansArr = []
  for (i = 0; i < wordsArr.length; i++) {
    key = wordsArr[i]
    if (key.length == maxWord.length && !ansArr.includes(key)) {
      ansArr.push(key)
    }
  }
  console.log("Solution 2 : ", ansArr)

  //Solution 3 =>

  if (ansArr.length > 1) {
    console.log("Solution 3 : ", ansArr)
  }
  else {
    console.log("Solution 3 : ", maxWord)
  }
}



/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  var temp = []
  var ans = []
  for (x = 0; x < arr.length; x++){
    temp.push(arr[x])
    if ((x + 1) % len == 0 || x == arr.length - 1) {
      ans.push(temp)
      temp = []
    }
  }
  return ans
}



/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
  return [].concat(...arrays)
}

/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("")
}



/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {}



/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll(...arr) {}



/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17
 */
function sumAllPrimes(end) {}



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

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))
// console.log(letterChanges('hello there'))4
console.log(isAnagram('elbow', 'below'))
