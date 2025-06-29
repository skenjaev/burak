import { ObjectId } from "mongoose";

import { MemberStatus, memberType } from './enums/memberType';

export interface MemberInput {
    _id: object;       // _id qo'shildi.
    memberType: memberType;
    memberNick: string;
    memberPhone: string;
    memberPassword: string; // memberPassword majburiy qilib belgilandi
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberStatus?: string;
    memberPoints?: number;
    createdAt?: Date; // createdAt qo'shildi
    updatedAt?: Date; // updatedAt qo'shildi
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