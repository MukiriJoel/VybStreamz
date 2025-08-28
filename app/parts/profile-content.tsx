"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { IconButton } from "@mui/material"
import { MdArrowForward, MdArrowLeft, MdArrowRight, MdOutlineChevronRight, MdOutlineEdit, MdAdd, MdClose } from "react-icons/md"
import VideoSlider from "@/components/VideoSlider"
import MusicSlider from "@/components/MusicSlider"
import { useAuth } from "@/lib/context/AuthContext"
import { useRouter } from "next/navigation"

const subscriptions = [
  {
    id: 1,
    name: "Baze Daily Access only One Off",
    description: "Ends on 26 July 2025",
    icon: "/logos/bazeLg.png",
    amount: "KES 200",
    expiryDate: "02/07/2026",
    status: "Active",
    showAction: false,
  },
  {
    id: 2,
    name: "Spotify Premium",
    description: "Renews 3 July 2025",
    icon: "/logos/spotify.png",
    amount: "KES 200",
    expiryDate: "02/07/2026",
    status: "Active",
    showAction: true,
  },
  {
    id: 3,
    name: "Showmax Entertainment",
    description: "Renews 3 July 2025",
    icon: "/logos/showmax.png",
    amount: "KES 200",
    expiryDate: "02/07/2026",
    status: "Active",
    showAction: true,
  },
]

