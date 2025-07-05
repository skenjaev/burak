import MemberModel from "../schema/Member.model"; // MemberModel default eksport qilingan
import { MemberInput, Member, LoginInput } from "../libs/types/member"; // MemberInput va Member to'g'ri import qilingan
import Errors, { HttpCode, Message } from "../libs/Errors"; // Xatoliklarni boshqarish uchun import qilingan
import { memberType } from "../libs/types/enums/member.enum"; // MemberType to'g'ri import qilingan
import * as bcrypt from "bcryptjs"; // Parolni shifrlash uchun bcrypt kutubxonasi import qilingan

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel; // memberModel to'g'ri tayinlandi
    }

    /* SPA */

    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt(); // Parolni shifrlash uchun tuz yaratish.
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // Parolni shifrlash

        try {
            const result = await this.memberModel.create(input); // Yangi a'zo ma'lumotlarini saqlash
            result.memberPassword = ""; // Parolni javobdan olib tashlash
            return result.toJSON();
        } catch (err) {
            console.error("Error, model:signup", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
    }

    public async login(input: LoginInput): Promise<Member> {
        // TODO: Telefon raqam bo'yicha a'zoni tekshirish
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick },
                { memberNick: 1, memberPassword: 1 } // A'zoni login ma'lumotlari bilan topish
            )
            .exec(); // Telefon raqam bo'yicha a'zoni tekshirish
        
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        ); // Parolni tekshirish
        // const isMatch = input.memberPassword === member.memberPassword; // Parolni tekshirish
        
        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).lean().exec(); // A'zoni ID bo'yicha topish
    }

    /* SSR */

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel.findOne({ memberType: memberType.RESTAURANT }).exec(); // Telefon raqam bo'yicha a'zoni tekshirish

        console.log("exist:", exist);

        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        console.log("before:", input.memberPassword);
        const salt = await bcrypt.genSalt(); // Parolni shifrlash uchun tuz yaratish.
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // Parolni shifrlash
        console.log("after:", input.memberPassword);

        try {
            const tempResult = new this.memberModel(input); // Yangi a'zo yaratish uchun modeldan nusxa olish
            const result = await tempResult.save(); // Yangi a'zo ma'lumotlarini saqlash
            result.memberPassword = ""; // Parolni javobdan olib tashlash
            return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick },
                { memberNick: 1, memberPassword: 1 } // A'zoni login ma'lumotlari bilan topish
            )
            .exec(); // Telefon raqam bo'yicha a'zoni tekshirish

        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword); // Parolni tekshirish
        // const isMatch = input.memberPassword === member.memberPassword; // Parolni tekshirish

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).exec(); // A'zoni ID bo'yicha topish
    }
}


export default MemberService;