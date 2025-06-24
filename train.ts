/*H-TASK: shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsinMASALAN: getPositive([1, -4, 2]) return qiladi "12"*/

// Faqat musbat sonlarni olib string qaytaruvchi funksiya
function getPositive(arr) {
    let result = "";  // Bo'sh string yaratamiz
    
    // Array elementlarini birma-bir tekshiramiz
    for (let i = 0; i < arr.length; i++) {
        // Agar element musbat bo'lsa
        if (arr[i] > 0) {
            result = result + arr[i];  // Stringga qo'shamiz
        }
    }
    
    return result;  // Natijani qaytaramiz
}

// Test qilish uchun misollar:
console.log(getPositive([1, -4, 2]));     
console.log(getPositive([3, -1, 5, -2])); 
console.log(getPositive([-1, -2, -3]));   
console.log(getPositive([7, 8, 9]));      