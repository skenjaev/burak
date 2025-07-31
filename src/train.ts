/* Loyiha Standartlari:
- Logging Standartlari (Dastur harakatini kuzatish qoidalari)
- Nomlash Standartlari:
  - funksiya/metod/o'zgaruvchi → camelCase (masalan: goHome - bosh sahifaga o'tish)  
  - Klass → PascalCase (masalan: MemberService - a'zolarni boshqarish servisi)  
  - Papka → kebab-case (masalan: project-utils - loyiha yordamchi fayllari)  
  - CSS → snake_case (masalan: button_style - tugma stilini belgilash)  





/* Request (Loyiha Standartlari)

 Traditinal API
 Rest API
 GraphQL API
*/

/* Frontend Development (Standartlari)

Traditinal FD  (frontend development) => BSSR => EJS
Modern FD (frontend development) => SPA => React
*/


/*Cookies

request join
self destroy
*/

/* Vlaidation

Frontend validation
Backend validation
Database validation
*/


/*
L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

*/

// const reverseSentenceShort = str => str.split(' ')
// .map(word => word
//     .split('')
//     .reverse()
//     .join(''))
//     .join(' ');

// console.log(reverseSentenceShort("we like coding!")); // "ew ekil !gnidoc"  





 
/*
split('') - so'zni harflarga ajratadi: "we" → ['w', 'e']
reverse() - massivni teskari qiladi: ['w', 'e'] → ['e', 'w']
join('') - massivni stringga birlashtiradi: ['e', 'w'] → "ew"

*/


/* ------ Task M -------  */

//Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
//MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//   return numbers.map(num => ({
//     number: num,
//     square: num * num
//   }));
// }

// console.log(getSquareNumbers([1, 2, 3]));


/*

O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

*/


// function calculateSumOfNumbers(values: any[]) {
//   let sum = 0;
  
//   for (let i = 0; i < values.length; i++) {
//     let value = values[i];
    
    
//     if (typeof value === 'number') {
//       sum += value;
//     }
    
//     else if (typeof value === 'string' && !isNaN(Number(value))) {
//       sum += Number(value);
//     }
   
//     else if (typeof value === 'object' && value !== null && value.son !== undefined) {
//       sum += value.son;
//     }
   
//     else if (typeof value === 'boolean') {
//       sum += value ? 1 : 0; // true = 1, false = 0
//     }
//   }
  
//   return sum;
// }


// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // Natija: 66
// console.log(calculateSumOfNumbers([5, "15", { son: 20 }, false, 25])); // Natija: 65


// /*
// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
// */


// function objectToArray(obj: any): any[] {
//   let result = [];
  
  
//   let keys = Object.keys(obj);
  
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     let value = obj[key];
    
    
//     result.push([key, value]);
//   }
  
//   return result;
// }



// console.log(objectToArray({a: 10, b: 20})); 
// console.log(objectToArray({name: "Ali", age: 25, city: "Tashkent"}));


/*

Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

*/


// function hasProperty(obj: { [key: string]: any }, propertyName: string): boolean {
//   return obj.hasOwnProperty(propertyName);
// }

// const person = {name: "Ali", age: 25, city: "Toshkent"};

// console.log('hasProperty(person, "age"):', hasProperty(person, "age"));
// console.log('hasProperty(person, "salary"):', hasProperty(person, "salary"));


/*
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
*/

// function missingNumberXOR(nums: number[]): number {
//   let xor = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//       xor ^= i ^ nums[i];
//   }
//   return xor;
// }


// console.log(missingNumberXOR([3, 0, 1])); 
// console.log(missingNumberXOR([0, 1])); 


/*
 TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
*/

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// // Test qilish

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 



/*
U-TASK:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
*/

function sumOdds(number: number): number {
  let count = 0;
  for (let i = 1; i < number; i += 2) {
    count++;
  }
  return count;
}


console.log(sumOdds(9));   
console.log(sumOdds(11)); 
