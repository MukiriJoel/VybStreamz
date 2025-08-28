import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PlansSlider = () => {
  const Router=useRouter();

  const onPlanClick =()=>{
    Router.push('/payment')
  }
  
  return (
    <>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 sm:gap-3 md:gap-5 lg:gap-6 text-center min-w-max">
          {[
            {
              title: "Baze Daily Access only Autorenewal",
              price:"10"
            },
            {
              title: "Baze Weekly Access only",
              price:"50"
            },
            {
              title: "Baze Monthly Music + Video",
              price:"100"
            },
            {
              title: "Baze 3 months  Music + VIdeo",
              price:"200"
            },
            {
              title: "Baze Daily Access only Autorenewal",
              price:"200"
            },
            {
              title: "Baze Premium",
              price:"250"
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="cursor-pointer bg-[#E5E5E5] dark:bg-[#333333] min-h-40  md:min-h-55 sm:min-h-45  rounded-2xl flex-shrink-0 w-42 sm:w-46 md:w-54 lg:w-62 p-3 sm:p-3 md:p-5 flex flex-col"
            onClick={()=>onPlanClick()}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 min-w-0 flex-1 text-left">
                  <span className="leading-[120%] lg:text-xl sm:text-lg !font-normal text-black dark:text-white capitalize md:text-xl line-clamp-2">
                    {item.title}
                  </span>
                </div>
             
              </div>
              
              
                <div className="flex h-full items-end space-x-2 mt-0">
                  <span className="text-xl lg:text-2xl sm:text-xl !font-extrabold text-[#2C2C2C] dark:text-[#FFFFFF]">
                    Ksh {item.price}
                  </span>
               
                </div>
                
         
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlansSlider;