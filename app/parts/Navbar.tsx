"use client"
import { useCallback, useEffect, useState } from "react"
import MobileMenu from "./MobileMenu"
import NavbarItem from "./NavbarItem"
import { FaChevronDown } from "react-icons/fa"
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Link from 'next/link'
import { useAuth } from "@/lib/context/AuthContext"
import { useRouter } from 'next/navigation'

const TOP_OFFSET = 66;

const Navbar = ({ isDarkBackground = true }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { isLoggedIn } = useAuth()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const toggleMobileMenu = useCallback(() =>{
        setShowMobileMenu((current) => !current)
    }, [])

    const toggleSearchBar = useCallback(() => {
        setShowSearchBar((current) => !current)
        if (showSearchBar) {
            setSearchQuery("")
        }
    }, [showSearchBar])

    const handleSearchSubmit = (e:any) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery)
        }
    }

    const handleShoppingBagClick = () => {
        router.push('/payment')
    }

    const handleBellClick = () => {
        router.push('/profile/notifications')
    }
    
    // Dynamic color classes based on background
    const textColor = isDarkBackground ? 'text-white' : 'text-black dark:text-white';
    const iconColor = isDarkBackground ? 'text-white' : 'text-black dark:text-white';
    const hoverColor = isDarkBackground ? 'hover:text-gray-300' : 'hover:text-[#2C2C2C]';
    
    return (
        <nav className="w-full fixed z-40">
            <div className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                   ${showBackground ? 'bg-zinc-800' : 'bg-transparent'}  
            `}>
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#e16026]">Vybz</span>
                        <span className="text-2xl font-bold text-[#c62676]">Stream</span>
                    </div>
                </Link>
                
                <div className={`
                        flex-row
                        ml-100
                        gap-17
                        hidden
                        lg:flex
                        md:flex items-center space-x-8 ${textColor}`}
                >
                    <NavbarItem label="Videos" href="/videos" />
                    <NavbarItem label="Music" href="/music" />
                    <NavbarItem label="Games" href="/games" />
                    <NavbarItem label="Education" href="/EducationList" />
                    <NavbarItem label="Podcast" href="/podcasts" />
                    <NavbarItem label="Partners" href="/partners" />
                </div>
                
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className={`text-sm ${textColor}`}>Browse</p>
                    <FaChevronDown className={`transition ${iconColor}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                
                <div className="flex flex-row ml-auto gap-7 items-center">
                    {/* Search functionality */}
                    {showSearchBar ? (
                        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-black dark:text-white bg-white dark:bg-[#2C2C2C]"
                                autoFocus
                            />
                            <button type="submit" className={`${iconColor} ${hoverColor}`}>
                                <FaSearch className="transition" />
                            </button>
                            <button type="button" onClick={toggleSearchBar} className={`${iconColor} ${hoverColor}`}>
                                <FaTimes className="transition" />
                            </button>
                        </form>
                    ) : (
                        <div onClick={toggleSearchBar} className={`${iconColor} ${hoverColor} cursor-pointer transition`}>
                            <FaSearch className="transition" />
                        </div>
                    )}
                    
                    <div onClick={handleShoppingBagClick} className={`${iconColor} ${hoverColor} cursor-pointer transition`}>
                        <FaBagShopping className="transition" />
                    </div>
                    
                    <div onClick={handleBellClick} className={`${iconColor} ${hoverColor} cursor-pointer transition`}>
                        <FaRegBell className="transition" />
                    </div>
                    
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <Link href={isLoggedIn ? "/profile" : "/login"} className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                                <img className="bg-amber-500" src="/vercel.svg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar