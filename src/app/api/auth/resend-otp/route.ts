import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Otp from "@/models/Otp";
import { sendOTPEmail } from "@/lib/send-email";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email?.toLowerCase().trim();

    if (!email) {
      return NextResponse.json(
        { error: "Email required" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ email });

    if (!user || user.emailVerified) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    const otp = generateOTP();

    // delete previous OTPs for this email
    await Otp.deleteMany({ email });

    // save new OTP in Otp collection
    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

    await sendOTPEmail(user.email, otp);

    return NextResponse.json(
      { ok: true, message: "OTP resent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("RESEND OTP ERROR:", error);

    return NextResponse.json(
      { error: "Failed to resend OTP" },
      { status: 500 }
    );
  }
}