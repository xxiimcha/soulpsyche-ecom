"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import axios from "axios";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CustomLoginPage() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"start" | "verify">("start");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!isLoaded) return;

      // Start email sign-in
      await signIn.create({
        identifier: email,
        strategy: "email_code",
      });

      setStep("verify"); // Move to verification step
    } catch (err: any) {
      setError(err?.errors[0]?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
  setLoading(true);
  setError(null);

  try {
    if (!isLoaded) return;

    // Attempt to verify the code
    const signInAttempt = await signIn.attemptFirstFactor({
      strategy: "email_code",
      code, // The code entered by the user
    });

    if (signInAttempt.status === "complete") {
      setActive({ session: signInAttempt.createdSessionId });

      // Fetch the user ID using Axios
      console.log("Calling the API to fetch user data...");
      const response = await axios.get(`/api/users/get-by-email`, {
        params: { email },
      });

      if (response.status === 200) {
        const userId = response.data.id;
        console.log("API successfully called. Logged in user ID:", userId);

        // Save the user ID to localStorage
        localStorage.setItem("userId", userId);

        // Print the saved user ID from localStorage
        console.log("Saved User ID in localStorage:", localStorage.getItem("userId"));
      } else {
        console.error("API call failed. Failed to fetch user data");
      }

      window.location.href = "/"; // Redirect to the dashboard
    } else {
      setError("Verification failed. Please try again.");
    }
  } catch (err: any) {
    setError(err?.response?.data?.message || "Invalid code. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const handleSocialSignIn = async (provider: "google" | "facebook") => {
    try {
      if (!isLoaded) return;

      // Map the provider to the correct OAuth strategy
      const strategy = provider === "google" ? "oauth_google" : "oauth_facebook";

      // Redirect user to the appropriate social login
      await signIn.authenticateWithRedirect({
        strategy, // Now it's a valid OAuthStrategy type
        redirectUrl: "/", // Redirect after successful login
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      setError(err?.errors[0]?.message || `Failed to login with ${provider}.`);
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <Image
            src={Logo}
            alt="SoulePsycle Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <h1 className="text-xl font-semibold text-center mb-2">
          Sign in to SoulePsycle
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Welcome back! Please sign in to continue
        </p>

        {step === "start" ? (
          <>
            {/* Social Login */}
            <div className="flex gap-4 mb-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
                onClick={() => handleSocialSignIn("google")}
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
                onClick={() => handleSocialSignIn("facebook")}
              >
                Facebook
              </Button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center text-sm mb-6">
              <span className="absolute bg-white px-2 text-gray-500">or</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <Label>Email address</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Continue Button */}
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              onClick={handleEmailSignIn}
              disabled={loading}
            >
              {loading ? "Sending Code..." : "Continue"}
            </Button>
          </>
        ) : (
          <>
            {/* Code Input */}
            <div className="mb-4">
              <Label>Verification Code</Label>
              <Input
                type="text"
                placeholder="Enter the code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Verify Button */}
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              onClick={handleVerifyCode}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </Button>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-yellow-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}
