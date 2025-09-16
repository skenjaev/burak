import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';
import * as bcryptjs from "bcryptjs";

@Injectable()
export class MemberService {
    constructor(@InjectModel('Member') 
    private readonly memberModel: Model<Member>) {}


    public async signup(input: MemberInput): Promise<Member>{
        //Hash password
        const salt = await bcryptjs.genSalt();
        input.memberPassword = await bcryptjs.hash(input.memberPassword, salt)

        try {
            const result = await this.memberModel.create(input);
            //todo authentication with token
            return result;
        } catch (err) {
            console.log('Error, service model signup', err);
            throw new BadRequestException(err);
        }
    }

    public async login(): Promise<string>{
        console.log('Mutation: login');
        return 'Login Executed'
    }

    public async updateMember(): Promise<string>{
        console.log('Mutation: updateMember');
        return 'updateMember executed'
    }

    public async getMember(): Promise<string>{
        console.log('Query: getMember');
        return 'getMember executed';
    }

}
