"use client"

import { useState } from "react"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

import { useAuth } from "@/lib/context/AuthContext"

import { MdArrowBack } from "react-icons/md"


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("720 123 456")
  const [selectedCountryCode, setSelectedCountryCode] = useState("+254")
  const router = useRouter()
  const { isLoggedIn, login } = useAuth()

  const handleBackToCreate = () => {
    router.push("/createAccount")
  }

  const handleSuccessLogin = () => {
    login() // Set logged in state to true
    router.push('/')
  }

  const handleForgotPassword = () => {
    router.push("/verifyForgotEmail")
  }

  const GoToHome = () =>{
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] flex flex-col transition-colors duration-200">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)]">
        {/* Image Section - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex lg:w-1/2 items-start justify-start p-8">
          <img className="max-w-full max-h-[90vh] object-contain" src="/images/create.png" alt="" />
        </div>
   
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Header - Now inside form section */}
           <div className="flex pt-10 items-center w-full justify-center  md:px-6 md:pt-6 lg:pt-8 gap-4">
                      <button 
                        onClick={() => router.back()}
                        className="cursor-pointer flex items-center mr-2 md:mr-4 text-[#2C2C2C] dark:text-[#FFFFFF] hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        <MdArrowBack className="!w-8 !h-8"/>
                      </button>
                      <img onClick={()=>GoToHome()}  src="/logos/vybstreamz.png" alt="" className="cursor-pointer !h-15 !w-50" />
            </div>
          
          {/* Form Content */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:pt-0">
            <div className="w-full max-w-md space-y-6 pb-40">
              {/* Title Section */}
              <div className="text-center lg:text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333333] dark:text-white mb-2 transition-colors duration-200">Welcome Back</h1>
                <p className="text-[#999999] dark:text-gray-400 text-sm md:text-base transition-colors duration-200">
                  Log into your account and dive into non-stop entertainment made for you
                </p>
                
              </div>

              {/* Form */}
              <div className="space-y-4">
                {/* Phone Number Section */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333] dark:text-white block transition-colors duration-200">
                    <span className="block sm:inline">Country</span>
                    <span className="block sm:inline sm:ml-16">Phone Number*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="w-16 sm:w-20">
                      <Input
                        value="+254"
                        readOnly
                        className="text-center border-[#c62676] focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:border-[#c62676] dark:text-white transition-colors duration-200"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border-[#c62676] focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:border-[#c62676] dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
                        placeholder="720 123 456"
                      />
                    </div>
                  </div>
                </div>

                {/* Password Section */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333] dark:text-white transition-colors duration-200">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="pr-10 border-[#cccccc] dark:border-gray-600 focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] dark:text-gray-400 hover:text-[#777777] dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-left">
                  <button 
                    onClick={handleForgotPassword}
                    className="text-xs sm:text-sm text-[#333333] dark:text-white font-medium hover:text-[#c62676] transition-colors duration-200"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <Button 
                  onClick={handleSuccessLogin}
                  className="w-full bg-[#c62676] hover:bg-[#c62676]/90 text-white font-medium py-3 rounded-full text-sm sm:text-base transition-all duration-200"
                >
                  Log In
                </Button>

                {/* Safaricom Button */}
                <Button className="w-full bg-[#35a839] hover:bg-[#35a839]/90 text-white font-medium py-3 rounded-full text-sm sm:text-base transition-all duration-200">
                  Continue With Safaricom
                </Button>

                {/* Social Login Icons */}
                <div className="flex justify-center gap-3 pt-4">
                  <img className="w-auto h-8 sm:h-10" src="/images/Frame 4802.png" alt="" />
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-xs sm:text-sm text-[#333333] dark:text-white transition-colors duration-200">
                  {"Don't have an account "}
                  <button 
                    onClick={handleBackToCreate}
                    className="text-[#c62676] underline hover:no-underline font-medium"
                  >
                    Sign-Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}