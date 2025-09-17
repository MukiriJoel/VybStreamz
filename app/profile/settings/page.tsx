// "use client"

// import { useState } from "react"
// import { ChevronRight, Search, ShoppingCart, Bell, User } from "lucide-react"
// import { useTheme, getThemeDisplayName } from "@/lib/context/ThemeContext";

// // Toggle Switch Component
// function ToggleSwitch({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
//   return (
//     <button
//       onClick={onChange}
//       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#c62676] focus:ring-offset-2 ${
//         enabled ? 'bg-[#c62676]' : 'bg-gray-300'
//       }`}
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#2C2C2C] transition-transform ${
//           enabled ? 'translate-x-6' : 'translate-x-1'
//         }`}
//       />
//     </button>
//   )
// }

// type SettingOption = "appTheme" | "notifications" | "autoplay" | "accountDeletion"

// export default function SettingsPage() {
//   const [selectedOption, setSelectedOption] = useState<SettingOption>("appTheme")
//   const { theme, setTheme } = useTheme()

//   // State for all notification settings
//   const [notifications, setNotifications] = useState({
//     email: {
//       recommendedContent: true,
//       newReleases: false,
//       paymentIssues: false,
//     },
//     sms: {
//       recommendedContent: true,
//       newReleases: true,
//       paymentIssues: true,
//     },
//     app: {
//       recommendedContent: false,
//       newReleases: true,
//       paymentIssues: true,
//     },
//   })

//   // Function to toggle a specific notification setting
//   const toggleNotification = (category: keyof typeof notifications, setting: string) => {
//     setNotifications(prev => ({
//       ...prev,
//       [category]: {
//         ...(prev as any)[category],
//         [setting]: !(prev as any)[category][setting]
//       }
//     }))
//   }

//   const renderRightPanel = () => {
//     switch (selectedOption) {
//       case "appTheme":
//         return (
//           <div className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">App Theme</h2>
//             <div className="space-y-3">
//               {(['light', 'dark', 'system'] as const).map((themeOption) => (
//                 <button
//                   key={themeOption}
//                   onClick={() => setTheme(themeOption)}
//                   className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-colors ${
//                     theme === themeOption
//                       ? "bg-[#c62676] text-white"
//                       : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//                   }`}
//                 >
//                   {getThemeDisplayName(themeOption)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )
//       case "notifications":
//         return (
//           <div className="flex">
//             {/* Notifications Panel */}
//             <div className="w-80 bg-white dark:bg-[#2C2C2C] border-l border-[#e5e5e5] dark:border-[#333333] dark:border-gray-700 p-8">
//               <h2 className="text-xl font-bold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-8">Notifications</h2>

//               <div className="space-y-8">
//                 {/* Email Notifications */}
//                 <div>
//                   <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-4">Email</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Recommended Content</span>
//                       <ToggleSwitch 
//                         enabled={notifications.email.recommendedContent}
//                         onChange={() => toggleNotification('email', 'recommendedContent')}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">New Releases</span>
//                       <ToggleSwitch 
//                         enabled={notifications.email.newReleases}
//                         onChange={() => toggleNotification('email', 'newReleases')}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Payment Issues</span>
//                       <ToggleSwitch 
//                         enabled={notifications.email.paymentIssues}
//                         onChange={() => toggleNotification('email', 'paymentIssues')}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* SMS Notifications */}
//                 <div>
//                   <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-4">SMS</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Recommended Content</span>
//                       <ToggleSwitch 
//                         enabled={notifications.sms.recommendedContent}
//                         onChange={() => toggleNotification('sms', 'recommendedContent')}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">New Releases</span>
//                       <ToggleSwitch 
//                         enabled={notifications.sms.newReleases}
//                         onChange={() => toggleNotification('sms', 'newReleases')}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Payment Issues</span>
//                       <ToggleSwitch 
//                         enabled={notifications.sms.paymentIssues}
//                         onChange={() => toggleNotification('sms', 'paymentIssues')}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* App Notifications */}
//                 <div>
//                   <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-4">App</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Recommended Content</span>
//                       <ToggleSwitch 
//                         enabled={notifications.app.recommendedContent}
//                         onChange={() => toggleNotification('app', 'recommendedContent')}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">New Releases</span>
//                       <ToggleSwitch 
//                         enabled={notifications.app.newReleases}
//                         onChange={() => toggleNotification('app', 'newReleases')}
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Payment Issues</span>
//                       <ToggleSwitch 
//                         enabled={notifications.app.paymentIssues}
//                         onChange={() => toggleNotification('app', 'paymentIssues')}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       case "autoplay":
//         return (
//           <div className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">Autoplay</h2>
//             <div className="space-y-3">
//               <button className="w-full text-left px-4 py-3 rounded-lg bg-[#c62676] text-white">Enabled</button>
//               <button className="w-full text-left px-4 py-3 rounded-lg bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600">
//                 Disabled
//               </button>
//             </div>
//           </div>
//         )
//       case "accountDeletion":
//         return (
//           <div className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white capitalize">delete account?</h2>
//             <div className="space-y-4">
//               <p className="text-[#2C2C2C]  dark:text-white text-sm mb-0">
//                    You will permanently lose your:
//               </p>
             
