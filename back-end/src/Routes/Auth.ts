import { Router } from "express";
import { register } from "../Controllers/Auth/RegisterController";
import { login } from "../Controllers/Auth/LoginController";
import {refreshToken } from "../Controllers/Auth/RefreshTokenController"
import { logout } from "../Controllers/Auth/LogoutController";
const AuthRouter = Router();

AuthRouter.route("/register").post(register);
AuthRouter.route("/login").post(login);
AuthRouter.route("/refresh").get(refreshToken);
AuthRouter.route("/logout").get(logout);

export default AuthRouter