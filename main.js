/* 1. Return a string in reverse
 * ex. reverseString('hello') === 'olleh'
 */
function reverseString(str) {
    let s = ""
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i]
    }
    return s
}



/* 2. Return true if palindrome and false if not
 * ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */
function isPalindrome(str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] != str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}



/* 3. Return an integer in reverse
 * ex. reverseInt(521) === 125
 */
function reverseInt(num) {
    let b = 0;
    while (num > 0) {
        b = b * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return b;
}



/* 4. Return a string with the first letter of every word capitalized
 * ex. capitalizeWords('i love javascript') === 'I Love Javascript'
 */
function capitalizeWords(str) {
    let a = str.split(" ");
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }
    return a.join(" ")
}



/* 5. Return the character that is most common in a string
 * ex. maxCharacter('javascript') == 'a'
 */
function maxCharacter(str) {
    if (str.length == 0) {
        return str
    }
    const a = {}
    let m = 0
    let ma = str[0]
    for (const i of str) {
        if (a.hasOwnProperty(i)) {
            a[i] += 1;
            if (a[i] > m) {
                m = a[i]
                ma = i
            }
        } else {
            a[i] = 1;
        }
    }
    return ma
}



// 6. Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}



/* 7. Return the longest word of a string
 * ex. longestWord('Hi there, my name is Brad') === 'there,'
 */
function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    let a = sen.split(" ")
    let m = 0
    let s = [""]
    for (const i of a) {
        if (i.length > m) {
            m = i.length
            s = [i]
        } else if (i.length == m) {
            s.push(i)
        }
    }

    return (s.length == 1) ? s[0] : s
}



/* 8. Split an array into chunked arrays of a specific length
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 * ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */
function chunkArray(arr, len) {
    let s = []
    for (let i = 0; i < arr.length; i += len) {
        let t = []
        let k = Math.min(len, arr.length - i)
        for (let j = 0; j < k; j++) {
            t.push(arr[i + j])
        }
        s.push(t)
    }
    return s
}



/* 9. Take an array of arrays and flatten to a single array
 * ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) should return [1, 2, 3, 4, 5, 6, 7]
 */
function flattenArray(arrays) {
    let s = []
    for (const i of arrays) {
        if (Array.isArray(i)) {
            s = s.concat(i)
        } else {
            s.push(i)
        }
    }
    return s
}



/* 10. Return true if anagram and false if not
 * ex. isAnagram('elbow', 'below') === true
 */
function isAnagram(str1, str2) {
    const a = {}
    for (const i of str1) {
        if (a.hasOwnProperty(i)) {
            a[i] += 1;
        } else {
            a[i] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (a.hasOwnProperty(str1[i])) {
            a[str1[i]] -= 1;
            if (a[str1[i]] == 0) {
                delete a[str1[i]]
            }
        } else {
            return false
        }
    }
    return (Object.keys(a).length == 0) ? true : false
}



/* 11. Change every letter of the string to the one that follows it (circularly), and capitalize the vowels
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChanges(str) {
    let ans = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') ans += ' ';
        else {
            let result = (str[i] === 'z') ? A : String.fromCharCode(str.charCodeAt(i) + 1)
            if (result === 'a' || result === 'e' || result === 'i' || result === 'o' || result === 'u') result = result.toUpperCase()
            ans += result
        }
    }
    return ans
}



/* 12. Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 * ex. addAll(2,5,6,7) === 20
 */
function addAll() {
    let sum = 0;
    for (const i of arguments) {
        sum += i
    }
    return sum
}



/* 13. Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 * ex. sumAllPrimes(10) == 17
 */
function sumAllPrimes() {
    function isprime(a) {
        for (let j = 2; j <= Math.floor(a / 2); j++)
            if (a % j == 0) return false;
        return true;
    }
    let sum = 0
    for (let i = 2; i <= arguments[0]; i++) {
        if (isprime(i)) sum += i;
    }
    return sum
}



/* 14. Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 * ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
 */
function seekAndDestroy() {
    let a = arguments[0]
    let b = Array.prototype.slice.call(arguments, 1)
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) != -1) a.splice(i, 1);
    }
    return a
}



/* 15. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * ex. sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) == [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight() {
    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === -1) continue;
        for (let j = i; j < arguments[0].length; j++) {
            if (arguments[0][j] === -1) continue;
            if (arguments[0][j] < arguments[0][i])[arguments[0][i], arguments[0][j]] = [arguments[0][j], arguments[0][i]];
        }
    }
    return arguments[0]
}



/* 16. Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
 * ex. missingLetters("abce") == "d"
 * ex. missingLetters("abcdefghjklmno") == "i"
 * ex. missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
 */
function missingLetters() {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    for (const i in arguments[0]) {
        if (alpha[i] != arguments[0][i]) {
            return alpha[i]
        }
    }
}



/* 17. Take in an array and return an array of the sums of even and odd numbers
 * ex. evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
 */
function evenOddSums() {
    let odd = 0;
    let even = 0;
    for (const i of arguments[0]) {
        if (i % 2) odd += i;
        else even += i;
    }
    return [odd, even]
}