//                 <ul className="pl-3 ml-3 mt-0 list-disc text-[#2C2C2C]  dark:text-white text-sm">
//                   <li>Profile</li>
//                   <li>Subscription Information</li>
//                   <li>Settings</li>
//                 </ul>
              
//               <div className="flex gap-4 justify-center w-full">
//                 <button
                 
//                   className="cursor-pointer px-6 py-3 w-full bg-[#333333] dark:bg-[#333333]  text-white dark:text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
//                 >
//                   No, Keep My Account
//                 </button>
//                 <button
               
//                   className="cursor-pointer px-6 py-3 w-full bg-[#c62676] text-white rounded-lg hover:bg-pink-700 transition-colors"
//                 >
//                   Delete Account
//                 </button>
//               </div>
//             </div>
//           </div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen w-screen lg:w-[calc(95vw-256px)] bg-[#F2F2F2] dark:bg-[#141414] pt-8">
//       <div className="flex">       
//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
//             {/* General Settings */}
//             <div className="bg-white dark:bg-[#2C2C2C] dark:bg-bgTheme-card rounded-lg p-6">
//               <h1 className="text-2xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">General</h1>
//               <div className="space-y-4">
//                 <button
//                   onClick={() => setSelectedOption("appTheme")}
//                   className={`cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
//                     selectedOption === "appTheme"
//                       ? "bg-[#c62676] text-white"
//                       : "bg-[#F2F2F2] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//                   }`}
//                 >
//                   <div>
//                     <div className="font-medium">App Theme</div>
//                     <div className="text-sm dark:text-white">{getThemeDisplayName(theme)}</div>
//                   </div>
//                   <ChevronRight className="w-5 h-5" />
//                 </button>

//                 <button
//                   onClick={() => setSelectedOption("notifications")}
//                   className={`cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
//                     selectedOption === "notifications"
//                       ? "bg-[#c62676] text-white"
//                       : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//                   }`}
//                 >
//                   <div>
//                     <div className="font-medium">Notifications</div>
//                     <div className="text-sm dark:text-white">On</div>
//                   </div>
//                   <ChevronRight className="w-5 h-5" />
//                 </button>

//                 <button
//                   onClick={() => setSelectedOption("autoplay")}
//                   className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
//                     selectedOption === "autoplay"
//                       ? "bg-[#c62676] text-white"
//                       : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//                   }`}
//                 >
//                   <div>
//                     <div className="font-medium">Autoplay</div>
//                     <div className="text-sm dark:text-white">Enabled</div>
//                   </div>
//                   <ChevronRight className="w-5 h-5" />
//                 </button>

//                 <button
//                   onClick={() => setSelectedOption("accountDeletion")}
//                   className={`cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
//                     selectedOption === "accountDeletion"
//                       ? "bg-[#c62676] text-white"
//                       : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//                   }`}
//                 >
//                   <div>
//                     <div className="font-medium">Account Deletion</div>
//                   </div>
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Right Panel */}
//             {renderRightPanel()}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// "use client"

// import { useState } from "react"
// import { ChevronRight, Search, ShoppingCart, Bell, User, ArrowLeft } from "lucide-react"
// import { useTheme } from "@/lib/context/ThemeContext";


