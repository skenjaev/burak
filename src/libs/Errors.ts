/*  quydagi "export enum HttpCode" kodi  HTTP holat kodlarini enum sifatida e'lon qiladi.
Vazifasi:

Web ilovalarida server javoblarining holatini ifodalash uchun ishlatiladi
Kod o'qishni osonlashtiradi va xatolarni kamaytiradi */
export enum HttpCode {
    OK = 200,              //- So'rov muvaffaqiyatli bajarildi
    CREATED = 201,         //yangi resurs yaratildi
    NOT_MODIFIED = 304,    //- So'rov muvaffaqiyatli bajarildi, lekin o'zgartirishlar yo'q
    BAD_REQUEST = 400,     //Noto'g'ri so'rov
    UNAUTHORIZED = 401,    // - Avtorizatsiya talab qilinadi
    FORBIDDEN = 403,       // - Ta'qiqlangan resursga kirishga urinish yoki Ruxsat berilmagan
    NOT_FOUND = 404,        // - Sahifa/resurs topilmadi
    INTERNAL_SERVER_ERROR = 500, // - Server xatosi
  }

  /*quydagi "export enum Message" kod xato xabarlarini enum sifatida e'lon qiladi.
Vazifasi:

Ilovada takrorlanuvchi xabarlarni bir joyda saqlash
Xabarlarni o'zgartirish va boshqarishni osonlashtirish
Kod yozishda xatolarni kamaytirish */



export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",  // Umumiy xato xabari
    NO_DATA_FOUND = "No data is found!",             // Ma'lumot topilmadi
    CREATE_FAILED = "Create is failed!",             // Yaratish muvaffaqiyatsiz tugadi
    UPDATE_FAILED = "Update is failed!",            // Yangilash muvaffaqiyatsiz tugadi
  }

  
  //quydagi "class Errors" kodi xato holatlarini ifodalovchi klassni e'lon qiladi.
// Vazifasi:
// HTTP holat kodlari va xabarlarini bir joyda saqlash
// Xatoliklarni boshqarish va qayta ishlashni osonlashtirish
// Xatoliklar haqida aniq ma'lumot berish
  
  class Errors extends Error {  
    public code: HttpCode;
    public message: Message;
    
    constructor(statusCode: HttpCode, statusMessage: Message) {
      super();
      this.code = statusCode;
      this.message = statusMessage;
    }
  }

//quydagi "export default Errors" kodi bu klassni boshqa fayllarda ishlatish uchun eksport qiladi.
  export default Errors;