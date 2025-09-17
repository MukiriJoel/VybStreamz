"use client"

import { Search } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// SearchBar Component
const Input = ({ className, ...props }: any) => (
  <input className={className} {...props} />
)

function SearchBar() {
  return (
    <div className="mb-8">
      <div className="relative max-w-2xl">
        <Input
          type="text"
          placeholder="Search for a help topic"
          className="w-full pl-4 pr-12 py-5 text-lg bg-[#ffffff] dark:bg-[#333333] border border-[#d9d9d9] dark:border-gray-600 placeholder:text-[#2C2C2C] dark:placeholder:text-white rounded-full focus:border-[#c62676] focus:ring-[#c62676] focus:outline-none"
        />
        <Button
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-[#E5E5E5] dark:bg-[#333333] text-[#696969] dark:text-white p-2 rounded-full"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

// Breadcrumb Component
interface BreadcrumbItem {
  label: string
  onClick?: () => void
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  onNavigate: (level: string) => void
}

function Breadcrumb({ items, className, onNavigate }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-1 text-sm ${className || ''}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-[#49454f] dark:text-gray-400 mx-1" />}
          {item.isActive ? (
            <span className="text-[#333333] dark:text-white font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="text-[#49454f] dark:text-gray-400 hover:text-[#c62676] dark:hover:text-[#c62676] transition-colors duration-200 hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit"
            >
              {item.label}
            </button>
          )}
        </div>
      ))}
    </nav>
  )
}

interface ResetPasswordPageProps {
  onNavigate: (level: string) => void
}

export default function ResetPasswordPage({ onNavigate }: ResetPasswordPageProps) {
  const breadcrumbItems = [
    { 
      label: "Help Center", 
      onClick: () => onNavigate("main"),
      isActive: false 
    },
    { 
      label: "Account Management", 
      onClick: () => onNavigate("Account Management"),
      isActive: false 
    },
    { 
      label: "How to reset your password", 
      isActive: true 
    },
  ]

  return (
    <main className="w-[98vw] lg:w-[calc(95vw-256px)] px-6 pt-8 md:p-8 mx-0 md:mx-0">
          <div className="max-w-6xl mx-auto pt-8">
            {/* Search Bar - Always visible */}
            <div className="mb-8">
              <div className="relative max-w-2xl">
                <Input
                  type="text"
                  placeholder="Search for a help topic"
                  className="w-full pl-4 pr-12 py-5 text-lg bg-[#ffffff] dark:bg-[#333333] border border-[#d9d9d9] dark:border-gray-600 placeholder:text-[#2C2C2C] dark:placeholder:text-white rounded-full focus:border-[#c62676] focus:ring-[#c62676] focus:outline-none"
                />
                <Button
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-[#E5E5E5] dark:bg-[#333333] text-[#696969] dark:text-white p-2 rounded-full"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
    
            {/* Help Center Title and Breadcrumb */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-6">Help Center</h1>
                <Breadcrumb items={breadcrumbItems} className="mb-4" onNavigate={onNavigate} />
        </div>

        <div className="bg-[#e5e5e5] dark:bg-[#2C2C2C] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#2c2c2c] dark:text-white mb-6">How to reset your password</h2>

          <div className="prose prose-gray max-w-none">
            <p className="text-[#333333] dark:text-gray-300 leading-relaxed mb-6">
              To reset your password on the platform, begin by visiting the login page. Locate and click on
              the &quot;Forgot Password&quot; link, which will direct you to a new page. You will then be asked to input your
              registered email address associated with your account. After you submit your email, check your inbox for a
              message containing a password reset link. Click on this link to be taken to a secure page where you can
              create a new password. Make sure to follow all the instructions provided in the email carefully to ensure
              a successful reset.
            </p>

            <p className="text-[#333333] dark:text-gray-300 leading-relaxed">
              Once you&quot;ve successfully reset your password, return to the login page to access your account. If you wish
              to change your password at any time, navigate to your account settings after logging in. Look for the
              &quot;Change Password&quot; section. Here, you will need to enter your current password, followed by your new
              password, and then confirm the new password by entering it again. Don&quot;t forget to save your changes to
              ensure that your password is updated.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}