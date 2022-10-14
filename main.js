/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
  let ans = "";
  for (let i in str) {
    ans = str[i] + ans;
  }
  return ans;
}

/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
  let dummy = str;
  if (reverseString(str) === dummy) {
    return "true";
  }
  return "false";
}

/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  let ans = 0;
  while (num > 0) {
    let rem = num % 10;
    ans = ans * 10 + rem;
    num = Math.floor(num / 10);
  }
  return ans;
}

/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  let ans = "",
    j = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (j === 0) {
      ans = ans + str[i].toUpperCase();
      j = 1;
    } else {
      while (str[i] !== " " && i < len) {
        ans = ans + str[i];
        i++;
      }
      ans = ans + " ";
      j = 0;
    }
  }

  return ans;
}

/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
  //using map
  let mp = new Map();
  for (let i in str) {
    if (mp.has(str[i])) {
      mp.set(str[i], mp.get(str[i]) + 1);
    } else {
      mp.set(str[i], 1);
    }
  }
  let maxi = 0;
  let ans = "";
  mp.forEach(function (value, key) {
    if (value > maxi) {
      maxi = value;
      ans = key;
    }
  });
  return ans;
}

// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let ans = new Array();
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans[i - 1] = "FizzBuzz";
    } else if (i % 3 === 0) {
      ans[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
      ans[i - 1] = "Buzz";
    } else {
      ans[i - 1] = i;
    }
  }
  return ans;
}

/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  let longestWord = "";
  let dummy = "";
  let len = sen.length;
  let ans = new Array(); //to store the multiple words of same words length

  let result = new Array();
  let j = 0,
    maxi = 0;

  for (let i = 0; i < len; i++) {
    dummy = "";
    //this loop will run untill " " and divide the words
    while (sen[i] !== " " && i < len) {
      dummy += sen[i];
      i++;
    }

    //it check it is a longest word than previse longest word
    if (dummy.length >= longestWord.length) {
      longestWord = dummy;
      maxi = longestWord.length;
      ans[j] = longestWord;
      j++;
    }
  }

  //this loop to store same longest length words into result array
  let ind = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i].length === maxi) {
      result[ind] = ans[i];
      ind++;
    }
  }

  //if array contain only one longest string then it return string
  if (result.length == 1) {
    return result[0];
  }
  //otherwise it returns result array
  return result;
}

/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  let ans = new Array();
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let dummy = [];
    while (dummy.length < len && i < arr.length) {
      dummy.push(arr[i]);
      i++;
    }
    ans.push(dummy);
    i = i - 1;
  }
  return ans;
}

/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
  let result = new Array();
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}

/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
  let arr1 = new Array();
  for (let i in str1) {
    arr1.push(str1[i]);
  }
  arr1.sort();
  console.log(arr1);
  let arr2 = new Array();
  for (let j in str2) {
    arr2.push(str2[j]);
  }
  arr2.sort();
  console.log(arr2);
  if (arr1.length !== arr2.length) {
    return "false";
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return "false";
      }
    }
  }
  return "true";
}

/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      ans = ans + " ";
    } else {
      let result = String.fromCharCode(str.charCodeAt(i) + 1);
      if (
        result === "a" ||
        result === "e" ||
        result === "o" ||
        result === "i" ||
        result === "u"
      ) {
        ans = ans + result.toUpperCase();
      } else {
        ans = ans + result;
      }
    }
  }
  return ans;
}

/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  return ans;
}

/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17
 */
function sumAllPrimes() {
  let sum = 0;
  for (let i = 2; i <= arguments[0]; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum = sum + i;
    }
  }
  return sum;
}

/* 14. Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 * ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
 */
function seekAndDestroy() {
  let arr = arguments[0];
  let dummy = new Array();
  let ans = new Array();
  for (let i = 1; i < arguments.length; i++) {
    dummy.push(arguments[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (dummy.includes(arr[i]) === false) {
      ans.push(arr[i]);
    }
  }
  return ans;
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

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
