console.log("Train is started");

function chunkArray(arr: any[], chunkSize: number) {
  const result: any[] = [];
  let ourChunk: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    ourChunk.push(arr[i]);
    if ((i + 1) % chunkSize === 0 || i === arr.length - 1) {
      result.push(ourChunk);
      ourChunk = [];
    }
  }

  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// function countChars(str: string) {
//   let result: { [key: string]: number } = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (!result.hasOwnProperty(char)) {
//       result[char] = 0;
//     }
//     result[char]++;
//   }
//   return result;
// }
// console.log(countChars("hello"));

// function sumOdds(num: number): number {
//   let count = 0

//   for (let i = 0; i <= num; i++) {
//       if (i % 2 !== 0) {
//           count++
//       }
//   }
//   return count
// }
// console.log(sumOdds(9))

// function missingNumber(numbers: number[]) {
//   let newNum = numbers.length
//   let expectedSum = 0
//   let actualSum = 0

//   for (let i = 0; i < newNum; i++) {
//     actualSum += numbers[i]
//     expectedSum += i
//   } if (expectedSum += newNum)

//   return expectedSum - actualSum
// }

// console.log(missingNumber([3, 0, 1]))

// function calculate(textOfNumber: string): number {
//   let numbers = textOfNumber.split(' + ').map(Number)
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return sum
// }

// console.log(calculate("1 + 3"))

// function hasProperty(obj: Record<string, any>, key: string): boolean {
//   for (const prop in obj) {
//     if (prop === key) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

// function objectToArrays(obj: any) {
//   const result: any = [];
//   const key = Object.keys(obj);

//   for (let i = 0; i < key.length; i++) {
//     result.push([key[i], obj[key[i]]]);
//   }

//   return result;
// }

// console.log(objectToArrays({ a: 10, b: 20 }));

// function calculateSumOfNumbers(arr: (any | number[])) {
//   let sum = 0

//   for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number') {
//          sum += arr[i]
//      }
//   }
//   return sum
// }

// console.log(calculateSumOfNumbers([50, "1", { son: 10 }, true, 35]))

// console.log("===========================================")

// function palindromChech(text: string):boolean {
//    const newText = text.length

//    for(let word = 0; word < Math.floor(newText /2); word++){
//     if (text[newText] !== text[newText - 1 -word]) {
//       return true
//     }
//    }
//    return false
// }

// console.log(palindromChech("dad"))

// function getSquareNumbers(numbers: number[]){
//   let ourResult: any[] = [];

//   for (const number of numbers) {
//     const square = number * number;
//   ourResult.push([
//    "Our Objects",
//    { number: number },
//    "Our Square :",
//    { square: square },
//     ]);
//   }

//   return ourResult;
// }

// console.log(getSquareNumbers([11, 22, 33]))

// function reverseSentence(text: string): string {
//     const listOfWords = text.split(" ");
//     let reversedSentence = "";

//     for (const word of listOfWords) {
//       const reversedWord = word.split("").reverse().join("");
//       reversedSentence += reversedWord + " ";
//     }
//     return reversedSentence
//   }

//   console.log(reverseSentence("My name is Bekzod"))

// function countVowels(text: string) {
//     let ourVowels = "a e i o u a e i o u"
//     let vowelCount = 0

//     for (const letter of text) {
//         if (ourVowels.includes(letter)) {
//             vowelCount++
//         }
//     }
//     return vowelCount
// }

// console.log(countVowels("Bekzod"));

console.log("=========================================");

// function findLongestWord (text:string) {
//  let listOfWords = text.split(" ")
//  let longestWord:string = ""
//     for(let word of listOfWords) {
//     if(word.length > longestWord.length){
//     longestWord = word
//     }
//  }
//  return longestWord
// }

// console.log(findLongestWord("I am from Uzbekistan"))

/* Project standards
- Login standards 
- Naming standards
    function, method,variable => CAMEL    
    class => PASCAL
    folder => KEBAB
    css = SNAKE
-- Erorr 

*/

// Traditional Api
// Rest APi
// GraphQl Api

/*
Traditional Frontend development (FD)   =>  BSSR -- (ADMINKA)  =>  ESJ
Modern Frontend Development (FD)  =>  SPA -- (USER)  => REACT
*/

/* 
    request join
    self destroy
*/

// function getDigits (arr:number[]) {
//     let result:any = {}

//     for(let char of arr) {
//         if(result[char]>=0) {
//           result[char] += 1
//         }else{
//           result[char] = 0
//         }
//     }

//     return result

//   }
//   console.log(getDigits([1,2,3,5,1,7,1]))

//   function getSecondIndex(numbers:number[]) {
//     let musbatRaqam:number[] = []
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] >= 0){
//             musbatRaqam.push(numbers[i])
//         }else{
//             if(numbers[i] >= 0){
//                 musbatRaqam.push(numbers[i])}
//         }
//     }
//     return musbatRaqam.join("")
// }
// console.log(getSecondIndex([-2, -5, 3, 1, 9]))


/*V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
*/

function countChars(str: string): { [key: string]: number } {
  let result: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!result.hasOwnProperty(char)) {
      result[char] = 0;
    }
    result[char]++;
  }
  return result;
}
console.log(countChars("hello"));