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





export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",  // Umumiy xato xabari
    NO_DATA_FOUND = "No data is found!",             // Ma'lumot topilmadi
    CREATE_FAILED = "Create is failed!",             // Yaratish muvaffaqiyatsiz tugadi
    UPDATE_FAILED = "Update is failed!",  
    
    USED_NICK_PHONE = " you are inserting already used nick or phone!", // Ushbu nick yoki telefon raqami allaqachon ishlatilgan
    NO_MEMBER_NICK =  " no member with that member  nick!", // Ushbu nick bilan a'zo topilmadi
    WRONG_PASSWORD = "Wrong password, please try again!", // Noto'g'ri parol, iltimos qayta urinib ko'ring
    NOT_AUTHENTICATED = "You are not authenticated, Please login first!", // Avtorizatsiya qilinmagan, iltimos avval tizimga kiring
  }

  
  
  
  class Errors extends Error {  
    public code: HttpCode;
    public message: Message;

    static standard ={
      code: HttpCode.INTERNAL_SERVER_ERROR,
      message: Message.SOMETHING_WENT_WRONG,
};
    
    constructor(statusCode: HttpCode, statusMessage: Message) {
      super();
      this.code = statusCode;
      this.message = statusMessage;
    }
  }

//quydagi "export default Errors" kodi bu klassni boshqa fayllarda ishlatish uchun eksport qiladi.
  export default Errors;