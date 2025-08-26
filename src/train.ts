/*
ZE-TASK:

Shunday function yozing, uning string parametri bo‘lsin. String ichidagi takrorlangan harflarni olib tashlab qolganini qaytarsin.
MASALAN: removeDuplicate('stringg') qaytarsin 'string'
*/

function removeDuplicate(str: string): string {
    let result = '';
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicate('stringg')); 
console.log(removeDuplicate('hello world'));