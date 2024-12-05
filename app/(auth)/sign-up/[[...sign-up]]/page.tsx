"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CustomSignUpPage() {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"start" | "verify">("start");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!isLoaded) return;

      // Start sign-up
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification();
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

      // Verify the code
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        window.location.href = "/"; // Redirect after successful sign-up
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err: any) {
      setError(err?.errors[0]?.message || "Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignUp = async (provider: "google" | "facebook") => {
    try {
      if (!isLoaded) return;

      // Redirect to social sign-up
      await signUp.authenticateWithRedirect({
        strategy: `oauth_${provider}`,
        redirectUrl: "/", // Redirect after successful sign-up
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      setError(err?.errors[0]?.message || `Failed to sign up with ${provider}.`);
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
        <h1 className="text-xl font-semibold text-center mb-2">Sign up</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create an account to get started
        </p>

        {step === "start" ? (
          <>
            {/* Social Sign-Up */}
            <div className="flex gap-4 mb-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
                onClick={() => handleSocialSignUp("google")}
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
                onClick={() => handleSocialSignUp("facebook")}
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

            {/* Password Input */}
            <div className="mb-4">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Sign Up Button */}
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
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
          Already have an account?{" "}
          <a href="/sign-in" className="text-yellow-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}
