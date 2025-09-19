"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function ForgotPasswordEmailPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending verification to:", email);
  };

  const handleResetPassword = () => {
    router.push("/passwordReset");
  };

  const handleNumber = () => {
    router.push("/verifyForgotNumber");
  };

  const GoToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] transition-colors duration-200">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Image Section - Hidden on mobile and tablet, visible on desktop */}
         <div className="hidden lg:flex lg:w-1/2 items-start justify-start p-8">
          <img className="max-w-full max-h-[90vh] object-contain" src="/images/create.png" alt="" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col">
          {/* Header */}
          

          {/* Form Content */}
          <div className="flex-1 flex-col items-center justify-center mx-auto p-4 sm:p-6 lg:p-8 lg:pt-0">
            <div className="flex pt-10 mb-5 items-center w-full justify-between max-w-md  md:pt-6 lg:pt-8">
            <button
              onClick={() => router.push("/login")}
              className="cursor-pointer flex items-center mr-2 md:mr-4 text-[#2C2C2C] dark:text-[#FFFFFF] hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <MdArrowBack className="!w-8 !h-8" />
            </button>
            <img
              onClick={() => GoToHome()}
              src="/logos/vybstreamz.png"
              alt=""
              className="cursor-pointer !h-15 !w-50"
            />
          </div>
            <div className="w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8">
              {/* Title Section */}
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#2c2c2c] dark:text-white transition-colors duration-200">
                  Forgot Password
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-[#999999] dark:text-gray-400 transition-colors duration-200">
                  Please enter your phone number or email address to receive a
                  verification code
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-[#2c2c2c] dark:text-white transition-colors duration-200"
                  >
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-[#cccccc] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#2c2c2c] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#c62676] focus:ring-[#c62676] dark:focus:border-[#c62676] transition-colors duration-200"
                    required
                  />
                </div>

                {/* <button
                  type="button"
                  onClick={handleNumber}
                  className="text-sm underline text-[#999999] dark:text-gray-400 hover:text-[#777777] dark:hover:text-gray-300 transition-colors duration-200"
                >
                  Use Phone Number Instead
                </button> */}

                <Button
                  onClick={handleResetPassword}
                  type="submit"
                  className="w-full py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full border-0 hover:opacity-90 transition-all duration-200 bg-[#c62676] hover:bg-[#b01f64] text-white"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
