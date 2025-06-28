import  { Request, Response } from "express";
import {T} from '../libs/types/common';
import  MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) =>{
    try{  
        // try asosan server tarafida xatoliklarni tutish uchun ishlatiladi, asosan asyncron kodlar yozganda ishlatiladi.
        console.log("goHome");
        res.send("Home Page");
    }catch (err){
        // agar xatolik bo'lsa, CATCH-ga bu yerga tushadi va xatolik haqida ma'lumot beradi.
        console.log("Error, goHome:", err);
    }
}; 

restaurantController.getLogin = (req: Request, res: Response) =>{
    try{
        console.log("getLogin");
        res.send("Login Page");
    }catch (err){
        console.log("Error, getLogin:", err);
    }
}; 

restaurantController.getSignup = (req: Request, res: Response) =>{
    try{
        console.log("getSignup");
        res.send("Signup Page");
    }catch (err){
        console.log("Error, getSignup:", err);
    }
}; 

export default restaurantController;