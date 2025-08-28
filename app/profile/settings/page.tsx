"use client"

import { useState } from "react"
import { ChevronRight, Search, ShoppingCart, Bell, User } from "lucide-react"
import { useTheme, getThemeDisplayName } from "@/lib/context/ThemeContext";

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

type SettingOption = "appTheme" | "notifications" | "autoplay" | "accountDeletion"

export default function SettingsPage() {
  const [selectedOption, setSelectedOption] = useState<SettingOption>("appTheme")
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

  const renderRightPanel = () => {
    switch (selectedOption) {
      case "appTheme":
        return (
          <div className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">App Theme</h2>
            <div className="space-y-3">
              {(['light', 'dark', 'system'] as const).map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => setTheme(themeOption)}
                  className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    theme === themeOption
                      ? "bg-[#c62676] text-white"
                      : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
                  }`}
                >
                  {getThemeDisplayName(themeOption)}
                </button>
              ))}
            </div>
          </div>
        )
      case "notifications":
        return (
          <div className="flex">
            {/* Notifications Panel */}
            <div className="w-80 bg-white dark:bg-[#2C2C2C] border-l border-[#e5e5e5] dark:border-[#333333] dark:border-gray-700 p-8">
              <h2 className="text-xl font-bold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-8">Notifications</h2>

              <div className="space-y-8">
                {/* Email Notifications */}
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-4">Email</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Recommended Content</span>
                      <ToggleSwitch 
                        enabled={notifications.email.recommendedContent}
                        onChange={() => toggleNotification('email', 'recommendedContent')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">New Releases</span>
                      <ToggleSwitch 
                        enabled={notifications.email.newReleases}
                        onChange={() => toggleNotification('email', 'newReleases')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Payment Issues</span>
                      <ToggleSwitch 
                        enabled={notifications.email.paymentIssues}
                        onChange={() => toggleNotification('email', 'paymentIssues')}
                      />
                    </div>
                  </div>
                </div>

                {/* SMS Notifications */}
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-4">SMS</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Recommended Content</span>
                      <ToggleSwitch 
                        enabled={notifications.sms.recommendedContent}
                        onChange={() => toggleNotification('sms', 'recommendedContent')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">New Releases</span>
                      <ToggleSwitch 
                        enabled={notifications.sms.newReleases}
                        onChange={() => toggleNotification('sms', 'newReleases')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Payment Issues</span>
                      <ToggleSwitch 
                        enabled={notifications.sms.paymentIssues}
                        onChange={() => toggleNotification('sms', 'paymentIssues')}
                      />
                    </div>
                  </div>
                </div>

                {/* App Notifications */}
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white mb-4">App</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Recommended Content</span>
                      <ToggleSwitch 
                        enabled={notifications.app.recommendedContent}
                        onChange={() => toggleNotification('app', 'recommendedContent')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">New Releases</span>
                      <ToggleSwitch 
                        enabled={notifications.app.newReleases}
                        onChange={() => toggleNotification('app', 'newReleases')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-gray-300">Payment Issues</span>
                      <ToggleSwitch 
                        enabled={notifications.app.paymentIssues}
                        onChange={() => toggleNotification('app', 'paymentIssues')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "autoplay":
        return (
          <div className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">Autoplay</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg bg-[#c62676] text-white">Enabled</button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600">
                Disabled
              </button>
            </div>
          </div>
        )
      case "accountDeletion":
        return (
          <div className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">Account Deletion</h2>
            <div className="space-y-4">
              <p className="text-[#696969] dark:text-gray-400 text-sm">
                Deleting your account will permanently remove all your data and cannot be undone.
              </p>
              <button className="w-full px-4 py-3 rounded-lg bg-[#ec221f] text-white hover:bg-red-600 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen w-screen lg:w-[calc(95vw-256px)] bg-[#F2F2F2] dark:bg-[#141414] pt-8">
      <div className="flex">       
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* General Settings */}
            <div className="bg-white dark:bg-[#2C2C2C] dark:bg-bgTheme-card rounded-lg p-6">
              <h1 className="text-2xl font-semibold mb-6 text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white">General</h1>
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedOption("appTheme")}
                  className={`cursor-pointer w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                    selectedOption === "appTheme"
                      ? "bg-[#c62676] text-white"
                      : "bg-[#F2F2F2] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
                  }`}
                >
                  <div>
                    <div className="font-medium">App Theme</div>
                    <div className="text-sm dark:text-white">{getThemeDisplayName(theme)}</div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setSelectedOption("notifications")}
                  className={`cursor-pointer w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                    selectedOption === "notifications"
                      ? "bg-[#c62676] text-white"
                      : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
                  }`}
                >
                  <div>
                    <div className="font-medium">Notifications</div>
                    <div className="text-sm dark:text-white">On</div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setSelectedOption("autoplay")}
                  className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                    selectedOption === "autoplay"
                      ? "bg-[#c62676] text-white"
                      : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
                  }`}
                >
                  <div>
                    <div className="font-medium">Autoplay</div>
                    <div className="text-sm dark:text-white">Enabled</div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setSelectedOption("accountDeletion")}
                  className={`cursor-pointer w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                    selectedOption === "accountDeletion"
                      ? "bg-[#c62676] text-white"
                      : "bg-[#F2F2F2]  text-[#2C2C2C] dark:text-[#FFFFFF] dark:text-white hover:bg-[#E5E5E5] dark:bg-[#333333] dark:hover:bg-gray-600"
                  }`}
                >
                  <div>
                    <div className="font-medium">Account Deletion</div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Panel */}
            {renderRightPanel()}
          </div>
        </div>
      </div>
    </div>
  )
}