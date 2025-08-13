import express from "express";
import { checkUserAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.put("/updateProfile", protectRoute, updateProfile)
router.get("/check", protectRoute, checkUserAuth)


export default router;