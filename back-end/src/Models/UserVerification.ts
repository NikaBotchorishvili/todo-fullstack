import {Schema, model} from "mongoose";

type UserVerification = {
    user: Schema.Types.ObjectId;
    expiredAt: Date;
}

export const userVerificationSchema = new Schema<UserVerification>(
    {
        user: { type: Schema.Types.ObjectId, required: true },
        expiredAt: { type: Date }
    },
    {
        timestamps: true
    }
);

export default model("UserVerification", userVerificationSchema)