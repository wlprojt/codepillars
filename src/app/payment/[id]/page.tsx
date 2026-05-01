"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sendGTMEvent } from '@next/third-parties/google'

declare global {
  interface Window {
    Razorpay: any;
    gtag?: (...args: any[]) => void;
  }
}

export default function PaymentPage() {
  const { id } = useParams();
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePay = async () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/create-order", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: id,
          amount: numericAmount,
          currency,
        }),
      });

      const order = await res.json();

      if (!res.ok) {
        alert(order.error || "Order creation failed");
        return;
      }

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Code Pillars",
        description: "Project Payment",
        theme: { color: "#6366f1" },

        handler: async (response: any) => {
          const verifyRes = await fetch("/api/payments/verify", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              projectId: id,
              amount: numericAmount,
              currency,
              razorpayOrderId: order.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });

          const data = await verifyRes.json();

          if (!verifyRes.ok) {
            alert(data.error || "Payment verification failed");
            return;
          }

          window.gtag?.("event", "conversion", {
            send_to: "AW-11219169717/gAyhCPmLkt8bELXj2-Up",
            value: numericAmount,
            currency,
            transaction_id: response.razorpay_payment_id,
          });

          alert("Payment successful");
          window.location.href = "/my-projects";
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      });

      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#d6e0ec] bg-[url('/bg.png')] bg-cover bg-center p-6">
      <div className="bg-white/20 backdrop-blur-lg shadow-xl p-8 rounded-3xl w-full max-w-md border border-white/30">
        <h1 className="text-3xl font-bold text-[#142342] text-center mb-2">
          Make Payment
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Enter your project payment amount
        </p>

        <input
          type="number"
          min="1"
          step="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Enter Amount (${currency})`}
          className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-white/30 outline-none focus:ring-2 focus:ring-[#142342]"
        />

        <div className="mt-4 rounded-2xl bg-white/30 p-4 text-center">
          <p className="text-gray-700">Payment Amount</p>
          <h2 className="text-4xl font-bold text-[#142342] mt-1">
            {amount
              ? currency === "USD"
                ? `$${amount}`
                : `₹${amount}`
              : "--"}
          </h2>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            type="button"
            onClick={() => setCurrency("INR")}
            className={`flex-1 py-3 rounded-xl font-bold transition ${
              currency === "INR"
                ? "bg-green-500 text-white"
                : "bg-white/40 text-[#142342]"
            }`}
          >
            🇮🇳 INR
          </button>

          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`flex-1 py-3 rounded-xl font-bold transition ${
              currency === "USD"
                ? "bg-blue-500 text-white"
                : "bg-white/40 text-[#142342]"
            }`}
          >
            🌍 USD
          </button>
        </div>

        <button
          onClick={handlePay}
          disabled={loading}
          className="mt-6 w-full h-14 rounded-[32px] bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] text-[#142342] text-lg font-bold hover:scale-[1.02] transition disabled:opacity-50"
        >
          sendGTMEvent({loading ? "Processing..." : "Pay Now"})
        </button>

        <p className="text-gray-700 text-center mt-4 text-sm">
          Secure payment powered by Razorpay 🔐
        </p>
      </div>
    </main>
  );
}