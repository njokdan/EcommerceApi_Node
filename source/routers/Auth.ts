import RequestValidator from "../middleware/validation";
import { protect } from "../middleware/auth";
import { Router } from "express";
import  AuthController from "../controllers/Auth";
import { SignUp,SignIn, Profile } from "../serializers/Auth";
import 'express-async-errors'

const authRouter = Router();

authRouter.post('/signup',RequestValidator.validate(SignUp), AuthController.signUp)
authRouter.post('/login', RequestValidator.validate(SignIn),  AuthController.signIn)
authRouter.post('/profile', protect, RequestValidator.validate(Profile), AuthController.addProfile)
authRouter.put('/profile', protect, RequestValidator.validate(Profile), AuthController.editProfile)
authRouter.get('/profile',  protect, AuthController.getProfile)

export default authRouter


