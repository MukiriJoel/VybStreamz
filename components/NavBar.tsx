"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineNotifications,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { IconButton } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import TopProfileMenu from "./TopProfileMenu";

const NavBar = ({ position = "fixed", isSticky = false, color = "transparent" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "videos", link: "/videos" },
    { name: "music", link: "/music" },
    { name: "games", link: "/games" },
    { name: "education", link: "/education" },
    { name: "podcasts", link: "/podcasts" },
    { name: "partners", link: "/partners" },
  ];

  const goToNotifications = () => router.push("/profile/notifications");
  const toggleSearchBar = useCallback(() => {
    setShowSearchBar((prev) => !prev);
    if (showSearchBar) setSearchQuery("");
  }, [showSearchBar]);
  const handleShoppingBagClick = () => router.push("/payment");
  const onAvatarClick = () => setShowProfileModal(true);
  const closeProfileModal = () => setShowProfileModal(false);

  // Detect background
  useEffect(() => {
    const detectBackground = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const isInMusicPlayer = scrollY < viewportHeight - 150;
      const isDarkRoute =
        pathname.includes("/music") ||
        pathname.includes("/games") ||
        pathname.includes("/videos") ||
        pathname.includes("/podcasts") ||
        pathname === "/education" ||
        pathname === "/home" ||
        pathname === "/education/book";

      setIsDarkBackground(isInMusicPlayer && isDarkRoute);
    };

    detectBackground();
    window.addEventListener("scroll", detectBackground);
    return () => window.removeEventListener("scroll", detectBackground);
  }, [pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const getPositionClass = () => {
    if (isSticky) return "sticky z-50";
    return position === "fixed" ? "fixed top-0 z-[50]" : "relative";
  };

  const textColor = isDarkBackground
    ? "text-white"
    : "text-[#2C2C2C] dark:text-[#FFFFFF]";
  const hoverTextColor = isDarkBackground
    ? "hover:text-gray-200"
    : "hover:text-gray-900 dark:text-[#FFFFFF]";
  const iconColor = isDarkBackground
    ? "text-white"
    : "text-black dark:text-white";

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ${getPositionClass()} ${
          isDarkBackground
            ? "bg-transparent"
            : "bg-[#F2F2F2] dark:bg-[#141414]"
        }`}
      >
        <nav className="max-w-8xl mx-auto px-2 md:px-4 lg:px-6 items-center">
          <div className="flex justify-between h-[100px]">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={"/"}>
                <Image
                  src={"/logos/vybstreamz.png"}
                  className="object-contain"
                  alt="Vybstreamz Logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-[12px]">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className={`${hoverTextColor} ${textColor} font-medium capitalize transition-colors duration-200 ${
                    pathname.includes(item.link) && "!text-[#C62676]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-1 md:space-x-4 gap-1 md:gap-3">
              {/* Mobile Menu */}
              <div className="md:hidden">
                <IconButton aria-label="Open menu" onClick={toggleMobileMenu}>
                  <Menu className={`h-[24px] w-[24px] ${iconColor}`} />
                </IconButton>
              </div>

              {/* Search */}
              {showSearchBar ? (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-black dark:text-white bg-white dark:bg-[#141414]"
                    autoFocus
                  />
                  <button
                    type="button"
                    aria-label="Close search"
                    onClick={toggleSearchBar}
                    className={`${iconColor} ${hoverTextColor}`}
                  >
                    <FaTimes className="transition" />
                  </button>
                </form>
              ) : (
                <IconButton aria-label="Open search" onClick={toggleSearchBar}>
                  <MdOutlineSearch
                    className={`h-[24px] w-[24px] md:h-[36px] md:w-[36px] ${textColor}`}
                  />
                </IconButton>
              )}

              {/* Shopping Bag */}
              <IconButton
                aria-label="Shopping bag"
                onClick={handleShoppingBagClick}
              >
                <MdOutlineShoppingBag
                  className={`h-[24px] w-[24px] md:h-[36px] md:w-[36px] ${textColor}`}
                />
              </IconButton>

              {/* Notifications */}
              <div className="relative">
                <IconButton
                  aria-label="Notifications"
                  onClick={goToNotifications}
                >
                  <span className="absolute -top-[2px] -right-[2px] h-3 w-3 bg-red-500 rounded-full z-10"></span>
                  <MdOutlineNotifications
                    className={`h-[24px] w-[24px] md:h-[36px] md:w-[36px] ${textColor}`}
                  />
                </IconButton>
              </div>

              {/* Avatar */}
              <Avatar
                onClick={onAvatarClick}
                className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] ml-2 md:ml-4 cursor-pointer"
              >
                <AvatarImage
                  src="/logos/user-profile-illustration.png"
                  alt="User avatar"
                  className="object-cover"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              {showProfileModal && (
                <TopProfileMenu closeProfileModal={closeProfileModal} />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-[#141414] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-[#2C2C2C]">
          <Link href={"/"} onClick={closeMobileMenu}>
            <Image
              src={"/logos/vybstreamz.png"}
              alt="Vybstreamz Logo"
              width={200}
              height={50}
              className="h-[66px] w-[197px] pr-10 object-contain"
            />
          </Link>
          <IconButton aria-label="Close menu" onClick={closeMobileMenu}>
            <X className="h-[24px] w-[24px] text-black dark:text-white" />
          </IconButton>
        </div>

        <div className="px-6 py-4">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={closeMobileMenu}
              className={`flex items-center justify-between py-4 font-medium capitalize text-lg border-b border-gray-100 last:border-b-0 ${
                pathname.includes(item.link)
                  ? "text-[#C62676]"
                  : "text-[#2C2C2C] dark:text-[#FFFFFF] hover:text-gray-900"
              }`}
            >
              {item.name}
              <ChevronRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
