// "use client"

// import { Search, ChevronRight, ArrowLeft } from "lucide-react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"

// // Import the ResetPasswordPage component
// import ResetPasswordPage from "../resetPasswordText/resetPasswordText"

// // Breadcrumb Component
// interface BreadcrumbItem {
//   label: string
//   onClick?: () => void
//   isActive?: boolean
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
//   className?: string
// }

// function Breadcrumb({ items, className }: BreadcrumbProps) {
//   return (
//     <nav className={`flex items-center space-x-1 text-sm ${className || ''}`} aria-label="Breadcrumb">
//       {items.map((item, index) => (
//         <div key={index} className="flex items-center">
//           {index > 0 && <ChevronRight className="h-4 w-4 text-[#49454f] dark:text-gray-400 mx-1" />}
//           {item.isActive ? (
//             <span className="text-[#333333] dark:text-white font-medium" aria-current="page">
//               {item.label}
//             </span>
//           ) : (
//             <button
//               onClick={item.onClick}
//               className="text-[#49454f] dark:text-gray-400 hover:text-[#c62676] dark:hover:text-[#c62676] transition-colors duration-200 hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit"
//             >
//               {item.label}
//             </button>
//           )}
//         </div>
//       ))}
//     </nav>
//   )
// }

// const Input = ({ className, ...props }: any) => (
//   <input className={className} {...props} />
// )

// const helpCategories = [
//   "Getting Started",
//   "Payment and Subscriptions", 
//   "Account Management",
//   "Playing Content",
//   "Frequently Asked Questions",
// ]

// const helpContent = {
//   "Getting Started": [
//     "How Do I Login to the platform",
//     "What kind of content is available in the platform",
//     "How do I get the most relevant content",
//     "Setting up your profile",
//   ],
//   "Payment and Subscriptions": [
//     "How to manage your subscription",
//     "Payment methods and billing",
//     "Subscription plans and pricing",
//     "Canceling your subscription",
//   ],
//   "Account Management": [
//     "Updating your profile information",
//     "How to reset your password",
//     "Managing notification preferences",
//     "Deleting your account",
//   ],
//   "Playing Content": [
//     "How to play videos",
//     "Audio quality settings",
//     "Creating playlists",
//     "Download content for offline viewing",
//   ],
//   "Frequently Asked Questions": [
//     "Common technical issues",
//     "Account troubleshooting",
//     "Content availability",
//     "Contact support",
//   ],
// }

// export default function HelpCenter() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
//   const [currentPage, setCurrentPage] = useState<string>("main")

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category)
//   }

//   const handleBackClick = () => {
//     setSelectedCategory(null)
//   }

//   const handleQuestionClick = (question: string, category: string) => {
//     if (question === "How to reset your password" && category === "Account Management") {
//       setCurrentPage("resetPassword")
//     }
//   }

//   const handleNavigation = (level: string) => {
//     if (level === "main") {
//       setCurrentPage("main")
//       setSelectedCategory(null)
//     } else if (helpCategories.includes(level)) {
//       setCurrentPage("main")
//       setSelectedCategory(level)
//     }
//   }

//   // If we're on the reset password page, render that component
//   if (currentPage === "resetPassword") {
//     return <ResetPasswordPage onNavigate={handleNavigation} />
//   }

//   // Generate breadcrumb items based on current state
//   const getBreadcrumbItems = (): BreadcrumbItem[] => {
//     const items: BreadcrumbItem[] = [
//       {
//         label: "Help Center",
//         onClick: () => setSelectedCategory(null),
//         isActive: selectedCategory === null
//       }
//     ]

//     if (selectedCategory) {
//       items.push({
//         label: selectedCategory,
//         isActive: true
//       })
//     }

//     return items
//   }

//   const renderCategoriesCard = () => (
//     <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-4">
//       <div className="space-y-4">
//         {helpCategories.map((category, index) => (
//           <Button
//             key={index}
//             variant="default"
//             onClick={() => handleCategoryClick(category)}
//             className={`cursor-pointer w-full justify-between text-left p-3 h-auto rounded-lg transition-colors  ${
//               selectedCategory === category
//                 ? "bg-[#c62676] text-white hover:bg-[#c62676]/90"
//                 : "bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
//             }`}
//           >
//             <span className="text-lg font-medium">{category}</span>
//             <ChevronRight className="h-5 w-5 ml-2 flex-shrink-0" />
//           </Button>
//         ))}
//       </div>
//     </div>
//   )

//   const renderQuestionsCard = () => (
//     <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 overflow-hidden">
//       {/* Mobile Back Button - only visible on mobile */}
//       <div className="flex items-center mb-6 lg:hidden">
//         <button
//           onClick={handleBackClick}
//           className="cursor-pointer flex items-center text-[#c62676] hover:text-pink-700 transition-colors bg-transparent border-none p-0"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           <span className="font-medium">Back</span>
//         </button>
//       </div>

//       {/* Category Title - only visible on mobile */}
//       <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] lg:hidden">
//         {selectedCategory}
//       </h2>

//       <div className="space-y-4">
//         {selectedCategory && (helpContent as any)[selectedCategory]?.map((question: any, index: any) => (
//           <Button
//             key={index}
//             variant="default"
//             onClick={() => handleQuestionClick(question, selectedCategory)}
//             className="cursor-pointer w-full justify-between text-left p-3 h-auto bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600 rounded-lg"
//           >
//             <span className="text-lg font-medium line-clamp-2 text-wrap">{question}</span>
//             <ChevronRight className="h-5 w-5 ml-2 flex-shrink-0 text-[#696969]" />
//           </Button>
//         ))}
//       </div>
//     </div>
//   )

//   const renderEmptyQuestionsCard = () => (
//     <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 flex items-center justify-center min-h-[300px]">
//       <p className="text-gray-500 dark:text-gray-400 text-center">
//         Select a category from the left panel to view help topics
//       </p>
//     </div>
//   )

//   return (
//     <main className="w-[98vw] lg:w-[calc(95vw-256px)] px-6 pt-8 md:p-8 mx-0 md:mx-0">
//       <div className="max-w-6xl mx-auto pt-8">
//         {/* Search Bar - Always visible */}
//         <div className="mb-8">
//           <div className="relative max-w-2xl">
//             <Input
//               type="text"
//               placeholder="Search for a help topic"
//               className="w-full pl-4 pr-12 py-5 text-lg bg-[#ffffff] dark:bg-[#333333] border border-[#d9d9d9] dark:border-gray-600 placeholder:text-[#2C2C2C] dark:placeholder:text-white rounded-full focus:border-[#c62676] focus:ring-[#c62676] focus:outline-none"
//             />
//             <Button
//               size="icon"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-[#E5E5E5] dark:bg-[#333333] text-[#696969] dark:text-white p-2 rounded-full"
//             >
//               <Search className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//         {/* Help Center Title and Breadcrumb */}
//         <div className="mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-6">Help Center</h1>
//           <Breadcrumb items={getBreadcrumbItems()} className="mb-4" />
//         </div>

//         {/* Help Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Categories Card - Hidden on mobile when a category is selected */}
//           <div className={`${selectedCategory !== null ? 'hidden lg:block' : 'block'}`}>
//             {renderCategoriesCard()}
//           </div>

//           {/* Questions Card - Hidden on mobile when no category is selected, always shown on desktop */}
//           <div className={`${selectedCategory === null ? 'hidden lg:block' : 'block'}`}>
//             {selectedCategory !== null ? renderQuestionsCard() : renderEmptyQuestionsCard()}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
"use client"