// const getThemeDisplayName = (theme: string) => {
//   switch(theme) {
//     case 'light': return 'Light Mode'
//     case 'dark': return 'Dark Mode'
//     case 'system': return 'System Defined'
//     default: return 'System Defined'
//   }
// }

// // Toggle Switch Component
// function ToggleSwitch({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
//   return (
//     <button
//       onClick={onChange}
//       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#c62676] focus:ring-offset-2 ${
//         enabled ? 'bg-[#c62676]' : 'bg-gray-300'
//       }`}
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#2C2C2C] transition-transform ${
//           enabled ? 'translate-x-6' : 'translate-x-1'
//         }`}
//       />
//     </button>
//   )
// }

// type SettingOption = "appTheme" | "notifications" | "autoplay" | "accountDeletion" | null

// export default function SettingsPage() {
//   const [selectedOption, setSelectedOption] = useState<SettingOption>(null)
//   const { theme, setTheme } = useTheme()

//   // State for all notification settings
//   const [notifications, setNotifications] = useState({
//     email: {
//       recommendedContent: true,
//       newReleases: false,
//       paymentIssues: false,
//     },
//     sms: {
//       recommendedContent: true,
//       newReleases: true,
//       paymentIssues: true,
//     },
//     app: {
//       recommendedContent: false,
//       newReleases: true,
//       paymentIssues: true,
//     },
//   })

//   // Function to toggle a specific notification setting
//   const toggleNotification = (category: keyof typeof notifications, setting: string) => {
//     setNotifications(prev => ({
//       ...prev,
//       [category]: {
//         ...(prev as any)[category],
//         [setting]: !(prev as any)[category][setting]
//       }
//     }))
//   }

//   const handleOptionClick = (option: SettingOption) => {
//     setSelectedOption(option)
//   }

//   const handleBackClick = () => {
//     setSelectedOption(null)
//   }

//   const renderMainCard = () => (
//     <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6">
//       <h1 className="text-2xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF]">General</h1>
//       <div className="space-y-4">
//         <button
//           onClick={() => handleOptionClick("appTheme")}
//           className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//         >
//           <div>
//             <div className="font-medium">App Theme</div>
//             <div className="text-sm dark:text-white">{getThemeDisplayName(theme)}</div>
//           </div>
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => handleOptionClick("notifications")}
//           className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//         >
//           <div>
//             <div className="font-medium">Notifications</div>
//             <div className="text-sm dark:text-white">On</div>
//           </div>
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => handleOptionClick("autoplay")}
//           className="w-full flex items-center justify-between p-3 rounded-lg transition-colors bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//         >
//           <div>
//             <div className="font-medium">Autoplay</div>
//             <div className="text-sm dark:text-white">Enabled</div>
//           </div>
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => handleOptionClick("accountDeletion")}
//           className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//         >
//           <div>
//             <div className="font-medium">Account Deletion</div>
//           </div>
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   )

//   const renderDetailCard = () => {
//     const getTitle = () => {
//       switch (selectedOption) {
//         case "appTheme": return "App Theme"
//         case "notifications": return "Notifications"
//         case "autoplay": return "Autoplay"
//         case "accountDeletion": return "Delete Account?"
//         default: return ""
//       }
//     }

//     return (
//       <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6">
//         {/* Mobile Back Button - only visible on mobile */}
//         <div className="flex items-center mb-6 lg:hidden">
//           <button
//             onClick={handleBackClick}
//             className="cursor-pointer flex items-center text-[#c62676] hover:text-pink-700 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             <span className="font-medium">Back</span>
//           </button>
//         </div>

//         <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] capitalize">
//           {getTitle()}
//         </h2>
        
//         {selectedOption === "appTheme" && (
//           <div className="space-y-3">
//             {(['light', 'dark', 'system'] as const).map((themeOption) => (
//               <button
//                 key={themeOption}
//                 onClick={() => setTheme(themeOption)}
//                 className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-colors ${
//                   theme === themeOption
//                     ? "bg-[#c62676] text-white"
//                     : "bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//                 }`}
//               >
//                 {getThemeDisplayName(themeOption)}
//               </button>
//             ))}
//           </div>
//         )}

