"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/context/AuthContext"

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
  

  return (
    <div className="min-h-screen bg-[#f2f2f2] px-4 py-8">
      <div className="max-w-screen mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <button className="p-2">
            <ArrowLeft className="w-6 h-6 text-[#2c2c2c]" />
          </button>
          <div className="absolute flex items-center pl-260 pt-50">
          <img src="/images/VybeStreams.png" alt="" />
        </div>
        </div>

    <div className="flex items-center justify-center min-h-[80vh] gap-0">
        <div className="w-1/2  p-8 flex flex-col justify-center">
                        <img className="object-contain h-[100vh] pl-40" src="/images/create.png" alt="" />
                    </div>

        {/* Form */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#2c2c2c]">Reset Password</h1>
            <p className="text-[#2c2c2c] text-sm">Your new password must be different from your previous passwords</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-[#2c2c2c] mb-2">
                  New Password
                </label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#c62676] rounded-lg focus:outline-none focus:border-[#c62676] bg-white"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2c2c2c] mb-2">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#c62676] rounded-lg focus:outline-none focus:border-[#c62676] bg-white"
                  placeholder=""
                />
              </div>
            </div>

            {/* Password Requirements */}
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

            <Button
            onClick={handleHomeRoute}
              type="submit"
            //   disabled={!allValidationsPassed || newPassword !== confirmPassword}
              className="w-full bg-[#c62676] hover:bg-[#c62676]/90 text-white font-semibold py-4 px-6 rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Password
            </Button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
