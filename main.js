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
  rev=str.split("").reverse().join("");
  if (rev==str){
     return true;
  }
  else{
     return false;
  }
   
  
}

/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
  num=num.toString();
  rev=num.split("").reverse().join("");
  rev=parseInt(rev);
  return rev;
  
}




/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
  var arr=str.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var arr2=arr.join(" ");
    return arr2;
   
}


/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
    const charMapping={};
    let max=0;
    let maxChar='';
    for(let i of str){
      charMapping[i]=charMapping[i]+1||1;
    }
    for(let i in charMapping){
      if(charMapping[i]>max){
        max=charMapping[i];
        maxChar=i;
      }
    }
    return maxChar;

}
// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  var arr=[];
  for(var i=1;i<=100;i++){
    if (i%3==0 && i%5==0){
      arr[i]="FizzBuzz";
    }
    else if (i%3==0){
      arr[i]="Fizz";
    }
    else if (i%5==0){
      arr[i]="Buzz";
    }
    else{
      arr[i]=i;
    }
  }
  return arr;
}

/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let wordslist=sen.split(' ')
  let maxLength=0;
  wordslist.forEach((word) => maxLength=(maxLength<word.length)? word.length:maxLength);
  let longestWordsList=[];
  wordslist.forEach((word) =>{
    if(word.length==maxLength) longestWordsList.push(word);

  })
  if (longestWordsList.length ==1){
    return longestWordsList[0];
  }
  return longestWordsList;

}




/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
  let smallArray;
    let finalArray=[];
  for (i=0;i< arr.length; i += len) {

    
    smallArray = arr.slice(i, i + len);
    finalArray.push(smallArray);
  }
  return finalArray;
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


