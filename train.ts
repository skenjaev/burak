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



/*TASK K:

Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1 */

function countVowels(str: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

// Test

console.log(countVowels("string")); 
console.log(countVowels("hello world")); 