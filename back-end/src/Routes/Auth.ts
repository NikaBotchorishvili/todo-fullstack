import { Router } from "express";
import { register } from "../Controllers/Auth/RegisterController";
import { login } from "../Controllers/Auth/LoginController";
import {refreshToken } from "../Controllers/Auth/RefreshTokenController"
import { logout } from "../Controllers/Auth/LogoutController";
import { verifyUser } from "../Controllers/Auth/UserVerification"
const AuthRouter = Router();1

AuthRouter.route("/register").post(register);
AuthRouter.route("/login").post(login);
AuthRouter.route("/refresh").get(refreshToken);
AuthRouter.route("/logout").get(logout);
AuthRouter.route("/verify/:user_id").patch(verifyUser)

export default AuthRouter