/*
H2-TASK: Shunday function tuzing, unga string argument pass bolsin.
 Function ushbu agrumentdagi digitlarni yangi stringda return qilsinMASALAN: getDigits("m14i1t") return qiladi "141" */

 // H2-TASK: String ichidagi raqamlarni ajratib oluvchi function

 function getDennis(str: string): string {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            result += str[i];
        }
    }
    
    return result;
};


console.log("JAVOB:");
console.log("================");
console.log();

console.log('getDennis("m14i1t") natijasi:', getDennis("m14i1t"));
console.log('Javobi: "141"');
console.log();