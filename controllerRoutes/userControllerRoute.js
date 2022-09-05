import express from "express";
import router from express.Router();
import { register, login } from ("../controller/userController");

export const registerRouter = router.post('/register', register)
export const loginRouter = router.post("/login", login)