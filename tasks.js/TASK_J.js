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
