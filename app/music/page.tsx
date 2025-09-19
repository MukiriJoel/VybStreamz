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
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { MdArrowForward, MdOutlineVideocam } from "react-icons/md";
import VybzCarouselMusic from "@/components/VybzCarouselMusic";
import PartnersSlider from "@/components/PartnersSlider";
import MusicSlider from "@/components/MusicSlider";
import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";


export default function MusicPage() {
  const Router=useRouter();
      
  const onViewMoreClick = () =>{
    Router.push(`/viewMore/`)
  }

  return (
    <div className="bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Main Content */}
      <main className="">
        {/* Podcast Player Section */}
        <VybzCarouselMusic/>

        <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
        

          {/* Partners Section */}
          <div className="">
            <SectionHeader  viewButton={true} title="partners" route="/partners"/>

            {/* Horizontal scrollable container */}
            <PartnersSlider></PartnersSlider>
          </div>

          {/* top ranked Section */}
          <div className="">
              <SectionHeader  viewButton={true} title="top ranked music" route="/music"/>
            <MusicSlider></MusicSlider>
          </div>

          {/* albums Section */}
          <div className="">
              <SectionHeader  viewButton={true} title="albums" route="/music"/>
            <MusicSlider></MusicSlider>
          </div>
        </div>
      </main>
    </div>
  );
}