//         {selectedOption === "notifications" && (
//           <div className="space-y-8">
//             {/* Email Notifications */}
//             <div>
//               <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">Email</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">Recommended Content</span>
//                   <ToggleSwitch 
//                     enabled={notifications.email.recommendedContent}
//                     onChange={() => toggleNotification('email', 'recommendedContent')}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">New Releases</span>
//                   <ToggleSwitch 
//                     enabled={notifications.email.newReleases}
//                     onChange={() => toggleNotification('email', 'newReleases')}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">Payment Issues</span>
//                   <ToggleSwitch 
//                     enabled={notifications.email.paymentIssues}
//                     onChange={() => toggleNotification('email', 'paymentIssues')}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* SMS Notifications */}
//             <div>
//               <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">SMS</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">Recommended Content</span>
//                   <ToggleSwitch 
//                     enabled={notifications.sms.recommendedContent}
//                     onChange={() => toggleNotification('sms', 'recommendedContent')}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">New Releases</span>
//                   <ToggleSwitch 
//                     enabled={notifications.sms.newReleases}
//                     onChange={() => toggleNotification('sms', 'newReleases')}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">Payment Issues</span>
//                   <ToggleSwitch 
//                     enabled={notifications.sms.paymentIssues}
//                     onChange={() => toggleNotification('sms', 'paymentIssues')}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* App Notifications */}
//             <div>
//               <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">App</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">Recommended Content</span>
//                   <ToggleSwitch 
//                     enabled={notifications.app.recommendedContent}
//                     onChange={() => toggleNotification('app', 'recommendedContent')}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">New Releases</span>
//                   <ToggleSwitch 
//                     enabled={notifications.app.newReleases}
//                     onChange={() => toggleNotification('app', 'newReleases')}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#2C2C2C] dark:text-gray-300">Payment Issues</span>
//                   <ToggleSwitch 
//                     enabled={notifications.app.paymentIssues}
//                     onChange={() => toggleNotification('app', 'paymentIssues')}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {selectedOption === "autoplay" && (
//           <div className="space-y-3">
//             <button className="w-full text-left px-4 py-3 rounded-lg bg-[#c62676] text-white">Enabled</button>
//             <button className="w-full text-left px-4 py-3 rounded-lg bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600">
//               Disabled
//             </button>
//           </div>
//         )}

//         {selectedOption === "accountDeletion" && (
//           <div className="space-y-4">
//             <p className="text-[#2C2C2C] dark:text-white text-sm mb-0">
//               You will permanently lose your:
//             </p>
//             <ul className="pl-3 ml-3 mt-0 list-disc text-[#2C2C2C] dark:text-white text-sm">
//               <li>Profile</li>
//               <li>Subscription Information</li>
//               <li>Settings</li>
//             </ul>
//             <div className="flex gap-4 justify-center w-full">
//               <button className="cursor-pointer px-6 py-3 w-full bg-[#333333] dark:bg-[#333333] text-white dark:text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors">
//                 No, Keep My Account
//               </button>
//               <button className="cursor-pointer px-6 py-3 w-full bg-[#c62676] text-white rounded-lg hover:bg-pink-700 transition-colors">
//                 Delete Account
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen w-screen lg:w-[calc(95vw-256px)] bg-[#F2F2F2] dark:bg-[#141414] pt-8">
//       <div className="flex">       
//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Mobile: Show either main card or detail card based on selection */}
//             {/* Desktop: Always show both cards side by side */}
            
//             {/* Main Card - Hidden on mobile when a setting is selected */}
//             <div className={`${selectedOption !== null ? 'hidden lg:block' : 'block'}`}>
//               {renderMainCard()}
//             </div>

//             {/* Detail Card - Hidden on mobile when no setting is selected, always shown on desktop */}
//             <div className={`${selectedOption === null ? 'hidden lg:block' : 'block'}`}>
//               {selectedOption !== null ? renderDetailCard() : (
//                 <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 flex items-center justify-center min-h-[300px]">
//                   <p className="text-gray-500 dark:text-gray-400 text-center">
//                     Select a setting from the left panel to configure it
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Search, ShoppingCart, Bell, User, ArrowLeft } from "lucide-react"
import { useTheme } from "@/lib/context/ThemeContext"

