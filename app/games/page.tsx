"use client";
import {
  Search,
  ShoppingCart,
  Bell,
  MoreHorizontal,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineSpeakerXMark,
} from "react-icons/hi2";
import {
  MdArrowForward,
  MdChevronLeft,
  MdChevronRight,
  MdOutlineVideocam,
} from "react-icons/md";
import GamesSlider from "@/components/GamesSlider";
import VybzCarouselMusic from "@/components/VybzCarouselMusic";
import VybzCarouselMain from "@/components/VybzCarouselMain";
import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";
import PartnersSlider from "@/components/PartnersSlider";

export default function GamesPage() {
  const Router = useRouter();

  const onViewMoreClick = () => {
    Router.push(`/viewMore/`);
  };

  return (
    <div className="bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Main Content */}
      <main className="">
        <VybzCarouselMain />

        <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
          {/* Partners Section */}
          <div className="">
            <SectionHeader  viewButton={true} title="partners" route="/partners" />
            <PartnersSlider />
          </div>

          {/* top ranked Section */}
          <div className="">
            <SectionHeader  viewButton={true}
              title="top ranked games"
              route="/games"
            />
            <GamesSlider></GamesSlider>
          </div>

          {/* trending Section */}
          <div className="">
            <SectionHeader  viewButton={true} title="trending" route="/games" />
            <GamesSlider></GamesSlider>
          </div>

          {/* trending Section */}
          <div className="">
            <SectionHeader  viewButton={true}
              title="engaging games"
              route="/games"
            />
            <div className="overflow-x-auto scrollbar-hide">
              <GamesSlider></GamesSlider>
            </div>
          </div>

          {/* recent Section */}
          <div className="">
            <SectionHeader  viewButton={true}
              title="recently updated"
              route="/games"
            />
            <GamesSlider></GamesSlider>
          </div>
        </div>
      </main>
    </div>
  );
}
