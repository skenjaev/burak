import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { memberType } from "../libs/types/enums/member.enum"; // memberType ni to'g'ri import qilish
import { LoginInput } from "../libs/types/member";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;     

        const memberService = new MemberService();
        const result = await memberService.processLogin(input); // processLogin metodini chaqirish

        res.send(result); // "result" o'rniga haqiqiy natija qaytarildi
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.send(err);
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember: MemberInput = req.body; // Sintaksis xatosi tuzatildi
        newMember.memberType = memberType.RESTAURANT; // memberType RESTAURANT qilib belgilandi

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember); // Sintaksis xatosi tuzatildi
        res.send(result); // "result" o'rniga haqiqiy natija qaytarildi
    } catch (err) {
        console.log("Error, processSignup:", err);
    }
};

export default restaurantController;