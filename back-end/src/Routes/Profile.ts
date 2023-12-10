import { Router } from "express";
import { getUserProfile, patchUserProfile } from "../Controllers/Profile/ProfileController";
import {verifyToken} from "../middleware/auth/verifyToken"
const ProfileRouter = Router();

ProfileRouter.route("/:user_id").get(verifyToken, getUserProfile).patch(verifyToken, patchUserProfile);


export default ProfileRouter;