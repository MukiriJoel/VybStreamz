"use client"
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DealsPage(){
     const router = useRouter();
    
    const onSubscribeClick = () =>{
         router.push(`/payment/`);
      }
      
    return(
     <div className="bg-[#F2F2F2] dark:bg-[#141414]">
        {/* Main Content */}
        <main className="mt-10">
            <div className="p-2 md:p-4 lg:p-4 max-w-8xl mx-auto">
                 <SectionHeader  viewButton={true} title="partners" route="/partners" />
                 <div className="pt-4 px-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
    {[
      {
        logo: "/logos/bazeLg.png",
        title: "baze",
        subtitle: "Baze Daily Access only Autorenewal",
        percentage: "15",
        price: "100",
        discount: "50",
        buttonText: "subscribe"
      },
      {
        logo: "/logos/netflixLg.png",
        title: "netflix",
        subtitle: "netflix standard plan",
        percentage: "15",
        price: "100",
        discount: "50",
        buttonText: "subscribe"
      },
      {
        logo: "/logos/mdundo.png",
        title: "mdundo",
        subtitle: "mdundo standard plan",
        percentage: "15",
        price: "100",
        discount: "50",
        buttonText: "subscribe"
      },
      {
        logo: "/logos/showmax.png",
        title: "showmax",
        subtitle: "showmax standard plan",
        percentage: "15",
        price: "100",
        discount: "50",
        buttonText: "subscribe"
      },
      {
        logo: "/logos/spotify.png",
        title: "spotify",
        subtitle: "spotify basic plan",
        percentage: "15",
        price: "100",
        discount: "50",
        buttonText: "subscribe"
      },
      {
        logo: "/logos/startimes.png",
        title: "startimes",
        subtitle: "startimes Autorenewal",
        percentage: "15",
        price: "100",
        discount: "50",
        buttonText: "subscribe"
      },
    ].map((item, index) => (
      <div 
        key={index} 
        className="bg-white dark:bg-[#2C2C2C] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex flex-col h-full"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <img
              src={item.logo}
              alt={item.title}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shadow-lg rounded-lg flex-shrink-0"
            />
            <span className="font-extrabold text-black dark:text-white capitalize text-sm sm:text-base md:text-lg truncate">
              {item.title}
            </span>
          </div>
          <span className="bg-[#3bad49] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap ml-2">
            {item.percentage}% OFF
          </span>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg py-2 border-t-2 border-b-2 border-gray-300 font-normal text-[#2C2C2C] dark:text-[#FFFFFF] text-left mb-3 capitalize line-clamp-2 flex-grow">
          {item.subtitle}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm sm:text-base md:text-lg line-through font-normal text-[#2C2C2C] dark:text-[#FFFFFF]">
              Ksh {item.price}
            </span>
            <span className="text-lg sm:text-xl md:text-2xl text-[#2C2C2C] dark:text-[#FFFFFF] font-extrabold mb-2">
              Ksh {item.discount}
            </span>
          </div>
          
          <Button 
            onClick={() => onSubscribeClick()} 
            className="cursor-pointer w-full bg-[#C62676] hover:bg-[#a91e62] text-sm sm:text-base md:text-lg font-semibold text-white rounded-full capitalize py-4 sm:py-5 md:py-6 transition-colors"
          >
            {item.buttonText}
          </Button>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
        </main>
      </div>
    )
}