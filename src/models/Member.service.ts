import MemberModel from "../schema/Member.model";
import { MemberInput, Member, LoginInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { memberType } from "../libs/types/enums/member.enum";
import * as bcrypt from "bcryptjs";

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    /* SPA */

    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON();
        } catch (err) {
            console.error("Error, model:signup", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
    }

    public async login(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick },
                { memberNick: 1, memberPassword: 1, memberType: 1 }
            )
            .exec();
        
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        );
        
        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).lean().exec();
    }

    /* SSR */

    public async processSignup(input: MemberInput): Promise<Member> {
        // Agar RESTAURANT type bo'lsa, avval mavjudligini tekshirish
        if (input.memberType === memberType.RESTAURANT) {
            const exist = await this.memberModel
                .findOne({ memberType: memberType.RESTAURANT })
                .exec();
            if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }

        // Nickname mavjudligini tekshirish
        const existingMember = await this.memberModel
            .findOne({ memberNick: input.memberNick })
            .exec();
        if (existingMember) throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);

        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        try {
            const tempResult = new this.memberModel(input);
            const result = await tempResult.save();
            result.memberPassword = "";
            return result.toJSON();
        } catch (err) {
            console.error("Error, processSignup:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick },
                { memberNick: 1, memberPassword: 1, memberType: 1 }
            )
            .exec();

        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        );

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        // Parolni olib tashlash va to'liq ma'lumotlarni qaytarish
        const result = await this.memberModel.findById(member._id).lean().exec();
        if (result) {
            result.memberPassword = "";
        }
        return result;
    }
}

export default MemberService;