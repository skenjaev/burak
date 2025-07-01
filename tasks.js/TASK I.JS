/*
TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4
 */

/*function majorityElement(arr: number[]): number | null {
    // 1-qadam: Har bir raqamning necha marta kelganini sanash uchun bo'sh obyekt
    let sanoq: { [key: number]: number } = {};
    
    // 2-qadam: Arrayni aylanib, har bir raqamni sanash
    for (let i = 0; i < arr.length; i++) {
        let raqam = arr[i];
        
        // Agar bu raqam birinchi marta kelgan bo'lsa, 1 qo'yamiz
        // Agar oldin kelgan bo'lsa, 1 qo'shamiz
        if (sanoq[raqam] === undefined) {
            sanoq[raqam] = 1;
        } else {
            sanoq[raqam] = sanoq[raqam] + 1;
        }
    }
    
    // 3-qadam: Eng ko'p takrorlangan raqamni topish
    let engKopRaqam: number | null = null;
    let engKopSoni = 0;
    
    // Sanash obyektini aylanib, eng ko'p takrorlangan raqamni topamiz
    for (let raqam in sanoq) {
        if (sanoq[raqam] > engKopSoni) {
            engKopSoni = sanoq[raqam];
            engKopRaqam = Number(raqam); // String'dan raqamga o'girish
        }
    }
    
    return engKopRaqam;
  }
  
  // MISOLLAR VA TEST:*/
  