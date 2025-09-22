"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Eye, EyeOff, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/lib/context/AuthContext"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MdArrowBack } from "react-icons/md"

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

  const handleLoginPage = () => {
    router.push("/login")
  }

  const GoToHome = () =>{
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] flex flex-col transition-colors duration-200">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)]">
        {/* Image Section - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex lg:w-1/2 items-start justify-start  p-8">
          <img className="max-w-full max-h-[90vh] object-contain" src="/images/create.png" alt="" />
        </div>
   
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          {/* Header - Now inside form section */}
          
          
          {/* Form Content */}
          <div className="flex-1 flex-col items-center justify-center p-4 md:p-8 lg:pt-0">
            <div className="flex pt-10 items-center max-w-md w-full justify-between  gap-4">
            <button 
              onClick={() => router.back()}
              className="cursor-pointer flex items-center mr-2 md:mr-4 text-[#2C2C2C] dark:text-[#FFFFFF] hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <MdArrowBack className="!w-8 !h-8"/>
            </button>
            <img onClick={()=>GoToHome()}  src="/logos/vybstreamz.png" alt="" className="cursor-pointer !h-15 !w-50" />
          </div>
          <div className="w-full pt-4 max-w-md space-y-6">
            {/* Title Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333333] dark:text-white mb-2 transition-colors duration-200">Create Account</h1>
              <p className="text-[#999999] dark:text-gray-400 text-sm md:text-base transition-colors duration-200">
                Create your account and dive into non-stop entertainment made for you
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Phone Number Section */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#333333] dark:text-white block transition-colors duration-200">
                  <span className="inline-block sm:inline-block pr-7">Country</span>
                  <span className="inline-block sm:inline-block sm:ml-16">Phone Number*</span>
                </label>
                <div className="flex gap-2">
                  <div className="w-16 sm:w-20">
                    <Input
                      value="+254"
                      readOnly
                      className="text-center h-10 border-[#c62676] focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:border-[#c62676] dark:text-white transition-colors duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="tel"
                      placeholder="720 123 456"
                      className="border-[#c62676] h-10 focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:border-[#c62676] dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#333333] dark:text-white transition-colors duration-200">Email Address (Optional)</label>
                <Input
                  type="email"
                  className="border-[#cccccc] h-10 dark:border-gray-600 focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
                />
              </div>

              {/* Password Section */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#333333] dark:text-white transition-colors duration-200">Password</label>
                <div className="relative">
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="pr-10 h-10 border-[#cccccc] dark:border-gray-600 focus:border-[#c62676] focus:ring-[#c62676] text-sm dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${hasMinLength ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                  >
                    {hasMinLength && <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />}
                  </div>
                  <span className="text-xs sm:text-sm text-[#2c2c2c] dark:text-white transition-colors duration-200">At least 12 characters</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${hasCapitalLetter ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                  >
                    {hasCapitalLetter && <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />}
                  </div>
                  <span className="text-xs sm:text-sm text-[#2c2c2c] dark:text-white transition-colors duration-200">At least 1 Capital Letter</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${hasSpecialChar ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                  >
                    {hasSpecialChar && <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />}
                  </div>
                  <span className="text-xs sm:text-sm text-[#2c2c2c] dark:text-white transition-colors duration-200">At least 1 special character e.g !,@,#,?</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${hasNumber ? "bg-[#009951]" : "bg-gray-300 dark:bg-gray-600"}`}
                  >
                    {hasNumber && <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />}
                  </div>
                  <span className="text-xs sm:text-sm text-[#2c2c2c] dark:text-white transition-colors duration-200">At least 1 number</span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2 pt-2">

                <Checkbox
                  id="terms"
                  className="mt-0.5 border-[#cccccc] dark:border-gray-600 data-[state=checked]:bg-[#c62676] data-[state=checked]:border-[#c62676] w-4 h-4 sm:w-5 sm:h-5 dark:data-[state=checked]:bg-[#c62676] dark:data-[state=checked]:border-[#c62676] transition-colors duration-200"
                />
                <label htmlFor="terms" className="text-xs sm:text-sm text-[#333333] dark:text-white leading-relaxed transition-colors duration-200">
                  I Acknowledge that I have read and understood the{" "}
                  <Link href="/termsconditions" className="text-[#c62676] underline hover:no-underline">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link href="/termsconditions" className="text-[#c62676] underline hover:no-underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Create Account Button */}
              <Button
                className="w-full h-12 bg-[#c62676] hover:bg-[#c62676]/90 text-white font-medium py-3 rounded-full text-sm sm:text-base transition-all duration-200"
                onClick={handleCreateAccount}
              >
                Create Account
              </Button>

              {/* Sign In Link */}
              <div className="text-center md:text-left text-xs sm:text-sm text-[#333333] dark:text-white transition-colors duration-200">
                Already have an account{" "}
                <a href="#" 
                  onClick={handleLoginPage}
                  className="text-[#c62676] underline hover:no-underline">
                  Sign-in
                </a>
              </div>

              {/* Social Login Buttons */}
              <div className="flex md:justify-start justify-center gap-3 pt-4">
                <img className="w-auto h-8 sm:h-10" src="/images/Frame 4802.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 backdrop-blur bg-black/16 dark:bg-black/30 flex items-center justify-center z-50 p-4 transition-colors duration-200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 w-full max-w-sm mx-4 relative transition-colors duration-200">
            {/* Close button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-400 dark:text-gray-300 hover:text-[#2C2C2C] dark:hover:text-white transition-colors duration-200"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
            <div className="text-center space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#c62676] mb-4 sm:mb-6">
                Confirm Your Details
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-left">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[#2C2C2C] dark:text-white mb-1 transition-colors duration-200">Phone Number</p>
                  <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 transition-colors duration-200">+254 {phoneNumber || "720 123 456"}</p>
                </div>
                
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[#2C2C2C] dark:text-white mb-1 transition-colors duration-200">Email Address</p>
                  <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 transition-colors duration-200">{email || "mokua@gmail.com"}</p>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 sm:pt-6">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-[#2C2C2C] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmNext}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-[#c62676] text-white rounded-full hover:bg-[#c62676]/90 transition-colors duration-200 font-medium text-xs sm:text-sm"
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