export default function ProfileContent() {
  const [activeTab, setActiveTab] = useState("Subscriptions")
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter()

  const tabs = ["Account", "My Favorites", "Subscriptions"]

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleFileUpload = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Handle file upload logic here
      closePopup();
    }
  };

  const handleDragOver = (e:any) => {
    e.preventDefault();
  };

  const handleDrop = (e:any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      console.log('File dropped:', files[0].name);
      // Handle dropped file here
      closePopup();
    }
  };

  const handleReturn = () =>{
    setShowUnsubscribeModal(false);
  }

  const handleAccept = () =>{
    setShowUnsubscribeModal(false);
    logout();
    router.push('/');
  }

  const onUnsubscribeClick = () =>{
    setShowUnsubscribeModal(true)
  }

  return (
    <div className="py-4 ">
      {/* Profile Header */}
      <div className="bg-white dark:bg-[#2C2C2C] dark:bg-[#2C2C2C] flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 px-8 py-6 ">
        <div onClick={openPopup} className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
          <img src="/logos/user-profile-illustration.png" alt="Profile" className="w-full h-full object-cover" />
          <div className="imgOverlay absolute w-40 h-40 flex justify-center bg-[#0D0D0D]/30 rounded-full inset-y-[191px] sm:inset-y-[200px] lg:inset-y-[129px] ">
              <IconButton>
                <MdOutlineEdit className="text-white w-15 h-15"/>
                </IconButton>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-[#2C2C2C] dark:text-[#FFFFFF] mb-2">My Profile</h1>
          <p className="text-[#2C2C2C] dark:text-[#FFFFFF] text-base !font-normal">View and edit your profile details below</p>
          {/* Tabs */}
      <div className="bg-white dark:bg-[#2C2C2C] mb-8 pt-8">
        <nav className="flex space-x-8 overflow-x-auto ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors
                ${
                  activeTab === tab
                    ? "border-[#c62676] text-[#c62676]"
                    : "border-transparent text-[#000000 ] hover:text-[#2C2C2C] dark:text-[#FFFFFF] hover:border-[#cccccc]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
        </div>
      </div>


           {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur effect */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closePopup}
          />
          
          {/* Popup Content */}
          <div className="relative bg-white dark:bg-[#2C2C2C] rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8">
            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MdClose className="w-6 h-6 text-[#2C2C2C]" />
            </button>

            {/* Upload Area */}
            <div 
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-pink-400 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {/* Upload Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-10 h-12 bg-gray-400 rounded-sm"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                    <MdAdd className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Upload Text */}
              <h3 className="text-lg font-medium text-pink-500 mb-2">
                Drag and drop your image here
              </h3>
              <p className="text-[#2C2C2C] mb-6">
                Or browse files in your computer
              </p>

              {/* Upload Button */}
              <label className="block">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <span className="inline-block w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg cursor-pointer transition-colors">
                  Upload
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      

      {/* Subscriptions Content */}
      {activeTab === "Subscriptions" && (
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-6">All Subscription Plans</h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-center py-4 px-4 font-normal text-[#2C2C2C] dark:text-[#FFFFFF]"></th>
                  <th className="text-center py-4 px-4 font-normal text-[#2C2C2C] dark:text-[#FFFFFF]">Amount</th>
                  <th className="text-center py-4 px-4 font-normal text-[#2C2C2C] dark:text-[#FFFFFF]">Expiry Date</th>
                  <th className="text-center py-4 px-4 font-normal text-[#2C2C2C] dark:text-[#FFFFFF]">Status</th>
                  <th className="text-center py-4 px-4 font-normal text-[#2C2C2C] dark:text-[#FFFFFF]">Action</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((subscription) => (
                  <tr key={subscription.id} className="border-b border-[#f2f2f2]">
                    <td className="py-6 px-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#999999] p-0">
                          <img
                            src={subscription.icon || "/placeholder.svg"}
                            alt={subscription.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#2C2C2C] dark:text-[#FFFFFF]">{subscription.name}</h3>
                          <p className="text-sm font-semibold text-[#2C2C2C] dark:text-[#FFFFFF]">{subscription.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-[#2C2C2C] dark:text-[#FFFFFF] font-normal">{subscription.amount}</td>
                    <td className="py-6 px-4 text-[#2C2C2C] dark:text-[#FFFFFF]">{subscription.expiryDate}</td>
                    <td className="py-6 px-4">
                      <span className="inline-flex items-center">
                        <span className="w-2 h-2 bg-[#06a54c] rounded-full mr-2"></span>
                        <span className="text-[#06a54c] font-normal">{subscription.status}</span>
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      {subscription.showAction && (
                        <Button
                          variant="outline"
                          className="cursor-pointer border-[#2C2C2C] dark:border-white text-[#2C2C2C] dark:text-[#FFFFFF] text-base hover:bg-[#F2F2F2] dark:bg-[#141414] bg-transparent rounded-sm"
                          onClick={()=>onUnsubscribeClick()}
                        >
                          Unsubscribe
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

             {/* Logout Confirmation Modal */}
              {showUnsubscribeModal && (
                <div className="fixed inset-0 backdrop-blur bg-black/16 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 w-100 mx-4">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-pink-600 mb-4">
                        Unsubscribe from Plan
                      </h3>
                      <p className="text-[#2C2C2C] dark:text-[#FFFFFF]mb-6">
                        Are you sure you want to unsubscribe from this plan. You will lose access to premium content if you unsubscribe
                      </p>
                      
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={()=>handleReturn()}
                          className="cursor-pointer px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          No, Go back
                        </button>
                        <button
                          onClick={()=>handleAccept()}
                          className="cursor-pointer px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                        >
                          Unsubscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 shadow-sm border border-[#e5e5e5] dark:border-[#333333]">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={subscription.icon || "/placeholder.svg"}
                      alt={subscription.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#2C2C2C] dark:text-[#FFFFFF] mb-1">{subscription.name}</h3>
                    <p className="text-sm text-[#696969]">{subscription.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#696969] mb-1">Amount</p>
                    <p className="font-medium text-[#2C2C2C] dark:text-[#FFFFFF]">{subscription.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696969] mb-1">Expiry Date</p>
                    <p className="text-[#2C2C2C] dark:text-[#FFFFFF]">{subscription.expiryDate}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#06a54c] rounded-full mr-2"></span>
                    <span className="text-[#06a54c] font-medium">{subscription.status}</span>
                  </div>
                  {subscription.showAction && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer border-[#cccccc] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#F2F2F2] dark:bg-[#141414] bg-transparent"
                      onClick={()=>onUnsubscribeClick()}
                    >
                      Unsubscribe
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Placeholder content for other tabs */}
      {activeTab === "Account" && (
        <div className="p-8">
            <div className="max-w-md mx-auto rounded-lg p-6">
                <form className="space-y-6">
                  
                    <div>
                        <label className="block text-base font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-2">
                            Full Names
                        </label>
                        <input 
                            type="text" 
                            placeholder="John Kungu"
                            className="w-full px-4 py-3 border text-base border-gray-200 dark:border-[#2C2C2C]  rounded-lg bg-gray-50 dark:bg-[#2C2C2C] text-[#4D4D4D] dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    
                    <div>
                        <label className="block text-base font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-2">
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            placeholder="john.doe@example.com"
                            className="w-full px-4 py-3 border text-base border-gray-200 dark:border-[#2C2C2C]  rounded-lg bg-gray-50 dark:bg-[#2C2C2C] text-[#4D4D4D] dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                
                    <div>
                        <label className="block text-sm font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-2">
                            Phone Number
                        </label>
                        <input 
                            type="tel" 
                            placeholder="0720 123 456"
                            className="w-full px-4 py-3 text-base border border-gray-200 dark:border-[#2C2C2C]  rounded-lg bg-gray-50 dark:bg-[#2C2C2C] text-[#4D4D4D] dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                    </div>

                    
                    <div>
                        <div className="flex items-center justify-between py-4  rounded-lg">
                            <div>
                                <label className="text-base font-bold text-[#2C2C2C] dark:text-[#FFFFFF]">Password</label>
                                <div className="text-sm text-[#2C2C2C] dark:text-[#FFFFFF] mt-1">Change Password</div>
                            </div>
                            <svg className="w-5 h-5 text-[#2C2C2C] dark:text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    
                    <button 
                        type="submit"
                        className="w-full bg-[#C62676] hover:bg-pink-700 cursor-pointer text-white font-medium py-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        Update Details
                    </button>
                </form>
            </div>
        </div>
      )}

      {activeTab === "My Favorites" && (
        <div className="p-8 w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center justify-start">
               <h3 className="text-2xl font-bold text-black dark:text-white">
                  Video
                </h3>
                <MdOutlineChevronRight className="text-[#C62676] h-6 w-6" />
              </div>
          
              <div className="flex items-center justify-end gap-1">
                  <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium bg-white dark:bg-[#2C2C2C] !p-0"
                  >
                    <MdArrowLeft className="!w-[38px] !h-[38px]" />  
                  </Button>
                  <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium bg-white dark:bg-[#2C2C2C] !p-0"
                  >
                      <MdArrowRight className="!w-[38px] !h-[38px]"/>
                  </Button>
              </div>
                
            </div>
         
            <VideoSlider/>
           

            {/* music */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center justify-start">
               <h3 className="text-2xl font-bold text-black dark:text-white">
                  Music
                </h3>
                <MdOutlineChevronRight className="text-[#C62676] h-6 w-6" />
              </div>
          
              <div className="flex items-center justify-end gap-1">
                  <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium bg-white dark:bg-[#2C2C2C] !p-0"
                  >
                    <MdArrowLeft className="!w-[38px] !h-[38px]" />  
                  </Button>
                  <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium bg-white dark:bg-[#2C2C2C] !p-0"
                  >
                      <MdArrowRight className="!w-[38px] !h-[38px]"/>
                  </Button>
              </div>
                
            </div>
            <MusicSlider/>

        </div>
      )}
    </div>
  )
}
