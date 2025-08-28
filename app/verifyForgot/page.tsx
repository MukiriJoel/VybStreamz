"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [usePhone, setUsePhone] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Sending verification to:", email)
  }
  const handleResetPassword = () =>{
    router.push("/passwordReset")
  }

  return (
    <div className="min-h-screen " style={{ backgroundColor: "#f2f2f2" }}>
      <div className="min-h-screen mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <button className="p-2">
            <ArrowLeft className="w-6 h-6" style={{ color: "#2c2c2c" }} />
          </button>

          {/* VybeStreams Logo */}
          <div className="absolute flex items-center pl-260 pt-50">
              <img src="/images/VybeStreams.png" alt="" />
        </div>
        </div>


    <div className="flex items-center justify-center min-h-[80vh] gap-0">
        <div className="w-1/2  pl-40 p-8 flex flex-col justify-center">
                        <img className="object-contain h-[100vh] pl-40" src="/images/create.png" alt="" />
                    </div>
        {/* Main Content */}
        <div className="max-w-sm mx-auto ml-20">

                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-4" style={{ color: "#2c2c2c" }}>
                    Forgot Password
                  </h1>
                  <p className="text-base leading-relaxed" style={{ color: "#999999" }}>
                    Please enter your phone number or email address to receive a verification code
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#2c2c2c" }}>
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-0 text-base"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #cccccc",
                      }}
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setUsePhone(!usePhone)}
                    className="text-sm underline"
                    style={{ color: "#999999" }}
                  >
                    Use Phone Number Instead
                  </button>

                  <Button
                  onClick={handleResetPassword}
                    type="submit"
                    className="w-full py-4 text-base font-medium rounded-full border-0 hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: "#c62676",
                      color: "#ffffff",
                    }}
                  >
                    Send
                  </Button>
                </form>
        </div>
        </div>
      </div>
    </div>
  )
}
