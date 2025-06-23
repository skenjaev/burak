/*TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 */


function getHighestIndex(arr) {
    // Agar array bo'sh bo'lsa, -1 qaytaramiz
    if (arr.length === 0) {
        return -1;
    }
    
    let maxValue = arr[0];  // Birinchi elementni eng katta deb olamiz
    let maxIndex = 0;       // Uning indeksini saqlaymiz
    
    // Arrayni aylanib chiqamiz
    for (let i = 1; i < arr.length; i++) {
        // Agar joriy element eng katta qiymatdan katta bo'lsa
        if (arr[i] > maxValue) {
            maxValue = arr[i];  // Yangi eng katta qiymatni saqlaymiz
            maxIndex = i;       // Uning indeksini saqlaymiz
        }
    }
    
    return maxIndex;  // Eng katta qiymatning birinchi indeksini qaytaramiz
}


console.log(getHighestIndex([5, 21, 12, 21, 8])); // Natija: 1
console.log(getHighestIndex([10, 5, 15, 3]));     // Natija: 2
console.log(getHighestIndex([1, 1, 1, 1]));       // Natija: 0
console.log(getHighestIndex([100]));              // Natija: 0
console.log(getHighestIndex([]));                 // Natija: -1