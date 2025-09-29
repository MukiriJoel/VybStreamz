"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Share,
  Download,
} from "lucide-react";
import {
  Search,
  ShoppingBag,
  Bell,
  ChevronLeft,
  ChevronRight,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import VybzCarouselPodcast from "@/components/VybzCarouselPodcast";
import { MdArrowForward } from "react-icons/md";
import PartnersSlider from "@/components/PartnersSlider";
import PodcastSlider from "@/components/PodcastSlider";
import VybzMusicPlayer from "@/components/VybzMusicPlayer";
import TrackList from "@/components/TrackList";
import SectionHeader from "@/components/SectionHeader";
import ReviewSlider from "@/components/ReviewSlider";
import RatingsComponent from "@/components/ratings-section";

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

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Header */}
      <main className="">
        {/* Hero Section */}
        <VybzMusicPlayer
          audioSrc="/audio/podcast.mp3"
          bannerImage="/images/sandwich2.jpg"
          albumImage="/images/sandwich.jpeg"
          title="sandwich podcast"
          subtitle="Kodong Klan"
          albumInfo="Album | 1hr 45min | 10 episodes"
          description="A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal."
          platformLogo="/logos/spotify.png"
        />

        {/* Partners Section */}
        <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
          {/* Episodes Section */}
          <div className="pt-6 pb-2">
            <TrackList heading="episodes" title="Way Up" subtitle="A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal." />
          </div>

          {/* Trending Section */}
          <div className="pt-0">
            <SectionHeader
              title="similar podcasts"
              viewButton={true}
              route="/podcasts"
            />
            <PodcastSlider></PodcastSlider>
          </div>

          <section>
            <RatingsComponent />
          </section>
          <section>
            <SectionHeader
              viewButton={true}
              title="user reviews"
              route={"/viewMore/ContentReview"}
            />
            <ReviewSlider />
          </section>
        </div>
      </main>
    </div>
  );
};

export default PodcastPlayer;
