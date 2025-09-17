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

export default function TermsConditionsPage() {
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

  

  const handleLoginPage = () => {
    router.push("/login")
  }

  const GoToHome = () =>{
    router.push('/')
  }

  const handleDone = () =>{
    router.push('/createAccount')
  }

  const handleCancel = () =>{
    router.push('/createAccount')
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
          <div className="w-full max-w-md space-y-6">
            {/* Title Section */}
            

            {/* Form */}
            <div className="bg-transparent rounded-lg p-8 shadow-sm flex flex-col max-h-[70vh]">
            <div className="flex-1 overflow-y-auto space-y-6 pr-4 bg-transparent no-scrollbar">
              <h1 className="text-2xl font-semibold dark:text-white text-[#333333] mb-6">Terms and conditions</h1>


              <p className="text-[#333333] dark:text-white text-sm leading-relaxed">
                Please read these terms and conditions (&quot;terms and conditions&quot;, &quot;terms&quot;) carefully before using The Vyb

                Streamz website
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="font-semibold text-[#333333] mb-2 dark:text-white">Conditions of use</h2>
                  <p className="text-[#333333] dark:text-white text-sm leading-relaxed">
                    By using this website, you certify that you have read and reviewed this Agreement and that you agree
                    to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are
                    advised to stop using the website accordingly. company name only grants use and access of this
                    website, its products, and its services to those who have accepted its terms.
                  </p>
                </div>

                <div>

                  
=========
                  <h2 className="font-semibold text-[#333333] mb-2 dark:text-white">Privacy policy</h2>
                  <p className="text-[#333333] dark:text-white text-sm leading-relaxed">
                    Before you continue using our website, we advise you to read our privacy policy [link to privacy
                    policy] regarding our user data collection. It will help you better understand our practices.

                  </p>
                </div>

                <div>

=========
                  <h2 className="font-semibold text-[#333333] mb-2 dark:text-white">Age restriction</h2>
                  <p className="text-[#333333] text-sm leading-relaxed dark:text-white">
                    You must be at least 18 (eighteen) years of age before you can use this website. By using this

                    website, you warrant that you are at least 18 years of age and you may legally adhere to this
                    Agreement. company name assumes no responsibility for liabilities related to age
                    misrepresentation.
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold text-[#333333] mb-2 dark:text-white">Intellectual property</h2>
                  <p className="text-[#333333] text-sm leading-relaxed dark:text-white">
                    You agree that all materials, products, and services provided on this website are the property of
                    company name, its affiliates, directors, officers, employees, agents, suppliers, or licensors
                    including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You
                    also agree that you will not reproduce or redistribute the company name&apos;s intellectual property in
                    any way, including electronic, digital, or new trademark registrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="flex gap-4 mt-12 mb-8">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="flex-1 bg-[#2c2c2c] text-[#ffffff] border-[#2c2c2c] hover:bg-[#1a1a1a] rounded-full py-6"
          >
            Cancel
          </Button>
          <Button
          onClick={handleDone}
          className="flex-1 bg-[#c62676] text-[#ffffff] hover:bg-[#a91e63] rounded-full py-6">Done</Button>
        </div>

          </div>
        </div>
      </div>
      </div>

      
    </div>
  )
}