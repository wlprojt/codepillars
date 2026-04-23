import ResetPasswordClient from "@/components/ResetPasswordClient";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      }
    >
      <ResetPasswordClient />
    </Suspense>
  );
}