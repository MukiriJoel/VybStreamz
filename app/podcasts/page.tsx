"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share, Download } from 'lucide-react';
import { Search, ShoppingBag, Bell, ChevronLeft, ChevronRight, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaChevronDown } from "react-icons/fa";
import VybzCarouselPodcast from '@/components/VybzCarouselPodcast';
import { MdArrowForward } from 'react-icons/md';
import PartnersSlider from '@/components/PartnersSlider';
import PodcastSlider from '@/components/PodcastSlider';

// Type definitions
interface Episode {
  id: number;
  title: string;
  duration: string;
}

interface Podcast {
  id: number;
  title: string;
  host: string;
  description: string;
  image: string;
  backgroundImage: string;
  audioUrl: string;
  episodes: Episode[];
}

const PodcastPlayer: React.FC = () => {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample podcast data
  const podcasts: Podcast[] = [
    {
      id: 1,
      title: "Sandwich Podcast",
      host: "Sandwich Podcast",
      description: "Podcast | 1h 35min | 30 Songs | Hip Hop",
      image: "/api/placeholder/300/300",
      backgroundImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      episodes: [
        { id: 1, title: "Don't Pity It I Love Offense", duration: "4:39" },
        { id: 2, title: "Why Up", duration: "3:33" },
        { id: 3, title: "Sweet Mama", duration: "4:01" },
        { id: 4, title: "Facts", duration: "3:33" },
        { id: 5, title: "Dora", duration: "5:38" }
      ]
    },
    {
      id: 2,
      title: "Tech Talk Daily",
      host: "Tech Enthusiasts",
      description: "Technology | 45min | 25 Episodes | Weekly",
      image: "/api/placeholder/300/300",
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      episodes: [
        { id: 1, title: "AI Revolution in 2024", duration: "12:45" },
        { id: 2, title: "Crypto Market Updates", duration: "8:20" },
        { id: 3, title: "Mobile App Trends", duration: "15:30" }
      ]
    },
    {
      id: 3,
      title: "Mindful Moments",
      host: "Wellness Warriors",
      description: "Health & Wellness | 30min | 50 Episodes | Daily",
      image: "/api/placeholder/300/300",
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      episodes: [
        { id: 1, title: "Morning Meditation", duration: "10:00" },
        { id: 2, title: "Breathing Exercises", duration: "7:15" },
        { id: 3, title: "Stress Management", duration: "12:30" }
      ]
    },
    {
      id: 4,
      title: "Business Insights",
      host: "Entrepreneur Hub",
      description: "Business | 1h 15min | 40 Episodes | Bi-weekly",
      image: "/api/placeholder/300/300",
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      episodes: [
        { id: 1, title: "Startup Funding 101", duration: "18:45" },
        { id: 2, title: "Marketing Strategies", duration: "22:10" },
        { id: 3, title: "Leadership Skills", duration: "16:55" }
      ]
    }
  ];

  // useEffect(() => {
  //   const audio = audioRef.current as HTMLAudioElement | null;
  //   if (audio) {
  //     const updateTime = () => setCurrentTime(audio.currentTime);
  //     const updateDuration = () => setDuration(audio.duration || 0);
      
  //     audio.addEventListener('timeupdate', updateTime);
  //     audio.addEventListener('loadedmetadata', updateDuration);
      
  //     return () => {
  //       audio.removeEventListener('timeupdate', updateTime);
  //       audio.removeEventListener('loadedmetadata', updateDuration);
  //     };
  //   }
  // }, [selectedPodcast]);

  // const handlePodcastSelect = (podcast: Podcast): void => {
  //   setSelectedPodcast(podcast);
  //   setIsPlaying(false);
  //   setCurrentTime(0);
  // };

  // const togglePlayPause = (): void => {
  //   const audio = audioRef.current as HTMLAudioElement | null;
  //   if (audio) {
  //     if (isPlaying) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // const handleSeek = (e: React.MouseEvent<HTMLDivElement>): void => {
  //   const audio = audioRef.current as HTMLAudioElement | null;
  //   if (audio) {
  //     const rect = e.currentTarget.getBoundingClientRect();
  //     const percent = (e.clientX - rect.left) / rect.width;
  //     audio.currentTime = percent * duration;
  //   }
  // };

  // const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const newVolume = parseFloat(e.target.value);
  //   setVolume(newVolume);
  //   const audio = audioRef.current as HTMLAudioElement | null;
  //   if (audio) {
  //     audio.volume = newVolume;
  //   }
  // };

  // const formatTime = (seconds: number): string => {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = Math.floor(seconds % 60);
  //   return `${mins}:${secs.toString().padStart(2, '0')}`;
  // };

  // const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Header */}
     <main className="">
          {/* Hero Section */}
        <VybzCarouselPodcast/>

      {/* Partners Section */}
        <div className="p-8 max-w-8xl mx-auto">


          {/* Partners Section */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[24px] text-[#333333] dark:text-white font-bold">Partners</h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>

            {/* Horizontal scrollable container */}
              <PartnersSlider></PartnersSlider>
          </div>

          {/* Trending Section */}
          <div className=" pt-10">
            <div className="flex items-center justify-between ">
              <h3 className="text-[24px] text-[#333333] dark:text-white font-bold">
                Trending
              </h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>
            <PodcastSlider></PodcastSlider>
          </div>

          {/* albums Section */}
          <div className=" pt-1">
            <div className="flex items-center justify-between ">
              <h3 className="text-[24px] text-[#333333] dark:text-white font-bold">Digital Skills</h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>
            <PodcastSlider></PodcastSlider>
          </div>
        </div>
     </main>
  
    </div>
  );
};

export default PodcastPlayer;