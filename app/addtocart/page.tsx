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
            <div className="space-y-4 mb-6">
              {/* Baze Daily Access */}
              <div className="flex items-center justify-between p-4 border border-[#e5e5e5] dark:border-[#333333] rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#F2F2F2] dark:bg-[#141414] rounded-lg flex items-center justify-center">
                    <img src="/images/Baze_logo 1.png" alt="Baze" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] dark:text-white">Baze Daily Access only Autorenewal</h3>
                    <p className="text-[#c62676] font-semibold">Ksh 10</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Netflix Premium */}
              <div className="flex items-center justify-between p-4 border border-[#e5e5e5] dark:border-[#333333] rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center">
                    <span className="text-[#ec221f] font-bold text-lg">N</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] dark:text-white">Netflix Premium Three Class</h3>
                    <p className="text-[#c62676] font-semibold">Ksh 10</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* YouTube Premium */}
              <div className="flex items-center justify-between p-4 border border-[#e5e5e5] dark:border-[#333333] rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#F2F2F2] dark:bg-[#141414] rounded-lg flex items-center justify-center">
                    <img src="/images/YTP.png" alt="YouTube" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] dark:text-white">YouTube Premium Individual</h3>
                    <p className="text-[#c62676] font-semibold">Ksh 10</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-[#e5e5e5] dark:border-[#333333] pt-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-[#333333] dark:text-white">Total</span>
                <span className="text-2xl font-bold text-[#333333] dark:text-white">Ksh 60</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Partner Packages */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#333333] dark:text-white">Other Partner Packages</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Baze Package */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/images/Baze_logo 1.png" alt="Baze" className="w-12 h-12 rounded-lg" />
                  <h3 className="text-xl font-bold text-[#333333] dark:text-white">Baze</h3>
                </div>
                <p className="text-[#696969] text-sm">
                  The journey of a couple towards their wedding, in their planning they...
                </p>
              </CardContent>
            </Card>

            {/* Hulu Package */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#2c2c2c] rounded-lg flex items-center justify-center">
                    <span className="text-[#1ce783] font-bold text-lg">hulu</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] dark:text-white">Hulu</h3>
                </div>
                <p className="text-[#696969] text-sm">
                  The journey of a couple towards their wedding, in their planning they...
                </p>
              </CardContent>
            </Card>

            {/* Netflix Package */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center">
                    <span className="text-[#ec221f] font-bold text-lg">N</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] dark:text-white">Netflix</h3>
                </div>
                <p className="text-[#696969] text-sm">
                  The journey of a couple towards their wedding, in their planning they...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
