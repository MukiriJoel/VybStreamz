"use client";

import type React from "react";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import OtpInput from "@/components/OtpInput";
import AdSlider from "@/components/AdSlider";

export default function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", ""]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
   

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };
  const handleVerify = () => {
    if(returnUrl==="forgotPassword"){
      router.push('/passwordReset')
    }else{
      router.push("/preference");
    }
   
  };

  const GoToHome = () =>{
    router.push('/')
  }

   const imgSlides = [
    {
      id: 1,
      image: "/splash/1.webp",
    },
     {
      id: 2,
      image: "/splash/2.webp",
    },
     {
      id: 3,
      image: "/splash/3.webp",
    }, {
      id: 4,
      image: "/splash/4.webp",
    }, {
      id: 5,
      image: "/splash/5.webp",
    }, {
      id: 6,
      image: "/splash/6.webp",
    }, {
      id: 7,
      image: "/splash/7.webp",
    }, {
      id: 8,
      image: "/splash/8.webp",
    }, {
      id: 9,
      image: "/splash/9.webp",
    }, {
      id: 10,
      image: "/splash/10.webp",
    }, {
      id: 11,
      image: "/splash/11.webp",
    }, {
      id: 12,
      image: "/splash/12.webp",
    },
    {
      id: 13,
      image: "/splash/13.webp",
    },
  ];

  return (
    <div className="px-2 min-h-screen bg-[#F2F2F2] dark:bg-[#141414] flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)]">
        {/* Image Section - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex h-[100vh] lg:w-1/2 items-center justify-center p-8">
          {/* <img
            className="max-w-full max-h-[90vh] object-contain"
            src="/images/create.png"
            alt=""
          /> */}
          <div className="w-full h-full md:scale-65 !mt-[-28%]  object-contain ">
            <AdSlider slides={imgSlides} showDots={false} isLandScape={false}/>
          </div>
        </div>


        {/* Form Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col ">
          

          <div className="w-full pt-12  md:pt-2 mx-auto">
            <div className="flex items-center w-full justify-between max-w-md mx-auto md:mx-auto lg:mx-0 mb-5 md:pt-6 lg:pt-8 ">
            <button 
              onClick={() => router.back()}
              className="cursor-pointer flex items-center !pl-0 mr-2 md:mr-4 text-[#2C2C2C] dark:text-[#FFFFFF] hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <MdArrowBack className="!w-8 !h-8"/>
            </button>
            <img onClick={()=>GoToHome()}  src="/logos/vybstreamz.png" alt="" className="cursor-pointer !h-15 !w-50" />
          </div>
            <h1 className="text-3xl font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">
              Verify Phone Number
            </h1>

            <p className="text-[#2C2C2C] dark:text-[#FFFFFF] mb-12 leading-relaxed">
              Please enter the verification code sent to your number
            </p>

            {/* Code Input */}
            <div className="flex justify-center lg:justify-start mb-8">
              {/* {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-16 h-16 text-center text-2xl font-semibold bg-[#ffffff] border-2 border-[#c62676] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c62676] focus:border-transparent"
                  maxLength={1}
                />
              ))} */}
              <OtpInput/>
            </div>

            {/* Verify Button */}
            <Button
              className="w-sm md:w-md h-14 bg-[#c62676] hover:bg-[#a91e63] text-white text-lg font-semibold rounded-full mb-6"
              onClick={handleVerify}
            >
              Verify
            </Button>

            {/* Additional Options */}
            <div className="text-center md:text-center lg:text-left mx-auto lg:ml-0 w-[70%] space-y-4">
              <button className="text-[#2C2C2C] dark:text-[#FFFFFF] underline">
                Resend Code
              </button>

              <p className="text-[#2C2C2C] dark:text-[#FFFFFF]">
                Or verify via phone number
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
    </div>
  );
}
