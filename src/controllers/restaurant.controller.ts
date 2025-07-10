import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, MemberInput } from "../libs/types/member";
import { memberType } from "../libs/types/enums/member.enum"; // memberType ni to'g'ri import qilish
import { LoginInput } from "../libs/types/member";
import session from "express-session";
import { Message } from "../libs/Errors";


const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.render("home");
    } catch (err) {
        console.log("Error, goHome:", err);
        res.send(err); // Xatolikni qaytarish
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("Signup");
    } catch (err) {
        console.log("Error, getSignup:", err);
        res.send(err); // Xatolikni qaytarish
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    } catch (err) {
        console.log("Error, getLogin:", err);
        res.send(err); // Xatolikni qaytarish
    }
};



restaurantController.processSignup = async (
    req:AdminRequest,
     res: Response) => {
    try {
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember: MemberInput = req.body; // Sintaksis xatosi tuzatildi
        newMember.memberType = memberType.RESTAURANT; // memberType RESTAURANT qilib belgilandi
        const result = await memberService.processSignup(newMember); // Sintaksis xatosi tuzatildi
    

        req.session.member = result;
        req.session.save(function () {
            res.send(result);  
        });

        res.send(result); // "result" o'rniga haqiqiy natija qaytarildi
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err); // Xatolikni qaytarish
    }
};


restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");

        console.log("body:", req.body);
        const input: LoginInput = req.body;     
        const result = await memberService.processLogin(input); // processLogin metodini chaqirish
         
       

        req.session.member = result;
        req.session.save(function () {
            res.send(result);  
        });

    4
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.send(err); // Xatolikni qaytarish
    }
};


restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");
        if (req.session?.member) res.send(`<script> alert(" ${req.session.member.memberNick}") </script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err); // Xatolikni qaytarish
    }
};


export default restaurantController;