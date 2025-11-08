import { model, Schema } from "mongoose";

const OTPSchema = new Schema({
  code: { type: String, required: false, default: null },
  expiresAt: { type: Number, required: false, default: 0 },
});

const UserSchema = new Schema(
  {
    name: { type: String, required: false },
    mobile: { type: String, required: true, unique: true },
    // we need to handle OTP via substructure
    otp: { type: OTPSchema },
    // 'verified' indicates if the user has passed validation and is eligible for features like scam protection and spending
    verified: { type: Boolean, required: false, default: false },
  },
  { timestamps: true } // timestamps for createdAt and updatedAt
);

export const UserModel = model("User", UserSchema);
