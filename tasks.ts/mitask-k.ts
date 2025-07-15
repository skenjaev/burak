/*TASK K:

Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1 */

function countVowels(str:string): number {
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