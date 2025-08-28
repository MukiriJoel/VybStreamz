"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

const OtpInput = () =>{
const [code, setCode] = useState(["", "", "", ""])
  const router = useRouter()

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        const prevInput = document.getElementById(`code-${index - 1}`)
        prevInput?.focus()
      }
    }

    

  return (
        <div className="flex justify-center gap-4 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-16 text-center text-2xl font-semibold bg-[#ffffff] dark:bg-[#2C2C2C] border-2 border-[#999999] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c62676] focus:border-transparent"
              maxLength={1}
            />
          ))}
        </div>
  )

}
export default OtpInput;