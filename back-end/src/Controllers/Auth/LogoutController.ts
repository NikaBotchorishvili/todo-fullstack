import {Request, Response } from "express";
import User from "../../Models/User"

export async function logout (req: Request, res: Response) {
    //  On client also delete the access token

    const cookies =  req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204);

    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({refreshToken});

    if(!foundUser){
        res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true })
        return res.sendStatus(204)
    }

    foundUser.refreshToken = undefined
    foundUser.save();
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true })

    return res.sendStatus(204);
}