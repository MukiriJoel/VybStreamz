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
import ReviewSlider from "@/components/ReviewSlider";

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
      <VybzVideoPlayer 
      title="squid games"
      metadata="Game | 16 Yrs+"
      description="A young woman moves in with her boyfriend for a fresh start—only
              to get pulled into a dangerous world of secrets, crime, and
              betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where
              every choice sparks more fire."
      hasCast={false} 
      videoSrc ={videoSrc}
      platformLogo="/logos/bazeLg.png"
      bannerImage="/images/sqLg.png"
      
      />
      
      {/* Trending Section */}
      <main className="bg-[#F2F2F2] pt-4 dark:bg-[#141414] px-2 md:px-4 lg:px-6 xl:px-6">
        <section className="pb-3 pt-8">
          <SectionHeader  viewButton={true}
            title="similar games"
            route="/games"
          />

          <GamesSlider />
        </section>
         <section>
                  <RatingsComponent />
                </section>
                <section>
                        <SectionHeader  viewButton={true} title="user reviews" route={"/viewMore/ContentReview"}/>
                        <ReviewSlider/>
                    </section>
      </main>
    </>
  );
}
