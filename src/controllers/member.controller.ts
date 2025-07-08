import { Request, Response } from "express";
import { T } from '../libs/types/common';
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService(); // MemberService ni to'g'ri import qilish va nusxa olish

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        const input: MemberInput = req.body; // Sintaksis xatosi tuzatildi
        const result: Member = await memberService.signup(input); // Sintaksis xatosi tuzatildi
        
        // TODO: TOKENS AUTHENTICATION
        res.json({ member: result });
    } catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        const input: LoginInput = req.body;
        const result = await memberService.login(input); // processLogin metodini chaqirish
        
        // TODO: TOKENS AUTHENTICATION
        res.json({ member: result });
    } catch (err) {
        console.log("Error, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default memberController;