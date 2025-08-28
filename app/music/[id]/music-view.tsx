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
import { MdArrowForward, MdOutlineVideocam } from "react-icons/md";
import ReviewsSection from "@/components/reviews-section";
import MusicSlider from "@/components/MusicSlider";
import { useRouter } from "next/navigation";
import VybzMusicPlayer from "@/components/VybzMusicPlayer";

export default function MusicView() {
  const router=useRouter();
  
  const onHandleClick = () =>{
      router.push('/viewMore');
  }

  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-[#141414]">
        <VybzMusicPlayer
          audioSrc="/audio/podcast.mp3"
          bannerImage="/images/albumCover.png"
          albumImage="/images/kodong.png"
          title="Disko"
          subtitle="Kodong Klan"
          albumInfo="Album • 1hr 45min • 10 Songs • Hiphop"
          platformLogo="/logos/bazeLg.png"
        />
        {/* Trending Section */}
        <main className="bg-[#F2F2F2] dark:bg-[#141414]">
          <section className="px-6 pb-3 pt-8 px-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Similar Videos
              </h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
                onClick={() => onHandleClick()}
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>

            <MusicSlider />
          </section>
          <section>
            <RatingsComponent />
          </section>
          <section>
            <ReviewsSection />
          </section>
        </main>
      </div>
    </>
  );
}
