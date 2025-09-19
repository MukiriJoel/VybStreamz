import {
  Pause,
  Play,
  SkipForward,
  Maximize,
  Minimize,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/slider";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Search,
  ShoppingBag,
  Bell,
  ChevronLeft,
  ChevronRight,
  Bookmark,
} from "lucide-react";
import RatingsComponent from "@/components/ratings-section";
import VideoSlider from "@/components/VideoSlider";
import { MdArrowForward, MdPlayArrow } from "react-icons/md";
import { useRouter } from "next/navigation";
import ReviewsSection from "@/components/reviews-section";
import GamesSlider from "@/components/GamesSlider";
import SectionHeader from "@/components/SectionHeader";
import VybzVideoPlayer from "@/components/VybzVideoPlayer";

interface GameDetailsProps {
  videoSrc: string;
  id: any; // Consider using string | number instead of any
}


export default function Gamedetails({ videoSrc, id }: GameDetailsProps) {
  const Router = useRouter();

  const onViewMoreClick = () => {
    Router.push(`/viewMore/`);
  };
return(
    <>
      <VybzVideoPlayer videoSrc ={videoSrc}/>
      {/* Trending Section */}
      <main className="bg-[#F2F2F2] pt-4 dark:bg-[#141414]">
        <section className="px-2 md:px-4 lg:px-6 xl:px-6">
          <SectionHeader  viewButton={true}
            title="top ranked games"
            route="/games"
          />

          <GamesSlider />
        </section>
        <section className="px-2 md:px-4 lg:px-6 xl:px-6">
          <SectionHeader  viewButton={true}
            title="top ranked games"
            route="/games"
          />
          <GamesSlider />
        </section>
      </main>
    </>
  );
}
