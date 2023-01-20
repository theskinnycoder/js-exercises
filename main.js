/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  return str.split("").reverse().join("")
}

//console.log(reverseString("hellob laaaa a"))

/* 2. Return true if palindrome and false if not
* ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
*/
function isPalindrome(str) {
  if (str === reverseString(str))
      return true
  else
      return false    
}

//console.log(isPalindrome("mam"))


/* 3. Return an integer in reverse
* ex. reverseInt(521) === 125
*/
function reverseInt(num) {
let strInt = num.toString()
return reverseString(strInt)
}

//reverseInt(36874)

/* 4. Return a string with the first letter of every word capitalized
* ex. capitalizeWords('i love javascript') === 'I Love Javascript'
*/
function capitalizeWords(str) {
newStr = str[0].toUpperCase()
let i = 1
while (i < str.length) {
  if (str[i] === " ") {
    newStr += " " + str[i + 1].toUpperCase()
    i++
  }
  else
    newStr += str[i]
  i++
}
return newStr
}

//capitalizeWords("poo peepeep poo")

/* 5. Return the character that is most common in a string
* ex. maxCharacter('javascript') == 'a'
*/
function maxCharacter(str) {
  const aMap = {}
  let maxCount = 0
  let maxChar = ""
  for (let char of str) {
    aMap[char] = aMap[char] + 1 || 1
  }
  for (let key in aMap) {
    if (aMap[key] > maxCount) {
      maxCount = aMap[key]
      maxChar = key
    }
  }
  return maxChar
}

//console.log(maxCharacter("bbinuudddddu"))

// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i === 3 || i % 3 === 0) {
       console.log("Fizz")
    }
    else if (i === 5 || i % 5 === 0) {
      console.log("Buzz")
    }
    else if ( i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }
    else {
      console.log(i)
    }
  }
}

//fizzBuzz()


/* 7. Return the longest word of a string
* ex. longestWord('Hi there, my name is Brad') === 'there,'
*/
function longestWord(sen) {
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let words = sen.split(" ")
  let maxLen = 0
  //array.forEach(callback, thisObject)
  words.forEach((word) => {
    maxLen = (maxLen < word.length) ? word.length : maxLen
    //maxLenWord = word
  })
  let resultArray = [];
  words.forEach((word) => { maxLenWord = (maxLen === word.length) ? word : ""
    if (maxLenWord !== "")
      resultArray.push(maxLenWord)
  })
  let res = (resultArray.length === 1) ? resultArray[0] : resultArray
  return res
}

console.log(longestWord("Hi there, my namwce is Bjhrad"))
console.log(longestWord("Hi there, my name is Brad"))


/* 8. Split an array into chunked arrays of a specific length
* ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
* ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
*/
function chunkArray(arr, len) {}



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


