"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Search, ShoppingCart, X, TriangleAlert } from "lucide-react";
import { IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";

interface Notification {
  id: number;
  title: string;
  date: string;
  hasImage: boolean;
  image: string;
  isRead: boolean;
  route: string;
}

export default function NotificationsPage() {
  const [showSubscriptionAlert, setShowSubscriptionAlert] = useState(true);
  const Router = useRouter();

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Season Is Here",
      date: "06/07/2025",
      hasImage: true,
      image: "/images/vid4.png",
      isRead: false,
      route: "/season-update",
    },
    {
      id: 2,
      title: "Listen to Diamond's new song",
      date: "06/12/2025",
      hasImage: true,
      image: "/images/vid6.png",
      isRead: false,
      route: "/music/diamond-new-song",
    },
  ]);

  const goToSubscription = () => {
    Router.push("/planSelection");
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })));
  };

  const handleNotificationClick = (route: string) => {
    // In a real app, you would use Next.js router here
    console.log(`Navigating to: ${route}`);
    Router.push(route);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <div className="min-h-screen w-[98vw] lg:w-[calc(95vw-256px)] bg-[#F2F2F2] dark:bg-[#141414]  pt-8">
      {/* Header */}

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-[#FFFFFF] mb-8">
            My Notifications
          </h2>
          <button
            onClick={markAllAsRead}
            className="cursor-pointer px-10 py-3 mb-6 bg-[#333333] dark:bg-[#2C2C2C] text-white rounded-lg hover:bg-[#c62676] dark:hover:bg-[#c62676] focus:ring-2 focus:ring-[#c62676] focus:bg-[#c62676]  transition-colors"
          >
            Mark All As Read
          </button>

          <div className="space-y-8">
            {/* Notifications List */}
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center space-x-4 pb-6 border-b-2 border-[#999999] cursor-pointer"
                onClick={() => handleNotificationClick(notification.route)}
              >
                {/* Red dot indicator */}
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-[#ec221f] rounded-full flex-shrink-0"></div>
                )}
                {notification.isRead && <div className="w-2 h-2 flex-shrink-0"></div>}

                {notification.hasImage && (
                  <div className="w-28 h-32 overflow-hidden flex-shrink-0">
                    <img
                      src={notification.image}
                      className="w-full h-full"
                      alt="Notification thumbnail"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#2C2C2C] dark:text-[#FFFFFF] mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-[#2C2C2C] dark:text-white">
                    {notification.date}
                  </p>
                </div>
                <div className="">
                  <IconButton 
                    className="cursor-pointer rounded-full hover:!bg-[#C62676]"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeNotification(notification.id);
                    }}
                  >
                    <MdClose className="text-[#2C2C2C] dark:text-white hover:text-white" />
                  </IconButton>
                </div>
              </div>
            ))}

            {/* Subscription Alert */}
            {showSubscriptionAlert && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 relative">
                <button
                  onClick={() => setShowSubscriptionAlert(false)}
                  className="absolute top-4 cursor-pointer right-4 text-[#2C2C2C] hover:text-[#2C2C2C]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <TriangleAlert className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Subscription has expired!
                    </h3>
                    <p className="text-sm text-[#2C2C2C] mb-4">
                      Your Spotify subscription expired on 12/07/2025. Check on
                      your account to resolve issue
                    </p>
                    <Button
                      onClick={() => goToSubscription()}
                      className="bg-pink-500 hover:bg-pink-600 text-white"
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}