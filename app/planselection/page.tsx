"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const router = useRouter();

  const plans = [
    { id: 0, name: "Baze Daily Access only Autorenewal @Ksh 10" },
    { id: 1, name: "Baze Daily Access only Autorenewal @Ksh 10" },
    { id: 2, name: "Baze Daily Access only Autorenewal @Ksh 10" },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] px-2 md:px-4 pt-12 mt-18 max-w-8xl lg:px-6">
       
          <div className="flex w-full flex-col lg:flex-row items-center gap-10  mx-auto my-auto">
            <div className="flex-1 hidden lg:flex w-full items-center bg-white dark:bg-[#2C2C2C] flex justify-center rounded-lg p-8 h-auto md:h-120 shadow-sm">
              <div className="relative">
                <img
                  src="/images/baze_logo 1.png"
                  alt="Baze Logo"
                  className="w-80 h-80 object-contain"
                />
              </div>
            </div>

            <div className="flex-1 w-full ">
              <div className="w-full bg-[#ffffff] dark:bg-[#2C2C2C] rounded-lg px-7 py-9 h-auto md:h-120 shadow-sm">
                <h2 className="text-3xl font-bold text-[#333333] dark:text-white mb-8 text-center">
                  Choose your Preferred Plan
                </h2>

                <div className="space-y-4 mb-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedPlan === plan.id
                          ? "border-[#c62676] bg-[#c62676]/5"
                          : "border-[#d9d9d9] hover:border-[#808080]"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <input
                            type="radio"
                            checked={selectedPlan === plan.id}
                            onChange={() => setSelectedPlan(plan.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedPlan === plan.id
                                ? "border-[#c62676] bg-[#c62676]"
                                : "border-[#808080]"
                            }`}
                          >
                            {selectedPlan === plan.id && (
                              <div className="w-2 h-2 rounded-full bg-[#ffffff]"></div>
                            )}
                          </div>
                        </div>
                        <label className="text-[#333333] dark:text-white font-medium cursor-pointer flex-1">
                          {plan.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex  gap-4">
                  <Button
                    className="cursor-pointer flex-1 text-base md:text-lg bg-[#c62676] hover:bg-[#c62676]/90 text-[#ffffff] font-semibold py-7 px-6 rounded-lg"
                    onClick={() => router.push("/payment")}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    className="cursor-pointer flex-1 text-base md:text-lg bg-[#2c2c2c] hover:bg-[#333333] hover:text-[#ffffff] dark:bg-[#141414] text-[#ffffff] border-[#2c2c2c] font-semibold py-7 px-6 rounded-lg"
                  >
                    <MdOutlineShoppingBag  className="!w-8 !h-8 mr-2" />
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
      
      </div>
    </>
  );
}
