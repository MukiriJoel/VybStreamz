import { Search, ShoppingCart, Bell, ArrowLeft, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "../parts/Navbar"

export default function HomePage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Header */}
      

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 pt-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Method Section */}
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-[#333333] dark:text-white">Payment Method</h1>
            </div>

            {/* Payment Options */}
            <div className="flex space-x-4 mb-6">
              <div className="flex-1 p-4 border-2 border-[#c62676] rounded-lg bg-[#F2F2F2] dark:bg-[#141414]">
                <div className="h-8">
                  <img src="/images/Mpesa.png" alt="" />
                </div>
              </div>
              <Button variant="outline" className="px-6 py-4 h-auto bg-[#E5E5E5] dark:bg-[#333333] text-[#333333] dark:text-white border-[#d9d9d9]">
                Airtime
              </Button>
              <div className="w-16 h-16 border-2 border-[#d9d9d9] rounded-lg bg-[#F2F2F2] dark:bg-[#141414]">
                <img src="/images/Visa.png" alt="" />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#333333] dark:text-white mb-2">Country</label>
                  <div className="p-3 border-2 border-[#c62676] rounded-lg bg-[#F2F2F2] dark:bg-[#141414] text-center">+254</div>
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-[#333333] dark:text-white mb-2">Phone Number*</label>
                  <Input type="tel" placeholder="720 123 456" className="border-2 border-[#c62676] bg-[#F2F2F2] dark:bg-[#141414] h-12" />
                </div>
              </div>

              {/* Pay Button */}
              <Button className="w-full bg-[#c62676] hover:bg-[#b3246a] text-white py-3 text-lg font-semibold mt-6">
                Pay
              </Button>
            </div>
          </div>

          {/* Cart Section */}
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#333333] dark:text-white">Your Cart</h2>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Plus className="h-4 w-4" />
                <span>Add More</span>
              </Button>
            </div>

            {/* Cart Items */}
            
          </div>
        </div>

        {/* Other Partner Packages */}
        
      </div>
    </div>
    </>
  )
}
