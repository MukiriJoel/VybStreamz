"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Eye, EyeOff, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/lib/context/AuthContext"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CreateAccountPage() {
  const { login } = useAuth()
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

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

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted on client
  if (!mounted) {
    return null
  }

  const handleLogin = () => {
    login()
    router.push('/profile')
  }

  const handleCreateAccount = () => {
    setShowConfirmModal(true)
  }

  const handleConfirmNext = () => {
    setShowConfirmModal(false)
    router.push('/otp')
  }

  const handleCancel = () => {
    setShowConfirmModal(false)
  }

  const handleLoginPage = () =>{
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] flex flex-col">
      {/* Header */}
      
      {/* Back button and logo */}
      <div className="relative flex items-center justify-between p-6">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center text-[#2C2C2C] dark:text-[#FFFFFF] hover:text-gray-900"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="absolute flex items-center pl-260 pt-50">
          <img src="/images/VybeStreams.png" alt="" />
        </div>
      </div>

    <div className="flex min-h-[calc(100vh-100px)]">
        {/* <div className="flex bg-white dark:bg-[#2C2C2C] rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full"> */}
                <div className="w-1/2 flex items-center justify-center p-8">
                        <img className="max-w-full max-h-full object-contain" src="/images/create.png" alt="" />
                    </div>
          {/* </div> */}
   
      {/* Main Content */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Title Section */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-[#333333] dark:text-white mb-2">Create Account</h1>
            <p className="text-[#999999] text-sm md:text-base">
              Create your account and dive into non-stop entertainment made for you
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
                {/* Phone Number Section */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#333333] dark:text-white">
                        Country <span className="ml-16">Phone Number*</span>
                        </label>
                        <div className="flex gap-2">
                        <div className="w-20">
                            <Input
                            value="+254"
                            readOnly
                            className="text-center border-[#c62676] focus:border-[#c62676] focus:ring-[#c62676]"
                            />
                        </div>
                        <div className="flex-1">
                            <Input
                            type="tel"
                            placeholder="720 123 456"
                            className="border-[#c62676] focus:border-[#c62676] focus:ring-[#c62676]"
                            />
                        </div>
                        </div>
                    </div>

            {/* Email Section */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#333333] dark:text-white">Email Address (Optional)</label>
                <Input
                type="email"
                className="border-[#cccccc] focus:border-[#c62676] focus:ring-[#c62676]"
                />
            </div>

            {/* Password Section */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#333333] dark:text-white">Password</label>
                <div className="relative">
                <Input
                    type="password"
                    className="pr-10 border-[#cccccc] focus:border-[#c62676] focus:ring-[#c62676]"
                />
                </div>
            </div>

            {/* {Password Requirements} */}
            <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${hasMinLength ? "bg-[#009951]" : "bg-gray-300"}`}
                            >
                              {hasMinLength && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-sm text-[#2c2c2c]">At least 8 characters</span>
                          </div>
            
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${hasCapitalLetter ? "bg-[#009951]" : "bg-gray-300"}`}
                            >
                              {hasCapitalLetter && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-sm text-[#2c2c2c]">At least 1 Capital Letter</span>
                          </div>
            
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${hasSpecialChar ? "bg-[#009951]" : "bg-gray-300"}`}
                            >
                              {hasSpecialChar && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-sm text-[#2c2c2c]">At least 1 special character e.g !,@,#,?</span>
                          </div>
            
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${hasNumber ? "bg-[#009951]" : "bg-gray-300"}`}
                            >
                              {hasNumber && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-sm text-[#2c2c2c]">At least 1 number</span>
                          </div>
                        </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-2">
                <Checkbox
                id="terms"
                className="mt-0.5 border-[#cccccc] data-[state=checked]:bg-[#c62676] data-[state=checked]:border-[#c62676]"
                />
                <label htmlFor="terms" className="text-sm text-[#333333] dark:text-white leading-relaxed">
                I Acknowledge that I have read and understood the{" "}
                <a href="#" className="text-[#c62676] underline hover:no-underline">
                    Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#c62676] underline hover:no-underline">
                    Privacy Policy
                </a>
                </label>
            </div>

            {/* Create Account Button */}
            <Button
                className="w-full bg-[#c62676] hover:bg-[#c62676]/90 text-white font-medium py-3 rounded-full text-base"
                onClick={handleCreateAccount} // Navigate to OTP page
            >
                Create Account
            </Button>

            {/* Sign In Link */}
            <div className="text-center text-sm text-[#333333] dark:text-white">
                Already have an account{" "}
                <a href="#" 
                onClick={handleLoginPage}
                className="text-[#c62676] underline hover:no-underline">
                Sign-in
                </a>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-3 pt-4">
                {/* <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-lg border-[#cccccc] hover:bg-[#d9d9d9] bg-[#009951]"
                >
                <div className="w-6 h-6 bg-white dark:bg-[#2C2C2C] rounded-sm"></div>
                </Button>
                <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-lg border-[#cccccc] hover:bg-[#d9d9d9] bg-[#999999]"
                >
                <div className="w-6 h-6 bg-white dark:bg-[#2C2C2C] rounded-sm"></div>
                </Button>
                <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-lg border-[#cccccc] hover:bg-[#d9d9d9] bg-[#999999]"
                >
                <div className="w-6 h-6 bg-white dark:bg-[#2C2C2C] rounded-sm"></div>
                </Button>
                <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-lg border-[#cccccc] hover:bg-[#d9d9d9] bg-[#999999]"
                >
                <div className="w-6 h-6 bg-white dark:bg-[#2C2C2C] rounded-sm"></div>
                </Button> */}
                <img className="" src="/images/Frame 480.png" alt="" />
            </div>
            </div>
                    </div>
                </div>
                </div>

                {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 backdrop-blur bg-black/16 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#2C2C2C] rounded-2xl p-6 w-full max-w-sm mx-4 relative">
            {/* Close button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#2C2C2C]"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-[#c62676] mb-6">
                Confirm Your Details
              </h3>
              
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-sm font-medium text-[#2C2C2C] dark:text-[#FFFFFF] mb-1">Phone Number</p>
                  <p className="text-sm text-gray-900 dark:text-[#FFFFFF]">+254 {phoneNumber || "720 123 456"}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-[#2C2C2C] dark:text-[#FFFFFF] mb-1">Email Address</p>
                  <p className="text-sm text-gray-900 dark:text-[#FFFFFF]">{email || "mokua@gmail.com"}</p>
                </div>
              </div>
              
              <div className="flex gap-3 pt-6">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-[#2C2C2C]0 text-white rounded-full hover:bg-gray-600 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmNext}
                  className="flex-1 px-4 py-3 bg-[#c62676] text-white rounded-full hover:bg-[#c62676]/90 transition-colors font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
