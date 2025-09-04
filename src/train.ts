// // ZE-TASK:
// function removeDuplicate(input: string): string {
//    let result = "";
//    for (let char of input) {
//      if (!result.includes(char)) {
//        result += char;
//      }
//    }
//    return result;
//  }

//  console.log(removeDuplicate("stringg")); 
//  console.log(removeDuplicate("memberService")); 

// ZD-TASK:
// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//    if (index >= 0 && index < arr.length) {
//        arr[index] = newValue;
//    }
//    return arr;
// }



// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
// console.log(changeNumberInArray(0, [5, 6, 7, 8], 10));


// ZC-TASK:
// const celsiusToFahrenheit = (celsius?: number): number => {
//    const c = celsius ?? 0;
//    return (c * 9) / 5 + 32;
//  };


// console.log(celsiusToFahrenheit(0));


// Z-TASK:
// function sumEvens(numbers: number[]): number {
//    return numbers.reduce((sum, num) => {
//       if (num % 2 === 0) {
//          return sum + num;
//       }
//       return sum;
//    }, 0);
// }

// console.log(sumEvens([1, 2, 3, 2]));
// console.log(sumEvens([1, 2, 3]));



// Y-TASK:
// function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
//   const set = new Set(arr2);
//   const result: T[] = [];

//   for (const item of arr1) {
//     if (set.has(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));
// console.log(findIntersection([5, 6, 7], [7, 6, 1]));

// X-TASK:
// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (const T in obj) {
//     if (T === key) {
//       count++;
//     }
//     if (typeof obj[T] === "object" && obj[T] !== null) {
//       count += countOccurrences(obj[T], key);
//     }
//   }

//   return count;
// }

// const data = {
//   model: "Bugatti",
//   steer: {
//     model: "HANKOOK",
//     size: 30,
//   },
// };

// console.log(countOccurrences(data, "model")); // 2

// W-TASK:
// function chunkArray(array: number[], size: number): number[][] {
//   const result: number[][] = [];

//   for (let i = 0; i < array.length; i += size) {
//     const chunk = array.slice(i, i + size);
//     result.push(chunk);
//   }

//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

// console.log("----------------------------------------");

// console.log(chunkArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3));

// V-TASK:
// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (const char of str.toLowerCase()) {
//     result[char] = result[char] ? result[char] + 1 : 1;
//   }

//   return result;
// }

// console.log(countChars("hello"));

// console.log(countChars("succeed"));

// U-TASK:
// function sumOdds(num: number): number {
//   let count = 0;

//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(15));

// T-TASK:

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//    const reslt = arr1.concat(arr2);
//    const res = reslt.sort((a, b) => a - b);

//    return res;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeSortedArrays([4, 3, 2, 1], [6, 5, 4]));

// R-TASK:
// function calculate(str: string): number {
//    const son = str.split("+");

//    const num1 = Number(son[0]);
//    const num2 = Number(son[1]);

//    return num1 + num2;
// }

// console.log(calculate("1+3"));
// console.log(calculate("8+7"));

// S-TASK:
// function missingNumber(num: number[]): number {
//    for (let i = 0; i <= num.length; i++) {
//       if (!num.includes(i)) {
//          return i;
//       }
//    }
//    return -1;
// };

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1, 2, 4, 3, 5, 7]));

// R-TASK:
// function calculate(input: string): number {
//    let number = "";
//    let total = 0;

//    for (let i = 0; i < input.length; i++) {
//       const char = input[i];
//       if (char >= "0" && char <= "9") {
//          number += char;
//       } else if (char === "+") {
//          total += Number(number);
//          number = "";
//       }
//    }
//    total += Number(number);
//    return total;
// }

// console.log(calculate("1+3"));
// console.log(calculate("9+6"));

// Q-TASK:
// function hasProperty(obj: object, key: string): boolean {
//    for (let k in obj) {
//        if (k === key) {
//            return true;
//        }
//    }
//    return false;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// console.log(hasProperty({ language: "JavaScript", version: "ES6" }, "version"));
// console.log(hasProperty({ language: "JavaScript", version: "ES6" }, "framework"));

// P-TASK:
// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//    const result: [string, any][] = [];

