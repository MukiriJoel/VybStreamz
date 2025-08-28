"use client"

import { useState } from "react"
import { User, Settings, Bell, MessageSquare, HelpCircle, LogOut, Menu, X } from "lucide-react"
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
  { icon: HelpCircle, label: "Help", active: false, link: "/profile/help" },
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

  // const handleNavigation = (label:any) =>{
  //   const Router=useRouter();
  //   Router.push(`/profile/${label}`);
  // }

  return (
    <>
      {/* Mobile Horizontal Tabs */}
      <div className="lg:hidden mt-10 fixed top-0 left-0 right-0 bg-white dark:bg-[#2C2C2C] dark:bg-[#2C2C2C] border-b border-[#e5e5e5] dark:border-[#333333] z-40">
        {/* Logo section */}
        <div className="h-[60px] flex justify-center items-center border-b border-[#e5e5e5] dark:border-[#333333]">
          <Link href={"/"}>
            <Image 
              src={"/logos/VybeStreams.png"} 
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
                  ${pathname === item.link ? "bg-[#c62676] text-white" : "text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#F2F2F2] dark:bg-[#2C2C2C]"}
                  ${item.label === "Logout" ? "hover:bg-red-50 hover:text-red-600" : ""}
                `}
              >
                <item.icon className="h-4 w-4 mb-1" />
                <span className="text-xs font-medium leading-tight">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Content Spacer */}
      <div className="lg:hidden h-[120px]"></div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 h-screen border-r border-[#e5e5e5] dark:border-[#333333] dark:border-[#333333] w-64 bg-white dark:bg-[#2C2C2C] dark:bg-[#2C2C2C] shadow-lg z-40">
        <div className="h-[100px] flex justify-center items-center">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image 
                src={"/logos/VybeStreams.png"} 
                className="h-[26px] w-[157px] object-contain" 
                alt={"logo"}
                width={200} 
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={item.label === "Logout" ? handleLogoutClick : undefined}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer
                  ${pathname === item.link ? "bg-[#c62676] text-white" : "text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#F2F2F2] dark:bg-[#2C2C2C]"}
                  ${item.label === "Logout" ? "hover:bg-red-50 hover:text-red-600" : ""}
                `}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 backdrop-blur bg-black/16 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 w-100 mx-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">
                You are about to log out !
              </h3>
              <p className="text-[#2C2C2C] dark:text-[#FFFFFF] mb-6">
                Are you sure you want to log out from Vybz Streams? You will have to log back in to access your account
              </p>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleCancelLogout}
                  className="px-6 py-2 bg-gray-600 dark:bg-white text-white dark:text-[#2C2C2C] rounded-lg hover:bg-gray-700 transition-colors"
                >
                  No, Go back
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
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