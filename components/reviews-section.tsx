import { Star, Send, ChevronRight, ChevronLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

type Review = {
  name: string
  date: string
  rating: number
  text: string
}

export default function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)

  const reviews: Review [] = [
    {
      name: "John Doe",
      date: "Aug 15, 2025",
      rating: 5,
      text: "One of the standout features of Vybe Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for everyone looking to streamline their entertainment experience.",
    },
    {
      name: "John Doe",
      date: "Aug 15, 2025",
      rating: 4,
      text: "Awesome platform",
    },
    {
      name: "John Doe",
      date: "Aug 15, 2025",
      rating: 5,
      text: "One of the standout features of Vybe Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for everyone looking to streamline their entertainment experience.",
    },
    {
      name: "John Doe",
      date: "Aug 15, 2025",
      rating: 5,
      text: "One of the standout features of Vybe Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for everyone looking to streamline their entertainment experience.",
    },
    {
      name: "John Doe",
      date: "Aug 15, 2025",
      rating: 5,
      text: "One of the standout features of Vybe Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for everyone looking to streamline their entertainment experience.",
    },
  ]

  const openReviewPopup = (review: Review) => {
    setSelectedReview(review)
  }

  const closeReviewPopup = () => {
    setSelectedReview(null)
  }

  return (
    <div className="px-2">
      {/* Reviews List */}
      <div className="bg-[#E5E5E5] dark:bg-[#333333] rounded-lg px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#333333] dark:text-white text-xl font-semibold">User Reviews</h3>
          <div className="flex items-center space-x-2">
            <span className="text-[#2C2C2C] dark:text-[#FFFFFF] text-sm">Filter Reviews</span>
            <br></br>
            <Select defaultValue="positive" >
              <SelectTrigger className="w-32 bg-white dark:bg-[#2C2C2C]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#eb3131] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-start mb-2">
                    <h4 className="text-[#333333] dark:text-white font-semibold">{review.name}</h4>
                   
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= review.rating ? "fill-[#e7c909] text-[#e7c909]" : "text-[#d9d9d9]"}`}
                      />
                    ))}
                     <span className="text-[#2C2C2C] dark:text-[#FFFFFF] text-sm ml-6">{review.date}</span>
                  </div>
                  <p 
                    className="text-[#2C2C2C] dark:text-[#FFFFFF] line-clamp-3 lg:text-sm lg:leading-relaxed cursor-pointer sm:cursor-default hover:text-[#C62676] sm:hover:text-[#2C2C2C] dark:sm:hover:text-[#FFFFFF] transition-colors sm:block"
                    onClick={() => window.innerWidth < 640 && openReviewPopup(review)}
                  >
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 px-4">
          {/* Mobile Version (sm and below) */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button className="p-2 rounded-full bg-transparent">
              <ChevronLeft className="w-6 h-6 text-[#333333] dark:text-white" />
            </button>
            
            <div className="flex items-center space-x-1">
              <button className="px-3 py-1 text-sm rounded bg-[#C62676] text-white">
                1
              </button>
              <span className="text-[#666666] text-sm">of 68</span>
            </div>
            
            <button className="p-2 rounded-full bg-[#333333] dark:bg-[#999999]">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Tablet Version (md) */}
          <div className="hidden sm:flex md:hidden items-center space-x-2">
            <button className="p-2 rounded-full bg-transparent">
              <ChevronLeft className="w-8 h-8 text-[#333333] dark:text-white" />
            </button>
            
            <button className="px-3 py-2 text-sm rounded bg-[#C62676] text-white">
              1
            </button>
            <button className="px-3 py-2 text-sm rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800">
              2
            </button>
            <button className="px-3 py-2 text-sm rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800">
              3
            </button>
            <span className="text-[#666666]">...</span>
            <button className="px-3 py-2 text-sm rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800">
              68
            </button>
            
            <button className="p-2 rounded-full bg-[#333333] dark:bg-[#999999]">
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Desktop Version (lg and above) */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ChevronLeft className="w-7 h-7 text-[#333333] dark:text-white" />
            </button>
            
            <button className="px-4 py-2 rounded bg-[#C62676] text-white hover:bg-[#B01E5C] transition-colors">
              1
            </button>
            <button className="px-4 py-2 rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              2
            </button>
            <button className="px-4 py-2 rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              3
            </button>
            <span className="text-[#666666] px-2">...</span>
            <button className="px-4 py-2 rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              67
            </button>
            <button className="px-4 py-2 rounded text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              68
            </button>
            
            <button className="p-2 rounded-full bg-[#333333] dark:bg-[#999999] hover:bg-[#4A4A4A] dark:hover:bg-[#777777] transition-colors">
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Review Popup Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:hidden">
          <div className="bg-white dark:bg-[#333333] rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-[#333333] dark:text-white">Review Details</h3>
              <button 
                onClick={closeReviewPopup}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
              >
                <X className="w-5 h-5 text-[#333333] dark:text-white" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#eb3131] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <div>
                  <h4 className="text-[#333333] dark:text-white font-semibold">{selectedReview.name}</h4>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= selectedReview.rating ? "fill-[#e7c909] text-[#e7c909]" : "text-[#d9d9d9]"}`}
                      />
                    ))}
                    <span className="text-[#2C2C2C] dark:text-[#FFFFFF] text-sm ml-2">{selectedReview.date}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-[#2C2C2C] dark:text-[#FFFFFF] text-sm leading-relaxed">
                {selectedReview.text}
              </p>
            </div>
            
            {/* Close Button */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
              <button 
                onClick={closeReviewPopup}
                className="w-full px-4 py-2 bg-[#C62676] text-white rounded hover:bg-[#B01E5C] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}