//    Object.keys(obj).forEach((key) => {
//       result.push([key, obj[key]]);
//     });

//    return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));
// console.log(objectToArray({ a: 12, b: 21 }));

// O-TASK:
//  function calculateSumOfNumbers(arr: any[]): number {
//    let sum = 0;

//    for (const item of arr) {
//       if (typeof item === "number") {
//          sum += item;
//       }
//    }

//    return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
// console.log(calculateSumOfNumbers([15, "15", {son: 25}, true, 45]));

// N-TASK:
// function palindromCheck(str: string): boolean {
//    const reversed = str.split("").reverse().join("");
//    return str === reversed;
// }

// console.log(palindromCheck("lol"));
// console.log(palindromCheck("join"));

// M-TASK:
// function getSquareNumbers(numbers: number[]) {
//    return numbers.map((num) => {
//      return {
//        number: num,
//        square: num * num
//      };
//    });
//  }

//  console.log(getSquareNumbers([3, 4, 5]));

// L-TASK:
// function reverseSentence(str: string): string {
//    const words = str.split(" ");
//    let result = "";

//    for (let i = 0; i < words.length; i++) {
//      let reversedWord = "";
//      for (let alph = words[i].length - 1; alph >= 0; alph--) {
//        reversedWord += words[i][alph];
//      }
//      result += reversedWord;
//      if (i !== words.length - 1) result += " ";
//    }

//    return result;
//  }

// console.log(reverseSentence("we like coding!"));

// K-TASK:
// function countVowels(str: string): number {
//    let count: number = 0;
//    const vowels = "aeiou";

//    for (const vowel of str.toLowerCase()) {
//       if (vowels.includes(vowel)) {
//          count++;
//       }
//    }

//    return count;
// }

// console.log(countVowels("Burak"));
// console.log(countVowels("proccessSignup"));

// J-TASK:

// function findLongestWord(str: string): string {
//    const words: string[] = str.split(" ");
//    let longest: string = "";

//    for (const word of words) {
//       if (word.length > longest.length) {
//          longest = word;
//       }
//    }

//    return longest;
// }

// console.log(findLongestWord("The server is running successfully"));

// I-TASK:

// function majorityElement(arr: number[]) {
//    const counts: { [key: number]: number }  = {};

//    for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       counts[num] = (counts[num] || 0) + 1;
//    }

//    let Count = 0;
//    let majority = null;

//    for (let num in counts) {
//       if (counts[num] > Count) {
//          Count = counts[num];
//          majority = Number(num);
//       }
//    }

//    return majority;

// }

// console.log(majorityElement([5, 6, 6, 5, 1, 4, 3, 6, 7, 9, 5]));

// H2-TASK:

// function getDigits(str: string): string {
//    let result: string = "";
//    for (let i = 0; i < str.length; i++) {
//       if(str[i] >= "0" && str[i] <= "9") {
//          result += str [i];
//       }
//    }

//    return result;
// }
// const resul = getDigits("4efda59b27");

// console.log(resul);
// console.log(`"${resul}"`);

// // H-TASK:

// function getPositive(arr: number[]): string {
//    return arr
//    .filter(son => son > 0)
//    .map(String)
//    .join("")
// }

//  const natija = getPositive([1, -4, 5]);

//  console.log(`"${natija}"`);
//  console.log(natija);

/* Project Standarts:
  - Logging standards 
  
  - Naming standatds:
      function, method, variable => CAMEL case     goHome
      class => PASCAL case                         MemberService
      folder => KEBAB case       
      css => SNAKE case                            button_style
  - ERROR handling
  
 */

/*  Request:
   Traditional Api   (form POST)
   Rest Api
   GraphGL Api
   ...
*/

/*  Frontend Development:
   Traditional FD  => SSR => EJS
   Modern FD       => SPA  => REACT
*/

/*   Cookies:
   request join
   self destroy
*/

/*   Validation:
   Frontend validation
   Backend validation
   Database validation
*/



/*
ZG-TASK:

Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

*/



function capitalizeWords(str: string): string {
   return str.split(" ").join("_");
}

console.log(capitalizeWords('name should be a string'));
console.log(capitalizeWords('burak ozbek'));
