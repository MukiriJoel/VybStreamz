"use client";
import { Search, ShoppingCart, Bell, ArrowLeft, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "../parts/Navbar";
import CountryDropdown from "@/components/CountryDropdown";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { MdOutlineChevronRight } from "react-icons/md";
import OtpInput from "@/components/OtpInput";

export default function HomePage() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const router = useRouter();

  const paymentMethods = [
    {
      id: 1,
      name: "M-PESA",
      component: "/images/Mpesa.webp",
    },
    {
      id: 2,
      name: "Airtime",
      component: "/images/Airtime.webp",
    },
    {
      id: 3,
      name: "VISA",
      component: "/images/Card.webp",
    },
    {
      id: 4,
      name: "Okoa",
      component: "/images/Okoa.webp",
    },
    {
      id: 5,
      name: "Bonga",
      component: "/images/Bonga.webp",
    },
  ];

  const cartItems = [
    {
      name: "Baze Daily Access only Autorenewal",
      price: "10",
      logo: "/logos/bazeLg.png",
    },
    {
      name: "Netflix Premium Three className",
      price: "10",
      logo: "/logos/netflixLg.png",
    },
    {
      name: "YouTube Premium Individual",
      price: "10",
      logo: "/logos/youtube.png",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Baze",
      description:
        "The journey of a couple towards their wedding, in their planning they...",
      logo: "baze",
    },
    {
      id: 2,
      name: "Hulu",
      description:
        "The journey of a couple towards their wedding, in their planning they...",
      logo: "hulu",
    },
    {
      id: 3,
      name: "Netflix",
      description:
        "The journey of a couple towards their wedding, in their planning they...",
      logo: "netflix",
    },
  ];

  const onHandleClick = (partner: any) => {
    router.push(`/partners/${partner.id}`);
  };

  const onPayClick = () => {
    setShowOtpModal(true);
  };

  const handleVerify = () => {
    setShowPaymentModal(true);
  };

  const handleExplore = () => {
    router.push("/preference");
  };

  const handleGoToSubscriptions = () => {
    router.push("/profile/");
  };

  const handleResend = () => {
    setShowOtpModal(false);
  };

  const getLogoSrc = (logo: string) => {
    switch (logo) {
      case "baze":
        return "/logos/baze.png";
      case "hulu":
        return "/logos/hulu.png";
      case "netflix":
        return "/logos/netflix.png";
      case "startimes":
        return "/logos/startimes.png";
      case "youtube":
        return "/logos/youtube.png";
      case "gotv":
        return "/logos/gotv.png";
      default:
        return "/generic-streaming-logo.png";
    }
  };

  const onAddMoreClick = () => {
    router.push("/partners");
  };

  return (
    <>
      <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414]  max-w-8xl">
        {/* Header */}

        {/* Main Content */}
        <div className=" mx-auto !px-3 py-8 pt-30">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Payment Method Section */}
            <div className="flex-[1.5] bg-white dark:bg-[#2C2C2C] rounded-lg p-5 md:p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <div className="flex items-center mb-6">
                <h1 className="text-2xl font-semibold text-[#333333] dark:text-white">
                  Payment Method
                </h1>
              </div>

              {/* Payment Options */}
              {/* <div className="flex lg:gap-2 gap-1 md:gap-2 pb-6 overflow-hidden">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`bg-[#E5E5E5] rounded-lg md:px-6 py-1.5 px-1 hover:border-pink-500 cursor-pointer ${
                      selectedMethod === method.id
                        ? "border-pink-500 bg-pink-50 shadow-md"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedMethod(method.id as any)}
                  >
                    {method.component}
                  </div>
                ))}
              </div> */}
                <div className="mb-4">
        {/* <h3 className="text-lg font-semibold mb-3">Alternative: Horizontal Scroll</h3> */}
        {/* <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {paymentMethods.map((method) => (
            <div
              key={`scroll-${method.id}`}
              className={`
                flex-shrink-0 bg-white rounded-lg p-0 border-2 cursor-pointer transition-all duration-200
                min-w-[100px] hover:shadow-lg
                ${selectedMethod === method.id
                  ? "border-pink-500 bg-pink-50 shadow-md"
                  : "border-gray-200 hover:border-pink-300"
                }
              `}
              onClick={() => setSelectedMethod(method.id as any)}
            >
              <div className="flex flex-col items-center p-0">
                <img className="bg-transparent h-12 md:h-15" src={method.component}/>
                
              </div>
            </div>
          ))}
        </div> */}
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`
              rounded-lg p-2 bg-[#E5E5E5] cursor-pointer transition-all duration-200 
              hover:shadow-lg  
              ${selectedMethod === method.id
                ? "border-2 border-pink-500 bg-pink-50 shadow-md"
                : "border-gray-200 hover:border-pink-300"
              }
            `}
            onClick={() => setSelectedMethod(method.id as any)}
          >
             <div className="flex flex-col items-center p-0">
                      <img className="bg-transparent h-12" src={method.component}/>
             </div>
            
          </div>
        ))}
      </div>
      </div>


              {/* Phone Number Input */}
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-[#333333] dark:text-white mb-2">
                      Country
                    </label>
                    <Input
                      type="tel"
                      readOnly
                      value="+254"
                      className="border-2 border-[#c62676] bg-[#F2F2F2] text-xs md:tex-base dark:bg-[#333333] h-13.5"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-[#333333] dark:text-white mb-2">
                      Phone Number*
                    </label>
                    <Input
                      type="tel"
                      placeholder="720 123 456"
                      className="border-2 border-[#c62676] bg-[#F2F2F2] dark:bg-[#333333] h-13.5"
                    />
                  </div>
                </div>

                {/* Pay Button */}
                <Button
                  onClick={() => onPayClick()}
                  className="cursor-pointer w-full bg-[#c62676] hover:bg-[#b3246a] text-white py-6 text-lg font-semibold mt-6"
                >
                  Pay
                </Button>
              </div>
            </div>

            {/* Cart Section */}
            <div className="flex-1 bg-white dark:bg-[#2C2C2C] rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#333333] dark:text-white">
                  Your Cart
                </h2>
                <Button
                  variant="outline"
                  className="cursor-pointer flex items-center space-x-2 bg-[#E5E5E5] dark:bg-[#333333]"
                  onClick={() => onAddMoreClick()}
                >
                  <Plus className="h-4 w-4" />
                  <span>Add More</span>
                </Button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-0 py-4 md:p-4 lg:p-4 border-b border-[#e5e5e5] dark:border-[#E5E5E5]"
                  >
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <div className="w-18 h-18 overflow-hidden shadow-sm !p-0 rounded-lg flex items-center flex-shrink-0">
                        <img
                          src={item.logo}
                          alt="Baze"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="max-w-56 md:max-w-60 lg:max-w-65 min-w-0">
                        <h3 className="font-semibold text-[#333333] dark:text-white md:overflow-visible md:whitespace-normal md:text-clip">
                          {item.name}
                        </h3>
                        <p className="text-[#c62676] mt-1 font-semibold">
                          Ksh {item.price}
                        </p>
                      </div>
                    </div>
                    <IconButton className="flex-shrink-0 ml-2">
                      <IoIosCloseCircleOutline className="h-7 w-7 text-[#2C2C2C] dark:text-white" />
                    </IconButton>
                  </div>
                ))}
                {/* Baze Daily Access */}
              </div>

              {/* Total */}
              <div className=" py-2">
                <div className="flex items-center justify-start">
                  <span className="text-2xl font-normal text-[#333333] dark:text-white">
                    Total
                  </span>
                  <span className="text-2xl ml-3 pl-3 border-l font-bold text-[#333333] dark:text-white">
                    Ksh 60
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Partner Packages */}
          <div className="mt-12">
            <div className="flex items-center justify-start mb-6">
              <h2 className="text-2xl font-bold text-[#333333] dark:text-white">
                Other Partner Packages
              </h2>
              <div className="flex space-x-2">
                <MdOutlineChevronRight className="text-[#C62676] h-6 w-6" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#2C2C2C] rounded-2xl p-6 hover:shadow-md transition-shadow min-h-[135px]"
                  onClick={() => onHandleClick(partner)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-[97px] h-[97px] shadow-sm rounded-[20px] flex-shrink-0">
                      <img
                        src={getLogoSrc(partner.logo) || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-3xl font-semibold text-gray-900 dark:text-[#FFFFFF] mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-sm font-normal text-[#2C2C2C] dark:text-[#FFFFFF] line-clamp-3">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {showOtpModal && (
              <div className="fixed inset-0 backdrop-blur bg-black/16 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 w-100 mx-4">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-pink-600 mb-4">
                      Verify Phone Number
                    </h3>
                    <p className="text-[#2C2C2C] dark:text-[#FFFFFF] mb-6">
                      Please enter the OTP code sent to 07******54
                    </p>
                    <OtpInput />

                    <div className="gap-4 justify-center">
                      <button
                        onClick={() => handleVerify()}
                        className="w-full cursor-pointer px-6 py-2 bg-[#C62676] text-white rounded-lg hover:bg-pink-600 transition-colors"
                      >
                        Verify
                      </button>
                      <button
                        onClick={() => handleResend()}
                        className="w-full cursor-pointer mt-2 px-6 py-2 bg-transparent text-[#2C2C2C] dark:text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Resend
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showPaymentModal && (
              <div className="fixed inset-0 backdrop-blur bg-black/16 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 w-100 mx-4">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <img src={"/logos/submit.png"} />
                    </div>
                    <p className="py-3 text-[#C62676] font-bold !text-2xl">
                      Payment Confirmed
                    </p>
                    <p className="text-[#333333] dark:text-white mb-6 font-semibold">
                      Payment received successfully. Go to your content to watch
                      or explore more content to watch
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => handleExplore()}
                        className="cursor-pointer px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Explore More
                      </button>
                      <button
                        onClick={() => handleGoToSubscriptions()}
                        className="cursor-pointer px-6 py-2 bg-[#C62676] text-white rounded-lg hover:bg-pink-700 transition-colors"
                      >
                        My Subscriptions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
