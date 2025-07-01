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
TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
 */

function findLongestWord(sentence: string): string {
    // Har bir so'zni ajratish
    const words = sentence.split(' ');
    
    // Eng uzun so'zni topish
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
  };



console.log(findLongestWord("I came from Uzbekistan!"));
console.log(findLongestWord("Hello world!")); 
