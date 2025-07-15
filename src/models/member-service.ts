import MemberModel from "../schema/member-model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member-enum";
import * as bcrypt from "bcryptjs";

class MemberService {
    private readonly memberModel;
    constructor() {
      this.memberModel = MemberModel; 
    }
  

/** SPA */
public async signup(input: MemberInput): Promise<Member> {
  const salt = await bcrypt.genSalt();
  input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

  try {
    const result = await this.memberModel.create(input);
    const resultObj = result.toJSON();
    resultObj.memberPassword = "";
    return resultObj;
  } catch(err) {
    console.error("Error, model:signup", err);
    throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
  }
}

public async login(input: LoginInput): Promise<Member> {
  // TODO: Consider member status later
  const member = await this.memberModel
  .findOne(
    {memberNick: input.memberNick},
    {memberNick: 1, memberPassword: 1}
  )
  .exec();

  if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

  const isMatch = await bcrypt.compare(
    input.memberPassword,
    member.memberPassword
  );
  if(!isMatch) {
    throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
  }

  const result = await this.memberModel.findById(member._id).lean().exec();
  if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
  
  // Parolni olib tashlash
  const { memberPassword, ...memberWithoutPassword } = result;
  return memberWithoutPassword as Member;
}
  
/** SSR */

public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT }) 
      .exec(); 
  
   if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      
      console.log("before:", input.memberPassword);
      const salt = await bcrypt.genSalt();
      input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
      console.log("after:", input.memberPassword);
      
    try {
        const result = await this.memberModel.create(input);
        
        // Parolni olib tashlash
        const resultObj = result.toJSON();
        resultObj.memberPassword = "";
        
        return resultObj;
    } catch (err) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      }
    }

public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
    .findOne({memberNick: input.memberNick},
        {memberNick: 1, memberPassword: 1}
        )
        .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
      
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    
    if(!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }    
    
    const result = await this.memberModel.findById(member._id).exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    
    // Parolni olib tashlash
    const resultObj = result.toJSON();
    resultObj.memberPassword = "";
    
    return resultObj;
}


public async getUsers(): Promise<Member[]> {
      const result = await this.memberModel
        .find({ memberType: MemberType.USER })
        .exec();

        if (!result || result.length === 0) {
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        }

        // Har bir user uchun parolni olib tashlash
        return result.map(user => {
            const userObj = user.toJSON();
            userObj.memberPassword = "";
            return userObj;
        });
}
  
}

export default MemberService;