const getThemeDisplayName = (theme: string) => {
  switch(theme) {
    case 'light': return 'Light Mode'
    case 'dark': return 'Dark Mode'
    case 'system': return 'System Defined'
    default: return 'System Defined'
  }
}

// Toggle Switch Component
function ToggleSwitch({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#c62676] focus:ring-offset-2 ${
        enabled ? 'bg-[#c62676]' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#2C2C2C] transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

type SettingOption = "appTheme" | "notifications" | "autoplay" | "accountDeletion" | null

export default function SettingsPage() {
  const [selectedOption, setSelectedOption] = useState<SettingOption>(null)
  const [enabled, setEnabled] = useState<boolean>(false);
  const { theme, setTheme } = useTheme()

  // State for all notification settings
  const [notifications, setNotifications] = useState({
    email: {
      recommendedContent: true,
      newReleases: false,
      paymentIssues: false,
    },
    sms: {
      recommendedContent: true,
      newReleases: true,
      paymentIssues: true,
    },
    app: {
      recommendedContent: false,
      newReleases: true,
      paymentIssues: true,
    },
  })

  // Function to toggle a specific notification setting
  const toggleNotification = (category: keyof typeof notifications, setting: string) => {
    setNotifications(prev => ({
      ...prev,
      [category]: {
        ...(prev as any)[category],
        [setting]: !(prev as any)[category][setting]
      }
    }))
  }

  const handleOptionClick = (option: SettingOption) => {
    setSelectedOption(option)
   
  }

  const handleBackClick = () => {
    setSelectedOption(null)
  }

  useEffect(() => {
  if (selectedOption) {
    console.log("Selected option changed:", selectedOption);
 
  }
}, [selectedOption]);

  const renderMainCard = () => (
    
    <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF]">General</h1>
      <div className="space-y-4">
        <button
          onClick={() => handleOptionClick("appTheme")}
          className={`cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors ${selectedOption=== "appTheme"?
            "bg-[#c62676] text-white":"bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
          }`}
        >
          <div>
            <div className="font-medium">App Theme</div>
            <div className="text-sm dark:text-white">{getThemeDisplayName(theme)}</div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleOptionClick("notifications")}
          className={`cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors ${selectedOption=== "notifications"?
            "bg-[#c62676] text-white":"bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
          }`}
        >
          <div>
            <div className="font-medium">Notifications</div>
            <div className="text-sm dark:text-white">On</div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleOptionClick("autoplay")}
          className={`cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-colors ${selectedOption=== "autoplay"?
            "bg-[#c62676] text-white":"bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
          }`}
        >
          <div>
            <div className="font-medium">Autoplay</div>
            <div className="text-sm dark:text-white">Enabled</div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleOptionClick("accountDeletion")}
          className={`cursor-pointer w-full flex items-center justify-between py-5 px-3 rounded-lg transition-colors ${
            selectedOption === "accountDeletion"
              ? "bg-[#c62676] text-white"
              : "bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
          }`}
        >
          <div>
            <div className="font-medium">Account Deletion</div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )

  const renderDetailCard = () => {
    const getTitle = () => {
      switch (selectedOption) {
        case "appTheme": return "App Theme"
        case "notifications": return "Notifications"
        case "autoplay": return "Autoplay"
        case "accountDeletion": return "Delete Account?"
        default: return ""
      }
    }

    const autoPlaySwitch = (isEnabled: boolean) => {
  setEnabled(isEnabled);
}

    return (
      <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-4">
        {/* Mobile Back Button - only visible on mobile */}
        <div className="flex items-center mb-6 lg:hidden">
          <button
            onClick={handleBackClick}
            className="cursor-pointer flex items-center text-[#c62676] hover:text-pink-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] capitalize">
          {getTitle()}
        </h2>
        
        {selectedOption === "appTheme" && (
          <div className="space-y-3">
            {(['light', 'dark', 'system'] as const).map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption)}
                className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  theme === themeOption
                    ? "bg-[#c62676] text-white"
                    : "bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
                }`}
              >
                {getThemeDisplayName(themeOption)}
              </button>
            ))}
          </div>
        )}

        {selectedOption === "notifications" && (
          <div className="space-y-8">
            {/* Email Notifications */}
            <div>
              <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">Email</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">Recommended Content</span>
                  <ToggleSwitch 
                    enabled={notifications.email.recommendedContent}
                    onChange={() => toggleNotification('email', 'recommendedContent')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">New Releases</span>
                  <ToggleSwitch 
                    enabled={notifications.email.newReleases}
                    onChange={() => toggleNotification('email', 'newReleases')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">Payment Issues</span>
                  <ToggleSwitch 
                    enabled={notifications.email.paymentIssues}
                    onChange={() => toggleNotification('email', 'paymentIssues')}
                  />
                </div>
              </div>
            </div>

            {/* SMS Notifications */}
            <div>
              <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">SMS</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">Recommended Content</span>
                  <ToggleSwitch 
                    enabled={notifications.sms.recommendedContent}
                    onChange={() => toggleNotification('sms', 'recommendedContent')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">New Releases</span>
                  <ToggleSwitch 
                    enabled={notifications.sms.newReleases}
                    onChange={() => toggleNotification('sms', 'newReleases')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">Payment Issues</span>
                  <ToggleSwitch 
                    enabled={notifications.sms.paymentIssues}
                    onChange={() => toggleNotification('sms', 'paymentIssues')}
                  />
                </div>
              </div>
            </div>

            {/* App Notifications */}
            <div>
              <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">App</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">Recommended Content</span>
                  <ToggleSwitch 
                    enabled={notifications.app.recommendedContent}
                    onChange={() => toggleNotification('app', 'recommendedContent')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">New Releases</span>
                  <ToggleSwitch 
                    enabled={notifications.app.newReleases}
                    onChange={() => toggleNotification('app', 'newReleases')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2C2C2C] dark:text-gray-300">Payment Issues</span>
                  <ToggleSwitch 
                    enabled={notifications.app.paymentIssues}
                    onChange={() => toggleNotification('app', 'paymentIssues')}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedOption === "autoplay" && (
          <div className="space-y-3">
            <button 
              className={`
                w-full text-left px-4 py-3 rounded-lg text-black
                ${enabled 
                  ? 'bg-[#c62676] text-white' 
                  : 'bg-[#F2F2F2] dark:bg-[#333333] hover:bg-[#E5E5E5] dark:hover:bg-gray-600'
                }
              `}
              onClick={() => autoPlaySwitch(true)}
            >
              Enabled
            </button>
            
            <button 
              className={`
                w-full text-left px-4 py-3 rounded-lg
                ${enabled 
                  ? 'bg-[#F2F2F2] dark:bg-[#333333] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:hover:bg-gray-600' 
                  : 'bg-[#c62676] text-white'
                }
              `}
              onClick={() => autoPlaySwitch(false)}
            >
              Disabled
            </button>
          </div>
        )}

        {selectedOption === "accountDeletion" && (
          <div className="space-y-4">
            <p className="text-[#2C2C2C] dark:text-white text-sm mb-0">
              You will permanently lose your:
            </p>
            <ul className="pl-3 ml-3 mt-0 list-disc text-[#2C2C2C] dark:text-white text-sm">
              <li>Profile</li>
              <li>Subscription Information</li>
              <li>Settings</li>
            </ul>
            <div className="flex flex-col gap-4 justify-center w-full">
              <button className="cursor-pointer px-6 py-3 w-full bg-[#333333] dark:bg-[#333333] text-white dark:text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors">
                No, Keep My Account
              </button>
              <button className="cursor-pointer px-6 py-3 w-full bg-[#c62676] text-white rounded-lg hover:bg-pink-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen w-[98vw] lg:w-[calc(95vw-256px)] bg-[#F2F2F2] dark:bg-[#141414] pt-8 overflow-hidden">
      <div className="flex">       
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mobile: Show either main card or detail card based on selection */}
            {/* Desktop: Always show both cards side by side */}
            
            {/* Main Card - Hidden on mobile when a setting is selected */}
            <div className={`${selectedOption !== null ? 'hidden lg:block' : 'block'}`}>
              {renderMainCard()}
            </div>

            {/* Detail Card - Hidden on mobile when no setting is selected, always shown on desktop */}
            <div className={`${selectedOption === null ? 'hidden lg:block' : 'block'}`}>
              {selectedOption !== null ? renderDetailCard() : (
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 flex items-center justify-center min-h-[300px]">
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Select a setting from the left panel to configure it
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}