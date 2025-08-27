"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Navbar from "../parts/Navbar"
import NavBar from "@/components/NavBar"
import { useRouter } from 'next/navigation';

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState(0)
   const router = useRouter();

  const plans = [
    { id: 0, name: "Baze Daily Access only Autorenewal @Ksh 10" },
    { id: 1, name: "Baze Daily Access only Autorenewal @Ksh 10" },
    { id: 2, name: "Baze Daily Access only Autorenewal @Ksh 10" },
  ]
  // const handleAddToCart = () =>{
  //   router.push("/payment")
  // }

  return (
    <>
    <NavBar position="relative" />
    <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto ">
            <div className="flex-1 flex justify-center rounded-lg p-8 pb-16 h-120 shadow-sm">
                <div className="relative">
                        <img src="/images/baze_logo 1.png" alt="Baze Logo" className="w-80 h-80 object-contain" />
                </div>
            </div>
        


    <div className="flex-1 max-w-lg">
    <div className="bg-[#ffffff] rounded-lg p-8 pt-16 pb-16 shadow-sm">
      <h2 className="text-3xl font-bold text-[#333333] dark:text-white mb-8 text-center">Choose your Preferred Plan</h2>

      <div className="space-y-4 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
              selectedPlan === plan.id ? "border-[#c62676] bg-[#c62676]/5" : "border-[#d9d9d9] hover:border-[#808080]"
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
                    selectedPlan === plan.id ? "border-[#c62676] bg-[#c62676]" : "border-[#808080]"
                  }`}
                >
                  {selectedPlan === plan.id && <div className="w-2 h-2 rounded-full bg-[#ffffff]"></div>}
                </div>
              </div>
              <label className="text-[#333333] dark:text-white font-medium cursor-pointer flex-1">{plan.name}</label>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 bg-[#c62676] hover:bg-[#c62676]/90 text-[#ffffff] font-semibold py-3 px-6 rounded-lg"
        onClick={() => router.push('/payment')}
        >
          Buy Now
        </Button>
        <Button
        onClick={() => router.push('/addtocart')}
          variant="outline"
          className="flex-1 bg-[#2c2c2c] hover:bg-[#333333] dark:bg-[#999999] text-[#ffffff] border-[#2c2c2c] font-semibold py-3 px-6 rounded-lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add To Cart
        </Button>
      </div>
    </div>
    </div>
    </div>
    </main>
    </>
  )
}
