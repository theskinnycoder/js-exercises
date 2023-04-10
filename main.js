/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag = bag + str[i];
  }
  if (bag == str) {
    return true;
  } else {
    return false;
  }
}

/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  let reverse = parseInt(num.toString().split("").reverse().join(""));
  return reverse;
}

/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char] == undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  let max = -Infinity;
  let bag = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      bag = key;
    }
  }
  return bag;
}

// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let result = "";
  if (i % 3 === 0) {
    result += "Fizz";
  }
  if (i % 5 === 0) {
    result += "Buzz";
  }
  console.log(result || i);
}

/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let words = sen.split(" ");
  const sorted = words.sort((a, b) => b.length - a.length); //sort by who's length greater
  const longestLength = sorted[0].length;
  const longestWords = sorted.filter((word) => word.length === longestLength);
  if (longestWords.length === 1) {
    return longestWords[0];
  } else {
    return longestWords;
  }
}

/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  const ans = [];
  for (let i = 0; i < arr.length; i += len) {
    const temp = arr.slice(i, i + len);
    ans.push(temp);
  }
  return ans;
}

/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
  let arr = arrays.join(",");
  return arr.split(",").map(Number);
  //return arrays.flat() //array method to flatten
}

/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charstr1 = str1.split("").sort().join("");
  const charstr2 = str2.split("").sort().join("");

  return charstr1 === charstr2;
}

/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {
  let vowels = "aeiouAEIOU";
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      char = String.fromCharCode(char.charCodeAt(0) + 1);
      if (vowels.indexOf(char) !== -1) {
        char = char.toUpperCase();
      }
    }
    bag += char;
  }
  return bag;
}

/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    let num = arguments[i];
    sum += num;
  }
  return sum;
}
/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17
 */
function sumAllPrimes() {
  let num = arguments[0];
  function primecheck(num) {
    let count = 0;
    if (num <= 1) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 0) {
      return true;
    } else {
      return false;
    }
  }
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (primecheck(i)) {
      sum += i;
    }
  }
  return sum;
}

/* 14. Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 * ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
 */
function seekAndDestroy(arr, ...args) {
  const temp = arr.filter((item) => !args.includes(item));
  return temp;
}
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
