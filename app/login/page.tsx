"use client"

import { useState } from "react"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

const africanCountries = [
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  { code: "+244", country: "Angola", flag: "🇦🇴" },
  { code: "+229", country: "Benin", flag: "🇧🇯" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+226", country: "Burkina Faso", flag: "🇧🇫" },
  { code: "+257", country: "Burundi", flag: "🇧🇮" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+238", country: "Cape Verde", flag: "🇨🇻" },
  { code: "+236", country: "Central African Republic", flag: "🇨🇫" },
  { code: "+235", country: "Chad", flag: "🇹🇩" },
  { code: "+269", country: "Comoros", flag: "🇰🇲" },
  { code: "+243", country: "Congo (DRC)", flag: "🇨🇩" },
  { code: "+242", country: "Congo (Republic)", flag: "🇨🇬" },
  { code: "+225", country: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "+253", country: "Djibouti", flag: "🇩🇯" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+240", country: "Equatorial Guinea", flag: "🇬🇶" },
  { code: "+291", country: "Eritrea", flag: "🇪🇷" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+241", country: "Gabon", flag: "🇬🇦" },
  { code: "+220", country: "Gambia", flag: "🇬🇲" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+224", country: "Guinea", flag: "🇬🇳" },
  { code: "+245", country: "Guinea-Bissau", flag: "🇬🇼" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+266", country: "Lesotho", flag: "🇱🇸" },
  { code: "+231", country: "Liberia", flag: "🇱🇷" },
  { code: "+218", country: "Libya", flag: "🇱🇾" },
  { code: "+261", country: "Madagascar", flag: "🇲🇬" },
  { code: "+265", country: "Malawi", flag: "🇲🇼" },
  { code: "+223", country: "Mali", flag: "🇲🇱" },
  { code: "+222", country: "Mauritania", flag: "🇲🇷" },
  { code: "+230", country: "Mauritius", flag: "🇲🇺" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+264", country: "Namibia", flag: "🇳🇦" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+239", country: "São Tomé and Príncipe", flag: "🇸🇹" },
  { code: "+221", country: "Senegal", flag: "🇸🇳" },
  { code: "+248", country: "Seychelles", flag: "🇸🇨" },
  { code: "+232", country: "Sierra Leone", flag: "🇸🇱" },
  { code: "+252", country: "Somalia", flag: "🇸🇴" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+211", country: "South Sudan", flag: "🇸🇸" },
  { code: "+249", country: "Sudan", flag: "🇸🇩" },
  { code: "+268", country: "Eswatini", flag: "🇸🇿" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+228", country: "Togo", flag: "🇹🇬" },
  { code: "+216", country: "Tunisia", flag: "🇹🇳" },
  { code: "+256", country: "Uganda", flag: "🇺🇬" },
  { code: "+260", country: "Zambia", flag: "🇿🇲" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
]

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("720 123 456")
  const [selectedCountryCode, setSelectedCountryCode] = useState("+254")
  const router = useRouter()

  const handleBackToCreate = () =>{
    router.push("/createAccount")
  }

  const handleSuccessLogin = () =>{
    router.push("/preference")
  }

  const handleForgotPassword = () =>{
    router.push("/verifyForgot")
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <ArrowLeft onClick={handleBackToCreate}  className="w-6 h-6 text-[#2c2c2c]" />
        <div className="absolute flex items-center pl-262 pt-40">
          <img src="/images/VybeStreams.png" alt="VybeStreams" />
        </div>
      </div>

    <div className="flex items-center justify-center min-h-[80vh] gap-0">
      <div className="w-1/2 flex items-center justify-center p-8 pr-25">
                        <img className="object-contain h-[100vh] pl-40" src="/images/create.png" alt="" />
                    </div>
      {/* Welcome Section */}
      

      {/* Form */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-[#2c2c2c] mb-3">Welcome Back</h1>
        <p className="text-[#999999] text-base leading-relaxed">
          Log into your account and dive into non-stop entertainment made for you
        </p>
        {/* Phone Number Section */}
        <div>
          <div className="flex gap-9 mb-2">
            <label className="text-[#2c2c2c] font-medium pr-28">Country</label>
            <label className="text-[#2c2c2c] font-medium">
              Phone Number<span className="text-[#c62676]">*</span>
            </label>
          </div>
          <div className="flex gap-2">
            <div className="w-10 pr-45">
              <Select value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                <SelectTrigger className="bg-[#ffffff] border-[#d9d9d9] text-[#2c2c2c] font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#ffffff] border-[#d9d9d9] max-h-60">
                  {africanCountries.map((country) => (
                    <SelectItem
                      key={country.code}
                      value={country.code}
                      className="text-[#2c2c2c] hover:bg-[#f2f2f2] focus:bg-[#f2f2f2]"
                    >
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                        <span className="text-sm text-[#999999]">{country.country}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-[#ffffff] border-[#d9d9d9] text-[#2c2c2c]"
                placeholder="720 123 456"
              />
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div>
          <label className="block text-[#2c2c2c] font-medium mb-2">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              className="bg-[#ffffff] border-[#d9d9d9] pr-12 text-[#2c2c2c]"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-left">
          <button 
          onClick={handleForgotPassword}
          className="text-[#2c2c2c] font-medium hover:text-[#c62676] transition-colors">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <Button 
        onClick={handleSuccessLogin}
        className="w-full bg-[#c62676] hover:bg-[#c62676]/90 text-white font-semibold py-6 rounded-full text-lg">
          Log In
        </Button>

        {/* Safaricom Button */}
        <Button className="w-full bg-[#35a839] hover:bg-[#35a839]/90 text-white font-semibold py-6 rounded-full text-lg">
          Continue With Safaricom
        </Button>

        {/* Social Login Icons */}
        <div className="flex justify-center gap-4 mt-8">
          {/* <button className="w-12 h-12 bg-[#999999] rounded-lg flex items-center justify-center hover:bg-[#999999]/80 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-[#999999] rounded-lg flex items-center justify-center hover:bg-[#999999]/80 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.81.87.78 0 2.26-1.07 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-[#999999] rounded-lg flex items-center justify-center hover:bg-[#999999]/80 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button> */}
          <img className="" src="/images/Frame 480.png" alt="" />
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <span className="text-[#2c2c2c]">{"Don't have an account "}</span>
          <button 
          onClick={handleBackToCreate}
          className="text-[#c62676] font-semibold hover:underline">Sign-Up</button>
        </div>
      </div>
      </div>
    </div>
  )
}
