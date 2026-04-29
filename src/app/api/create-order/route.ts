import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount, currency, projectId } = await req.json();

    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    if (!["INR", "USD"].includes(currency)) {
      return NextResponse.json({ error: "Invalid currency" }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: Math.round(numericAmount * 100),
      currency,
      receipt: `rcpt_${Date.now()}`.slice(0, 40),
      notes: {
        projectId: projectId || "",
      },
    });

    return NextResponse.json(order, { status: 200 });
  } catch (err: any) {
    console.error("Create order error:", err);
    return NextResponse.json(
      { error: err.message || "Order creation failed" },
      { status: 500 }
    );
  }
}