import { ObjectId } from "mongoose";
import { MemberStatus, memberType } from './enums/memberType';
import { Request } from "express";
import { Session } from "express-session";

export interface MemberInput {
    _id: object;
    memberType: memberType;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberStatus?: string;
    memberPoints?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Member {
    memberType: memberType;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberStatus?: string;
    memberPoints?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}

export interface AdminRequest extends Request {
    member: Member;
    session: Session & { member: Member };
}
