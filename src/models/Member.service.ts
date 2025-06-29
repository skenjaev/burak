import MemberModel from "../schema/Member.model";; // MemberModel default eksport qilingan
import { MemberInput, Member } from "../libs/types/member"; // MemberInput va Member to'g'ri import qilingan
import Errors, { HttpCode, Message } from "../libs/Errors"; // Xatoliklarni boshqarish uchun import qilingan
import { memberType } from "../libs/types/enums/member.enum"; // MemberType to'g'ri import qilingan

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel; // memberModel to'g'ri tayinlandi
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        // const result = await this.memberModel.create(input); // Yangi a'zo yaratish
      const exist = await this.memberModel.findOne({memberType: memberType.RESTAURANT}).exec(); // Telefon raqam bo'yicha a'zoni tekshirish
      
      console.log("exist:", exist);

      if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        
      try{
        const tempResult = new this.memberModel(input); // Yangi a'zo yaratish uchun modeldan nusxa olish
        const result = await tempResult.save(); // Yangi a'zo ma'lumotlarini saqlash
        result.memberPassword = ""; // Parolni javobdan olib tashlash
        return result;  
      }  catch (err) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      }
        
    }
}

export default MemberService;