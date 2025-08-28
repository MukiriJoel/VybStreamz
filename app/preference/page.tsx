"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/lib/context/AuthContext"

const genres = [
  "Drama",
  "Comedy",
  "HipHop",
  "RnB",
  "Action",
  "Sci-Fi",
  "Thriller",
  "Romance",
  "Horror",
  "Documentary",
  "Fantasy",
  "Mystery",
  "Adventure",
  "Animation",
  "Biography",
  "Crime",
  "Family",
  "History",
  "Music",
  "Musical",
  "Sport",
  "Superhero",
  "War",
  "Western",
  "Romantic Comedy",
  "Science Fiction",
  "Action Comedy",
  "Spy",
  "Courtroom Drama",
  "Psychological Thriller",
  "Zombie",
  "Paranormal",
  "Musical Drama",
  "Historical Fiction",
]

const initialSelected = ["Action", "Fantasy", "Family", "Action Comedy"]

export default function PreferencePage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(initialSelected)
  const router = useRouter()
  const { isLoggedIn, login } = useAuth() // Added login function

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }
  
  const handleExplore = () => {
    login() // Set logged in state to true
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414] px-4 py-12 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-4">
            Help us understand your preference
          </h1>
          <p className="text-lg sm:text-xl text-[#999999]">Explore, compare, vibe – without switching apps</p>
        </div>

        {/* Genre Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {genres.map((genre, index) => (
            <button
              key={`${genre}-${index}`}
              onClick={() => toggleGenre(genre)}
              className={`
                cursor-pointer px-6 py-3 rounded-full text-sm sm:text-base font-medium
                transition-all duration-200 ease-in-out
                hover:scale-105 active:scale-95
                ${
                  selectedGenres.includes(genre)
                    ? "bg-[#c62676] text-white shadow-lg"
                    : "bg-[#E5E5E5] dark:bg-[#333333] text-[#2C2C2C] dark:text-[#FFFFFF] hover:bg-[#d9d9d9]"
                }
              `}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Ready to Explore Button */}
        <div className="text-center">
          <button 
            className="text-lg sm:text-xl font-medium text-[#c62676] hover:underline transition-all duration-200" 
            onClick={handleExplore}
          >
            I am ready to explore
          </button>
        </div>
      </div>
    </div>
  )
}