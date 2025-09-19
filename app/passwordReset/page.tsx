"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/context/AuthContext"
import { MdArrowBack } from "react-icons/md"

export default function PasswordResetForm() {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { isLoggedIn, login } = useAuth() // Added login function

  // Password validation checks
  const hasMinLength = newPassword.length >= 8
  const hasCapitalLetter = /[A-Z]/.test(newPassword)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
  const hasNumber = /\d/.test(newPassword)

  const allValidationsPassed = hasMinLength && hasCapitalLetter && hasSpecialChar && hasNumber

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (allValidationsPassed && newPassword === confirmPassword) {
      console.log("Password reset submitted")
    }
  }

  const handleHomeRoute = () =>{
    login()
    router.push("/home")
  }

  const GoToHome = () =>{
    router.push('/')
  }
  

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] flex flex-col">

        {/* Header */}
        

    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)]">
        {/* Image Section - Hidden on mobile, visible on large screens */}
         <div className="hidden lg:flex lg:w-1/2 items-start justify-center p-8">
          <img className="max-w-full max-h-[90vh] object-contain" src="/images/create.png" alt="" />
        </div>
   
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          {/* Header - Now inside form section */}
          <div className="flex pt-10 items-center w-full justify-center  md:px-6 md:pt-6 lg:pt-8 gap-50">
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
          <div className="w-full max-w-md space-y-6">
            {/* Title Section */}
            

            {/* Form */}
                    <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#2c2c2c] dark:text-[#FFFFFF]">Reset Password</h1>
            <p className="text-[#2c2c2c] dark:text-[#CCCCCC] text-sm">Your new password must be different from your previous passwords</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-[#2c2c2c] dark:text-[#FFFFFF] mb-2">
                  New Password
                </label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full h-10 px-4 py-3 border-2 border-[#c62676] rounded-lg focus:outline-none focus:border-[#c62676] bg-white dark:bg-[#2A2A2A] dark:text-[#FFFFFF] dark:placeholder-[#888888]"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2c2c2c] dark:text-[#FFFFFF] mb-2">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-10 px-4 py-3 border-2 border-[#c62676] rounded-lg focus:outline-none focus:border-[#c62676] bg-white dark:bg-[#2A2A2A] dark:text-[#FFFFFF] dark:placeholder-[#888888]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Password Requirements */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${hasMinLength ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  {hasMinLength && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-[#2c2c2c] dark:text-[#CCCCCC]">At least 8 characters</span>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${hasCapitalLetter ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  {hasCapitalLetter && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-[#2c2c2c] dark:text-[#CCCCCC]">At least 1 Capital Letter</span>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${hasSpecialChar ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  {hasSpecialChar && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-[#2c2c2c] dark:text-[#CCCCCC]">At least 1 special character e.g !,@,#,?</span>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${hasNumber ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  {hasNumber && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-[#2c2c2c] dark:text-[#CCCCCC]">At least 1 number</span>
              </div>
            </div>

            <Button
            onClick={handleHomeRoute}
              type="submit"
            //   disabled={!allValidationsPassed || newPassword !== confirmPassword}
              className="w-full h-12 bg-[#c62676] hover:bg-[#c62676]/90 text-white font-semibold py-4 px-6 rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Password
            </Button>
          </form>
        </div>

          </div>
        </div>
      </div>
      </div>
  
    </div>
  )
}