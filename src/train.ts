/* Loyiha Standartlari:
- Logging Standartlari (Dastur harakatini kuzatish qoidalari)
- Nomlash Standartlari:
  - funksiya/metod/o'zgaruvchi → camelCase (masalan: goHome - bosh sahifaga o'tish)  
  - Klass → PascalCase (masalan: MemberService - a'zolarni boshqarish servisi)  
  - Papka → kebab-case (masalan: project-utils - loyiha yordamchi fayllari)  
  - CSS → snake_case (masalan: button_style - tugma stilini belgilash)  


// Misollar:
goHome          // ✅ camelCase (funksiya - bosh sahifaga qaytish)  
MemberService   // ✅ PascalCase (klass - foydalanuvchilar servisi)  
button_style    // ✅ snake_case (CSS - tugma uchun stil)  
project-utils   // ✅ kebab-case (papka - yordamchi vositalar)  */


/*
 Traditinal API
 Rest API
 GraphQL API
*/

/*
Traditinal frontend development => BSSR => EJS
Modern frontend development => SPA => React
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


function calculateSumOfNumbers(values: any[]) {
  let sum = 0;
  
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    
    
    if (typeof value === 'number') {
      sum += value;
    }
    
    else if (typeof value === 'string' && !isNaN(Number(value))) {
      sum += Number(value);
    }
   
    else if (typeof value === 'object' && value !== null && value.son !== undefined) {
      sum += value.son;
    }
   
    else if (typeof value === 'boolean') {
      sum += value ? 1 : 0; // true = 1, false = 0
    }
  }
  
  return sum;
}


console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // Natija: 66
console.log(calculateSumOfNumbers([5, "15", { son: 20 }, false, 25])); // Natija: 65





