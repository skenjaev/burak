import express from "express"
const router = express.Router()
import memberController from "./controllers/member.controller"

// router.get("/", memberController.goHome)

// router.get("/login", memberController.getLogin)

// router.get("/signup", memberController.getSignUp)
      
//  Member

router.post("/member/login", memberController.login)
router.post("/member/signup", memberController.signup)
router.get("/member/signup", memberController.signup)
router.get("/member/login", memberController.login)
router.get("/member/detail", memberController.verifyAuth)



// Product



//Order

export default router;