"use client"

import { useState } from "react"
import { User, Settings, Bell, MessageSquare, HelpCircle, Share, LogOut, Menu, X, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from "@/lib/context/AuthContext"
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { icon: User, label: "My Profile", active: true, link: "/profile" },
  { icon: Settings, label: "Settings", active: false, link: "/profile/settings" },
  { icon: Bell, label: "Notifications", active: false, link: "/profile/notifications" },
  { icon: MessageSquare, label: "Feedback", active: false, link: "/profile/feedback" },
  { icon: HelpCircle, label: "Help & Support", active: false, link: "/profile/help" },
  { icon: Share, label: "Share App", active: false, link: "/profile/share" },
  { icon: PhoneCall, label: "Contacts", active: false, link: "/profile/contacts" },
  { icon: LogOut, label: "Logout", active: false, link: "/logout" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile');
  const router = useRouter()
  const { isLoggedIn, logout } = useAuth();
  const pathname = usePathname();

  const handleLogoutClick = (e:any) => {
    e.preventDefault();
    setShowLogoutModal(true);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    logout();
    router.push('/');
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Mobile Horizontal Tabs */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-[#2C2C2C] border-b border-[#e5e5e5] dark:border-[#333333] z-50">
        {/* Logo section */}
        <div className="h-[60px] flex justify-center items-center border-b border-[#e5e5e5] dark:border-[#333333]">
          <Link href={"/"}>
            <Image 
              src={"/logos/vybstreamz.png"} 
              className="h-[20px] w-[120px] object-contain" 
              alt={"logo"}
              width={120} 
              height={20}
            />
          </Link>
        </div>
        
        {/* Horizontal scrollable tabs */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max px-2 py-2">
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={item.label === "Logout" ? handleLogoutClick : undefined}
                className={`
                  flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg text-center transition-colors cursor-pointer mx-1
                  ${pathname === item.link ? "bg-[#c62676] text-white" : "text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#F2F2F2] dark:hover:bg-[#444444]"}
                  ${item.label === "Logout" ? "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400" : ""}
                `}
              >
                <item.icon className="h-4 w-4 mb-1" />
                <span className="text-xs font-medium leading-tight whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Content Spacer */}
      <div className="lg:hidden h-[120px]"></div>

      {/* Desktop Sidebar */}
      <aside 
        className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-white dark:bg-[#2C2C2C] border-r border-[#e5e5e5] dark:border-[#333333] shadow-xl overflow-y-auto"
        style={{ zIndex: 1000 }}
      >
        {/* Logo section */}
        <div 
          className="h-[100px] flex justify-center items-center border-b border-[#e5e5e5] dark:border-[#333333] bg-white dark:bg-[#2C2C2C] sticky top-0"
          style={{ zIndex: 1001 }}
        >
          <div className="flex items-center">
            <Link href={"/"}>
              <Image 
                src={"/logos/vybstreamz.png"} 
                className="object-contain" 
                alt={"logo"}
                width={200} 
                height={50}
              />
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-6 pb-8">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={item.label === "Logout" ? handleLogoutClick : undefined}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer group
                  ${pathname === item.link ? "bg-[#c62676] text-white shadow-md" : "text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#F2F2F2] dark:hover:bg-[#444444]"}
                  ${item.label === "Logout" ? "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400" : ""}
                `}
              >
                <item.icon className={`h-5 w-5 transition-transform duration-200 ${pathname !== item.link ? 'group-hover:scale-110' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom padding to ensure last item is always visible */}
        <div className="h-8"></div>
      </aside>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white dark:bg-[#2C2C2C] rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                <LogOut className="w-6 h-6 text-pink-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
                You are about to log out!
              </h3>
              
              <p className="text-[#2C2C2C] dark:text-[#FFFFFF] mb-6 text-sm leading-relaxed">
                Are you sure you want to log out from Vybz Streams? You will have to log back in to access your account.
              </p>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleCancelLogout}
                  className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  No, Go back
                </button>
                <button
                  onClick={handleLogout}
                  className="px-8 py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium shadow-md"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}