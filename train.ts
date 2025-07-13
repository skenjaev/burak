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

const reverseSentenceShort = str => str.split(' ')
.map(word => word
    .split('')
    .reverse()
    .join(''))
    .join(' ');

console.log(reverseSentenceShort("we like coding!")); // "ew ekil !gnidoc"  





 
/*
split('') - so'zni harflarga ajratadi: "we" → ['w', 'e']
reverse() - massivni teskari qiladi: ['w', 'e'] → ['e', 'w']
join('') - massivni stringga birlashtiradi: ['e', 'w'] → "ew"

*/