import { Search, ChevronRight, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

// Breadcrumb Component
interface BreadcrumbItem {
  label: string
  onClick?: () => void
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function Breadcrumb({ items, className }: BreadcrumbProps) {
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

const Input = ({ className, ...props }: any) => (
  <input className={className} {...props} />
)

const helpCategories = [
  "Getting Started",
  "Payment and Subscriptions", 
  "Account Management",
  "Playing Content",
  "Frequently Asked Questions",
]

const helpContent = {
  "Getting Started": [
    "How Do I Login to the platform",
    "What kind of content is available in the platform",
    "How do I get the most relevant content",
    "Setting up your profile",
  ],
  "Payment and Subscriptions": [
    "How to manage your subscription",
    "Payment methods and billing",
    "Subscription plans and pricing",
    "Canceling your subscription",
  ],
  "Account Management": [
    "Updating your profile information",
    "How to reset your password",
    "Managing notification preferences",
    "Deleting your account",
  ],
  "Playing Content": [
    "How to play videos",
    "Audio quality settings",
    "Creating playlists",
    "Download content for offline viewing",
  ],
  "Frequently Asked Questions": [
    "Common technical issues",
    "Account troubleshooting",
    "Content availability",
    "Contact support",
  ],
}

// Detailed content for each question
const detailedContent: { [key: string]: string } = {
  "How Do I Login to the platform": "To login to the Vyb Streamz platform, begin by visiting our main website or opening the mobile app. Look for the 'Login' or 'Sign In' button, typically located in the top right corner of the page. Enter your registered email address and password in the provided fields. If you've forgotten your credentials, use the 'Forgot Password' link to reset them. Once logged in, you'll have access to all your personalized content and features.",
  
  "What kind of content is available in the platform": "Vyb Streamz offers a diverse range of content including movies, TV series, documentaries, live streams, and original productions. Our library spans multiple genres such as action, comedy, drama, thriller, sci-fi, and more. We regularly update our catalog with new releases and trending content. You can also find educational content, music videos, and exclusive interviews with creators.",
  
  "How do I get the most relevant content": "To get the most relevant content recommendations, complete your profile setup by selecting your favorite genres and interests. The platform uses advanced algorithms to analyze your viewing history and preferences. Rate content you've watched, add items to your watchlist, and follow creators you enjoy. The more you interact with the platform, the better our recommendations become.",
  
  "Setting up your profile": "Setting up your profile is simple and helps personalize your experience. After logging in, navigate to your account settings where you can upload a profile picture, set your display name, and select your content preferences. Choose your favorite genres, languages, and content types. You can also set viewing restrictions and privacy preferences. Don't forget to verify your email address to unlock all features.",
  
  "How to manage your subscription": "Managing your subscription is easy through your account settings. Navigate to the 'Subscription' or 'Billing' section where you can view your current plan, payment history, and renewal dates. You can upgrade or downgrade your plan at any time. Changes typically take effect at the next billing cycle. If you need to update payment methods or billing information, you can do so in the same section.",
  
  "Payment methods and billing": "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and mobile money options depending on your region. Billing occurs automatically based on your subscription cycle (monthly or annual). You'll receive email notifications before each billing cycle. All transactions are secured with industry-standard encryption to protect your financial information.",
  
  "Subscription plans and pricing": "We offer multiple subscription tiers to fit different needs and budgets. Our Basic plan provides access to standard definition content with limited simultaneous streams. The Premium plan includes HD/4K content, multiple device streaming, and exclusive content. The Family plan allows up to 6 user profiles with parental controls. Check our pricing page for current rates and special offers in your region.",
  
  "Canceling your subscription": "You can cancel your subscription at any time through your account settings. Navigate to the 'Subscription' section and select 'Cancel Subscription'. You'll continue to have access until the end of your current billing period. We'll send a confirmation email once the cancellation is processed. If you change your mind, you can reactivate your subscription before the cancellation takes effect.",
  
  "Updating your profile information": "To update your profile information, go to your account settings and select 'Profile'. Here you can change your display name, email address, phone number, and profile picture. You can also update your content preferences, language settings, and notification preferences. Some changes may require email verification for security purposes. Remember to save your changes before leaving the page.",
  
  "How to reset your password": "To reset your password on the Vyb Streamz platform, begin by visiting the login page. Locate and click on the 'Forgot Password?' link, which will direct you to a new page. You will then be asked to input your registered email address associated with your account. After you submit your email, check your inbox for a message containing a password reset link. Click on this link to be taken to a secure page where you can create a new password. Make sure to follow all the instructions provided in the email carefully to ensure a successful reset.\n\nOnce you've successfully reset your password, return to the login page to access your account. If you wish to change your password at any time, navigate to your account settings after logging in. Look for the 'Change Password' section. Here, you will need to enter your current password, followed by your new password, and then confirm the new password by entering it again. Don't forget to save your changes to ensure that your password is updated.",
  
  "Managing notification preferences": "You can customize your notification preferences to control what updates you receive and how you receive them. Go to your account settings and select 'Notifications'. Here you can toggle email notifications for new content, billing updates, and promotional offers. You can also manage push notifications for the mobile app, including new episode alerts and personalized recommendations. Choose your preferred frequency and types of communications.",
  
  "Deleting your account": "If you wish to permanently delete your account, please note that this action is irreversible and will remove all your data, including viewing history, watchlists, and profile information. To proceed, go to account settings and look for 'Delete Account' at the bottom of the page. You'll be asked to confirm your decision and may need to enter your password. We recommend downloading any personal data you wish to keep before deletion. Contact support if you need assistance with this process.",
  
  "How to play videos": "Playing videos is straightforward on our platform. Simply browse or search for content you want to watch and click on the title or thumbnail. The video player will open with standard controls including play/pause, volume, and progress bar. You can adjust video quality in the settings menu (gear icon), enable subtitles if available, and use fullscreen mode for an immersive experience. On mobile devices, you can also rotate your screen for landscape viewing.",
  
  "Audio quality settings": "Audio quality can be adjusted based on your internet connection and device capabilities. In the video player settings, look for 'Audio' or 'Sound' options where you can select different quality levels. Higher quality audio requires more bandwidth but provides better sound. You can also adjust audio preferences in your account settings to set default audio quality for all content. Some content may offer surround sound or Dolby Audio for compatible devices.",
  
  "Creating playlists": "Creating playlists helps you organize your favorite content for easy access. Look for the 'Add to Playlist' option when viewing content details, or use the playlist icon in the video player. You can create new playlists with custom names and descriptions, or add content to existing playlists. Manage your playlists from your profile page where you can edit titles, reorder content, and share playlists with friends. Playlists can be set to public or private.",
  
  "Download content for offline viewing": "Many titles are available for offline download, perfect for travel or areas with poor internet connection. Look for the download icon next to eligible content. Select your preferred video quality for downloads - higher quality takes more storage space. Downloaded content is stored in the 'Downloads' section of your account and has expiration dates. You can manage your downloads, including deleting completed downloads to free up storage space.",
  
  "Common technical issues": "Common technical issues include buffering, login problems, and playback errors. For buffering issues, try lowering video quality or checking your internet connection. Clear your browser cache or restart the app if you experience login difficulties. Ensure your device meets minimum system requirements and that you're using a supported browser or the latest app version. Contact technical support if issues persist, providing details about your device and the specific problem encountered.",
  
  "Account troubleshooting": "If you're having account-related issues, start by verifying your login credentials and checking if your email is verified. For billing issues, review your payment method and ensure it's up to date. If you can't access certain content, check your subscription status and regional availability. For profile issues, try logging out and back in, or clearing your browser data. Most account issues can be resolved through your account settings or by contacting customer support.",
  
  "Content availability": "Content availability varies by region due to licensing agreements. Some titles may be temporarily unavailable due to technical maintenance or licensing renewals. New content is added regularly, and we notify users about upcoming additions through our newsletter and app notifications. If you can't find specific content, it may not be available in your region or may have been removed from our catalog. Check the 'Coming Soon' section for upcoming releases.",
  
  "Contact support": "Our customer support team is available to help with any questions or issues. You can reach us through multiple channels: email support through the contact form on our website, live chat during business hours (available in your account dashboard), or phone support for urgent issues. Before contacting support, check our FAQ section as it may have immediate answers to common questions. When contacting support, provide your account details and a clear description of the issue for faster assistance.",
}

export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setSelectedQuestion(null) // Reset question when changing category
  }

  const handleBackClick = () => {
    if (selectedQuestion) {
      setSelectedQuestion(null) // Go back to questions list
    } else {
      setSelectedCategory(null) // Go back to categories
    }
  }

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question)
  }

  const handleNavigation = (level: string) => {
    if (level === "main") {
      setSelectedCategory(null)
      setSelectedQuestion(null)
    } else if (helpCategories.includes(level)) {
      setSelectedCategory(level)
      setSelectedQuestion(null)
    }
  }

  // Generate breadcrumb items based on current state
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      {
        label: "Help Center",
        onClick: () => {
          setSelectedCategory(null)
          setSelectedQuestion(null)
        },
        isActive: selectedCategory === null && selectedQuestion === null
      }
    ]

    if (selectedCategory) {
      items.push({
        label: selectedCategory,
        onClick: () => setSelectedQuestion(null),
        isActive: selectedQuestion === null
      })
    }

    if (selectedQuestion) {
      items.push({
        label: selectedQuestion,
        isActive: true
      })
    }

    return items
  }

  const renderCategoriesCard = () => (
    <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-4">
      <div className="space-y-4">
        {helpCategories.map((category, index) => (
          <Button
            key={index}
            variant="default"
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer w-full justify-between text-left p-3 h-auto rounded-lg transition-colors  ${
              selectedCategory === category
                ? "bg-[#c62676] text-white hover:bg-[#c62676]/90"
                : "bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
            }`}
          >
            <span className="text-lg font-medium">{category}</span>
            <ChevronRight className="h-5 w-5 ml-2 flex-shrink-0" />
          </Button>
        ))}
      </div>
    </div>
  )

  const renderQuestionsCard = () => (
    <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 overflow-hidden">
      {/* Mobile Back Button - only visible on mobile */}
      <div className="flex items-center mb-6 lg:hidden">
        <button
          onClick={handleBackClick}
          className="cursor-pointer flex items-center text-[#c62676] hover:text-pink-700 transition-colors bg-transparent border-none p-0"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Category Title - only visible on mobile */}
      <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] lg:hidden">
        {selectedCategory}
      </h2>

      <div className="space-y-4">
        {selectedCategory && (helpContent as any)[selectedCategory]?.map((question: any, index: any) => (
          <Button
            key={index}
            variant="default"
            onClick={() => handleQuestionClick(question)}
            className="cursor-pointer w-full justify-between text-left p-3 h-auto bg-[#F2F2F2] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600 rounded-lg"
          >
            <span className="text-lg font-medium line-clamp-2 text-wrap">{question}</span>
            <ChevronRight className="h-5 w-5 ml-2 flex-shrink-0 text-[#696969]" />
          </Button>
        ))}
      </div>
    </div>
  )

  const renderDetailedView = () => (
    <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 overflow-hidden">
      {/* Mobile Back Button - only visible on mobile */}
      <div className="flex items-center mb-6 lg:hidden">
        <button
          onClick={handleBackClick}
          className="cursor-pointer flex items-center text-[#c62676] hover:text-pink-700 transition-colors bg-transparent border-none p-0"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Question Title */}
      <h2 className="text-2xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF]">
        {selectedQuestion}
      </h2>

      {/* Detailed Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="text-[#2C2C2C] dark:text-[#FFFFFF] leading-relaxed text-base">
          {detailedContent[selectedQuestion || ""]?.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )

  const renderEmptyQuestionsCard = () => (
    <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 flex items-center justify-center min-h-[300px]">
      <p className="text-gray-500 dark:text-gray-400 text-center">
        Select a category from the left panel to view help topics
      </p>
    </div>
  )

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
          <Breadcrumb items={getBreadcrumbItems()} className="mb-4" />
        </div>

        {/* Help Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories Card - Hidden on mobile when a category/question is selected */}
          <div className={`${selectedCategory !== null ? 'hidden lg:block' : 'block'}`}>
            {renderCategoriesCard()}
          </div>

          {/* Questions/Detailed Card - Show different content based on state */}
          <div className={`${selectedCategory === null && selectedQuestion === null ? 'hidden lg:block' : 'block'}`}>
            {selectedQuestion ? 
              renderDetailedView() : 
              selectedCategory ? 
                renderQuestionsCard() : 
                renderEmptyQuestionsCard()
            }
          </div>
        </div>
      </div>
    </main>
  )
}