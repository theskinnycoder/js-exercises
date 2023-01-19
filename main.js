/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  let revString = "";
  for(let i=str.length-1;i>=0;i--) {
    revString += str[i]
  }
  return revString
}


/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
  let Mid = parseInt(str.length/2);
  for(let i=0;i<Mid;i++) {
    if(str[i] !== str[str.length-i-1])
      return false;
  }
  return true
}



/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  // console.log(toString(num));
  let ans = 0, i = num.toString().length - 1
  while(num!==0) {
    ans += (num%10)*Math.pow(10,i)
    num = parseInt(num/10)
    i--;
  }
  return ans
}


/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  let ans = ""
  for(let i=0;i<str.length;i++) {
    if(i===0 || str[i-1]===' ') {
      ans+=str[i].toUpperCase()
    }
    else{
      ans+=str[i]
    }
  }
  return ans
}



/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
  let charCount = {}
  for(let i=0;i<str.length;i++) {
    if(str[i] in charCount)
      charCount[str[i]]++
    else
      charCount[str[i]] = 1
  }
  let ans = str[0]
  for(const ch in charCount){
    if (charCount[ch] > charCount[ans])
      ans = ch
  }
  return ans
}



// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i=1;i<100;i++) {
    if(i%3===0 && i%5===0){
      console.log("FizzBuzz")
    }
    else if(i%3==0)
      console.log("Fizz")
    else if(i%5==0)
      console.log("Buzz")
    else
      console.log(i)
  }
}



/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let arr = sen.split(' ')
  let ans = [], maxSize = 0
  arr.forEach((x, i) => maxSize=Math.max(maxSize,x.length))
  for(const str of arr){
    if(maxSize === str.length)
      ans.push(str)
  }
  if(ans.length === 1)
    return ans[0]
  return ans
}



/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  const ans = []
  while (arr.length !== 0) {
    const chunk = arr.splice(0,len)
    ans.push(chunk)  
  }
  return ans
}



/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
  const ans = []
  for(let arr of arrays) 
    ans.push(...arr)
  return ans
}



/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
  let charCount = {}
  for(let i=0;i<str1.length;i++) {
    if(str1[i] in charCount)
      charCount[str1[i]] ++
    else 
      charCount[str1[i]] = 1
  }
  for(let i=0;i<str2.length;i++) {
    if(str2[i] in charCount && charCount[str2[i]]!==0)
      charCount[str2[i]] -- 
    else
      return false
  }
  if(str1.length === str2.length)
    return true
  return false
}



/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {
  let ans = ""
  for(let i=0;i<str.length;i++) {
    if(!str[i].toString().match(/[a-z]/i)) {
      ans+=str[i]
      continue
    }
    let nextChar = String.fromCharCode(str[i].charCodeAt() + 1)
    if(str[i] === 'z') nextChar = 'a'
    if( ['A','E','I','O','U'].indexOf(nextChar.toUpperCase()) !== -1)
      ans += nextChar.toUpperCase()
    else  ans+=nextChar
  }
  return ans
}



/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll() {
  let ans = 0
  for(const i of arguments) 
    ans += i 
  return ans
}



/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17 
 */
function sumAllPrimes() {
  let ans = 0
  for(let i=2;i<arguments[0];i++) {
    let k = true
    for(let j=2;j<=Math.sqrt(i);j++) {
      if(i%j === 0){
        k = false
        break
      }
    }
    if(k) 
      ans+=i
  }
  return ans
}



/* 14. Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 * ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
 */
function seekAndDestroy() {
  let arr = arguments[0]
  for(let i=1;i<arguments.length;i++) 
    arr = arr.filter(ele => ele!=arguments[i])
  return arr
}



/* 15. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * ex. sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) == [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight() {
  let filtered = arguments[0].filter(e => e > 0).sort();
  let index = 0, ans = []
  for(const i of arguments[0]){
    if( i > 0){
      ans.push(filtered[index])
      index ++
    }
    else
      ans.push(i)
  }
  return ans
}



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

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))


